import { NextRequest, NextResponse } from "next/server";
import { PutObjectCommand, PutObjectCommandInput, S3Client, S3ClientConfig } from "@aws-sdk/client-s3"
import { createClient } from "@/utils/supabase/server";
import crypto from "crypto"
import { File } from "buffer";

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const supabase = createClient();
        const formDataEntries: IterableIterator<[string, FormDataEntryValue]> = (await req.formData()).entries();
        let formDataMap = new Map<string, string | File>();
        for (const [key, value] of formDataEntries) {
            formDataMap.set(key, value as string | File)
        }

        const formDataObject: any = { files: [] };

        for (const [key, value] of formDataMap) {
            if (key.startsWith("files")) {
                formDataObject.files.push(value);
            }
            const parts = key.split('[');
            if (parts.length > 1) {
                const objKey = parts[0];
                const propKey = parts[1].replace(']', '');
                if (!formDataObject[objKey]) {
                    formDataObject[objKey] = propKey === '' ? [] : {};
                }
            } else {
                if (!key.startsWith("files")) {
                    formDataObject[key] = value
                }
            }
        }

        if (!formDataEntries) {
            return NextResponse.json({ error: "Error adding notes.", message: "Body not provided." })
        }
        const { data: session } = await supabase.auth.getSession();
        if (!session.session) {
            return NextResponse.json({ error: "Unauthorized", message: "Not logged in." })
        }

        const filesLinks = await uploadFiles(formDataObject.files);
        const { files, ...outputObject } = formDataObject;
        const { data: existingNote, error: existingNoteError } =
            await supabase
                .from('notes')
                .select('*')
                .eq("semester", parseInt(formDataObject.semester))
                .eq("subject", formDataObject.subject)
                .filter("branch", formDataObject.branch === "" ? "is" : "not.is", null)
                .single();

        if (existingNoteError) {
            if (existingNoteError.code !== "PGRST116") {

                console.error(existingNoteError);
                return NextResponse.json({ success: false, error: 'Error adding notes.', message: existingNoteError.message });
            }
        }
        if (existingNote) {
            var notesLinksArray;
            if (Boolean(JSON.parse(JSON.stringify(existingNote.notes)))) {
                notesLinksArray = Array.from(
                    new Set(
                        [...filesLinks.values(),
                        Boolean(JSON.parse(JSON.stringify(existingNote.notes))) ? (JSON.parse(JSON.stringify(existingNote.notes)))[0] : {}
                        ]
                    )
                ).filter((x) => { return typeof x !== "undefined" })
            } else {
                notesLinksArray = Array.from(
                    new Set(
                        [...filesLinks.values()]
                    )
                ).filter((x) => { return typeof x !== "undefined" })
            }

            const { data: notesData, error: error } = await supabase
                .from('notes')
                .update(
                    {
                        notes: notesLinksArray
                    }
                )
                .eq('id', existingNote.id);
            if (error) {
                console.error(error);
                return NextResponse.json({ success: false, error: 'Error adding notes.', message: error.message });
            }
            return NextResponse.json({ success: true, message: 'Notes added successfully.', notes: notesData });
        }
        const { data: notesData, error: error } = await supabase.from('notes').insert({
            ...outputObject,
            semester: parseInt(formDataObject.semester),
            notes: filesLinks,
            branch: formDataObject.branch === "" ? null : formDataObject.branch
        },);

        if (error) {
            console.error(error);
            return NextResponse.json({ success: false, error: 'Error adding notes.', message: error.message });
        }

        return NextResponse.json({ success: true, message: 'Notes added successfully.', notes: notesData });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ success: false, error: 'Error adding notes.', message: error.message });
    }
}

export const config = {
    api: {
        bodyParser: {
            sizeLimit: "1024mb"
        }
    },
    runtime: "edge",
    maxDuration: 1000 * 60 * 60 * 3,
}

function getContentTypeFromFileName(fileName: string): string {
    const extension = fileName.split('.').pop()?.toLowerCase();

    if (extension) {
        switch (extension) {
            case 'pdf':
                return 'application/pdf';
            case 'gif':
                return 'image/gif';
            case 'jpeg':
            case 'jpg':
                return 'image/jpeg';
            case 'png':
                return 'image/png';
            default:
                return "";
        }
    }

    return "";
}

async function uploadFiles(files: File[]) {
    const S3_BUCKET = process.env.AWS_S3_BUCKET_NAME!;
    const REGION = process.env.AWS_S3_BUCKET_REGION!;
    const ACCESS_KEY = process.env.CLOUDFLARE_BUCKET_ACCESS_KEY!;
    const SECRET_ACCESS_KEY = process.env.CLOUDFLARE_BUCKET_SECRET_ACCESS_KEY!;
    const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID!;
    const s3 = new S3Client({
        endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
        credentials: {
            accessKeyId: ACCESS_KEY,
            secretAccessKey: SECRET_ACCESS_KEY
        },
        region: "auto"
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
                ContentType: getContentTypeFromFileName(file.name),
                ContentDisposition: 'inline',
            } as PutObjectCommandInput;
            const command = new PutObjectCommand(params);
            const data = await s3.send(command);
            const uploadedFileUrl = `https://files.studyfliss.com/${params.Key}`;
            return { link: uploadedFileUrl, name: file.name };
        });
        const results = await Promise.all(uploadPromises);
        return results;
    } catch (error) {
        console.error(error);
        return [];
    }
}