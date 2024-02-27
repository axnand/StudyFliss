'use client';
import React, { useRef, useState } from 'react';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Input from '@/components/ui/Input';
import { TimePicker } from '@/components/ui/time-picker';
import Button from '@/components/ui/Button';
import { TimeValue } from 'react-aria';
import { createClient } from '@/utils/supabase/client';
import { Tables } from '@/types_db';
import { Textarea } from '@/components/ui/textarea';
import { getErrorRedirect, getStatusRedirect } from '@/utils/helpers';
import { useRouter } from 'next/navigation';

const eventSchema = z.object({
    title: z
        .string()
        .min(10, 'Must be at least 10 characters.')
        .max(80, 'Must be at most 80 characters.'),
    host_data: z.custom<Tables<'users'>>(),
    host_user_id: z.string(),
    date: z.string(),
    time: z.custom<TimeValue>(),
    description: z
        .string()
        .min(100, 'Must be at least 100 characters.')
        .max(2000, 'Must be at most 2000 characters.'),
    registration_link: z.string().url('Must be a valid URL.'),
    images: z.custom<File[]>()
});


const CreateEventForm = ({ user }: { user: Tables<'users'> }) => {
    const supabase = createClient();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const formRef = useRef<HTMLFormElement>();
    let imagesLinks: string[] = [];
    const form = useForm<z.infer<typeof eventSchema>>({
        resolver: zodResolver(eventSchema),
        defaultValues: {
            title: '',
            date: '',
            time: {},
            description: '',
            registration_link: '',
            images: [],
            host_data: user,
            host_user_id: user.id
        }
    });

    async function onSubmit(values: z.infer<typeof eventSchema>) {
        // async function uploadFiles(): Promise<string[] | undefined> {
        //     const S3_BUCKET = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME!;
        //     const REGION = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_REGION!;
        //     const ACCESS_KEY =
        //         process.env.NEXT_PUBLIC_AWS_S3_BUCKET_ACCESS_KEY!;
        //     const SECRET_ACCESS_KEY =
        //         process.env.NEXT_PUBLIC_AWS_S3_BUCKET_SECRET_ACCESS_KEY!;
        //     AWS.config.update({
        //         accessKeyId: ACCESS_KEY,
        //         secretAccessKey: SECRET_ACCESS_KEY
        //     });
        //     const s3 = new AWS.S3({
        //         params: { Bucket: S3_BUCKET },
        //         region: REGION
        //     });

        //     try {
        //         const uploadPromises = Array.from(values.images).map(
        //             async (image: File) => {
        //                 const params = {
        //                     Bucket: S3_BUCKET,
        //                     Key:
        //                         image.name.split('.')[0] +
        //                         '-' +
        //                         crypto.randomBytes(32).toString('hex') +
        //                         '.' +
        //                         image.name.split('.').slice(-1),
        //                     Body: image
        //                 } as AWS.S3.Types.PutObjectRequest;

        //                 const data = await s3
        //                     .putObject(params)
        //                     .on('httpUploadProgress', (evt: Progress) => {
        //                         console.log(
        //                             'Uploading ' +
        //                                 String((evt.loaded * 100) / evt.total) +
        //                                 '%'
        //                         );
        //                     })
        //                     .promise();

        //                 const uploadedImageUrl = `https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/${params.Key}`;
        //                 console.log(uploadedImageUrl);
        //                 return uploadedImageUrl;
        //             }
        //         );

        //         const results = await Promise.all(uploadPromises);
        //         return results;
        //     } catch (error) {
        //         console.error(error);
        //         return [];
        //     }
        // }

        try {
            setLoading(true);
            const formData = new FormData();
            formData.set('title', values.title);
            formData.set('date', values.date);
            formData.set('time', JSON.stringify(values.time));
            formData.set('description', values.description);
            formData.set('registration_link', values.registration_link);
            formData.set('host_user_id', values.host_user_id);
            Array.from(values.images).forEach((file, index) => {
                formData.set(`images[${index}]`, file);
            });
            for (const [key, data] of Object.entries(values.host_data)) { 
                formData.set(`host_data[${key}]`, data ? data.toString() : "");
            }

            const res = await fetch('/api/images/create', {
                method: 'POST',
                body: formData
            });

            // for (var key of formData.entries()) {
            //     console.log(key[0] + ', ' + key[1]);
            // }
            // const imagesLinks = await uploadFiles();
            // // console.log(imagesLinks);
            // const { data, error } = await supabase.from('events').insert({
            //     host_data: user,
            //     host_user_id: user.id,
            //     slug: values.title
            //         .toLowerCase()
            //         .replace(/ /g, '-')
            //         .replace(/[^\w-]+/g, ''),
            //     ...values,
            //     time: `${values.time?.hour}:${values.time?.minute}:${values.time?.second}`,
            //     images: imagesLinks
            // });
            // console.log(imagesLinks);

            // if (error) {
            //     console.error(error);
            //     router.push(
            //         getErrorRedirect(
            //             window.location.toString(),
            //             'Error creating event.',
            //             error.message
            //         )
            //     );
            if (res.ok) {
                router.push(
                    getStatusRedirect(
                        window.location.toString(),
                        'Event created successfully.',
                        `Event successfully created at ${window.location.origin}/events/${values.title
                            .toLowerCase()
                            .replace(/ /g, '-')
                            .replace(/[^\w-]+/g, '')}`
                    )
                );
            } else {
                router.push(
                    getErrorRedirect(
                        window.location.toString(),
                        'Error creating event.',
                        res.statusText
                    )
                );
            }
        } catch (error: any) {
            console.error(error);
            router.push(
                getErrorRedirect(
                    window.location.toString(),
                    'Error creating event.',
                    error.message
                )
            );
        } finally {
            form.reset();
            setLoading(false);
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 w-full lg:max-w-2xl lg:border-2 lg:border-primary/50 rounded-xl p-8 mt-12 mb-24"
            >
                <h1 className="lg:leading-tighter text-3xl text-center font-medium tracking-tighter sm:text-4xl md:text-5xl text-balance">
                    Add an{' '}
                    <span className="underline decoration-primary decoration-[6px] underline-offset-[4px] font-bold">
                        Event
                    </span>
                </h1>
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-base font-medium">
                                Title
                            </FormLabel>
                            <FormControl>
                                <Input placeholder="Event Title" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-base font-medium">
                                Date
                            </FormLabel>
                            <FormControl>
                                <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-base font-medium">
                                Time
                            </FormLabel>
                            <FormControl>
                                <TimePicker label="time" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-base font-medium">
                                Description
                            </FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Event Description"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="registration_link"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-base font-medium">
                                Registration Link
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Registration Link"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="images"
                    render={({ field: { onChange }, ...field }) => {
                        const images = form.watch('images');
                        return (
                            <FormItem>
                                <FormLabel className="text-base font-medium">
                                    Poster/Image(s)
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        type="file"
                                        accept="image/*"
                                        multiple={true}
                                        disabled={form.formState.isSubmitting}
                                        {...field}
                                        onChange={(event) => {
                                            const dataTransfer =
                                                new DataTransfer();
                                            if (images) {
                                                Array.from(images).forEach(
                                                    (image) =>
                                                        dataTransfer.items.add(
                                                            image as File
                                                        )
                                                );
                                            }
                                            Array.from(
                                                event.target.files!
                                            ).forEach((image) =>
                                                dataTransfer.items.add(image)
                                            );
                                            const newFiles = dataTransfer.files;
                                            onChange(newFiles);
                                        }}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />

                <Button
                    disabled={loading}
                    size={'lg'}
                    className="w-full"
                    type="submit"
                >
                    Create Event
                </Button>
            </form>
        </Form>
    );
};

export default CreateEventForm;
