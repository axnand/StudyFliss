import { NextRequest, NextResponse } from "next/server";
import { PutObjectCommand, PutObjectCommandInput, S3Client, S3ClientConfig } from "@aws-sdk/client-s3"
import { createClient } from "@/utils/supabase/server";
import { z } from 'zod';
import { TimeValue } from "react-aria";
import crypto from "crypto"
import { File } from "buffer";
import { Tables } from "@/types_db";

const eventSchema = z.object({
    title: z
        .string()
        .min(10, 'Must be at least 10 characters.')
        .max(80, 'Must be at most 80 characters.'),
    host_data: z.custom<Tables<'users'>>(),
    date: z.string(),
    time: z.custom<TimeValue>(),
    description: z
        .string()
        .min(100, 'Must be at least 100 characters.')
        .max(2000, 'Must be at most 2000 characters.'),
    registration_link: z.string().url('Must be a valid URL.'),
    images: z.custom<File[]>(),
    tags: z.array(z.string()),
});

type event = z.infer<typeof eventSchema>

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const supabase = createClient();
        const formDataEntries: IterableIterator<[string, FormDataEntryValue]> = (await req.formData()).entries();
        let formDataMap = new Map<string, string | File>();
        for (const [key, value] of formDataEntries) {
            formDataMap.set(key, value as string | File)
            // console.log(key, value)
        }
        // console.log(formDataMap)
        // Convert FormData entries to an object of type 'event'
        // const formDataToObject = async (entries: IterableIterator<[string, FormDataEntryValue]>): Promise<event> => {
        //     const formDataObject: Partial<Record<string, any>> = {};
        //     for (const [key, value] of entries) {
        //         switch (key) {
        //             case 'title':
        //             case 'date':
        //             case 'time':
        //             case 'description':
        //             case 'registration_link':
        //                 formDataObject[key] = value as string;
        //                 break;
        //             case 'host_data':
        //                 formDataObject[key] = {}; // Initialize as an object
        //                 for (const [hostDataKey, hostDataValue] of Object.entries(value as string)) {
        //                     // Attempt to parse into an object using JSON.parse
        //                     try {
        //                         formDataObject[key][hostDataKey] = JSON.parse(hostDataValue);
        //                     } catch (error) {
        //                         // Leave it as a string if JSON parsing fails 
        //                         formDataObject[key][hostDataKey] = hostDataValue;
        //                     }
        //                 }
        //                 break;
        //             case 'images':
        //                 formDataObject[key] = []; // Initialize as an array
        //                 // Assuming 'value' is an iterable containing File objects
        //                 for (const file of value as Iterable<File>) {
        //                     formDataObject[key].push(file);
        //                 }
        //                 break;
        //             default:
        //                 // Handle other form fields if needed
        //                 break;
        //         }
        //     }
        //     // Validate the object against the schema
        //     const result = eventSchema.safeParse(formDataObject);
        //     if (result.success) {
        //         return result.data as event;
        //     } else {
        //         throw new Error(`Validation failed: ${JSON.stringify(result.error.errors)}`);
        //     }
        // };
        // const formData: event = await formDataToObject(formDataEntries);
        const formDataObject: any = { images: [], tags: [] };

        for (const [key, value] of formDataMap) {
            if (key.startsWith("tags")) {
                formDataObject.tags.push(value);
            }
            if (key.startsWith("images")) {
                formDataObject.images.push(value);
            }
            const parts = key.split('[');

            if (parts.length > 1) {
                const objKey = parts[0];
                const propKey = parts[1].replace(']', '');

                if (!formDataObject[objKey]) {
                    formDataObject[objKey] = propKey === '' ? [] : {};
                }

                if (propKey === 'id' || propKey === 'updated_at' || propKey === 'username' || propKey === 'full_name' || propKey === 'avatar_url' || propKey === 'college' || propKey === 'branch' || propKey === 'semester' || propKey === 'email') {
                    formDataObject[objKey][propKey] = value;
                }
            } else {
                if (!key.startsWith("images") && !key.startsWith("tags")) {
                    if (key.startsWith("time")) {
                        formDataObject[key] = JSON.parse(value as string)
                    } else {
                        formDataObject[key] = value
                    }
                }
            }
        }

        // console.log(formDataObject);

        if (!formDataEntries) {
            return NextResponse.json({ error: "Error creating event", message: "Body not provided." })
        }
        const { data } = await supabase.auth.getSession();
        if (!data.session) {
            return NextResponse.json({ error: "Unauthorized", message: "Not logged in." })
        }
        const user = data.session?.user;
        const { data: userDetails } = await supabase.from("users").select("*").eq("id", user.id).single();
        if (!userDetails) {
            return NextResponse.json({ error: "Error fetching user details.", message: "Could not fetch user details from database." })
        }

        const imagesLinks = await uploadFiles(formDataObject.images);

        const { data: eventData, error: error } = await supabase.from('events').insert({
            host_data: userDetails,
            host_user_id: user.id,
            slug: formDataObject.title
                .toLowerCase()
                .replace(/ /g, '-')
                .replace(/[^\w-]+/g, ''),
            ...formDataObject,
            time: `${formDataObject.time?.hour}:${formDataObject.time?.minute}:${formDataObject.time?.second}`,
            images: imagesLinks
        });

        if (error) {
            console.error(error);
            return NextResponse.json({ success: false, error: 'Error creating event.', message: error.message });
        }

        return NextResponse.json({ success: true, message: 'Event created successfully.', event: eventData });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ success: false, error: 'Error creating event.', message: error.message });
    }
}

async function uploadFiles(files: File[]) {
    const S3_BUCKET = process.env.AWS_S3_BUCKET_NAME!;
    const REGION = process.env.AWS_S3_BUCKET_REGION!;
    const ACCESS_KEY = process.env.SCALEWAY_BUCKET_ACCESS_KEY!;
    const SECRET_ACCESS_KEY = process.env.SCALEWAY_BUCKET_SECRET_ACCESS_KEY!;

    const s3 = new S3Client({
        credentials: {
            accessKeyId: ACCESS_KEY,
            secretAccessKey: SECRET_ACCESS_KEY
        },
        region: REGION
    } as S3ClientConfig);

    try {
        const uploadPromises = files.map(async (file) => {
            const params = {
                Bucket: S3_BUCKET,
                Key:
                    file.name.split('.')[0] +
                    '-' +
                    crypto.randomBytes(32).toString('hex') +
                    '.' +
                    file.name.split('.').slice(-1),
                Body: await file.arrayBuffer(),
            } as PutObjectCommandInput;
            const command = new PutObjectCommand(params);
            const data = await s3.send(command);
            const uploadedFileUrl = `https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/${params.Key}`;
            return uploadedFileUrl;
        });
        const results = await Promise.all(uploadPromises);
        return results;
    } catch (error) {
        console.error(error);
        return [];
    }
}
