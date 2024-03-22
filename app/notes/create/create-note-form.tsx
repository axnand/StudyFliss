'use client';
import React, { useState } from 'react';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Button from '@/components/ui/Button';
import { Database, Tables } from '@/types_db';
import {
    branches,
    getContentTypeFromFileName,
    getErrorRedirect,
    getStatusRedirect
} from '@/utils/helpers';
import { useRouter } from 'next/navigation';
import Input from '@/components/ui/Input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import Spinner from '@/components/ui/spinner';
import { get } from 'http';

const noteSchema = z.object({
    semester: z
        .string()
        .min(1, { message: 'Must be at least 1' })
        .max(6, { message: 'Must be at most 8' }),
    subject: z
        .string()
        .min(5, 'Must be at least 5 characters.')
        .max(50, 'Must be at most 50 characters.'),
    branch: z.custom<Database['public']['Enums']['branch']>().optional(),
    course: z.custom<Database['public']['Enums']['course']>(),
    files: z.custom<File[]>()
});
const defaultValues = {
    files: [],
    semester: '1',
    subject: '',
    branch: undefined,
    course: 'bba' as Database['public']['Enums']['course']
};

const CreateNoteForm = () => {
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof noteSchema>>({
        resolver: zodResolver(noteSchema),
        defaultValues: defaultValues
    });

    async function uploadFileToPresignedUrl(presignedUrl: string, file: File) {
        try {
            const response = await fetch(presignedUrl, {
                method: 'POST',
                body: file,
                headers: {
                    'Content-Type': getContentTypeFromFileName(file.name),
                    'Access-Control-Allow-Origin': '*',
                    'AccessKey': `Bearer`
                }
            });
            if (!response.ok) {
                throw new Error('Failed to upload file');
            }
        } catch (error) {
            console.error('Error uploading file:', error);
            throw error;
        }
    }

    async function onSubmit(values: z.infer<typeof noteSchema>) {
        try {
            setLoading(true);
            const filesData = Array.from(values.files).map((file) => ({
                name: file.name,
                size: file.size
            }));
            const res = await fetch('/api/notes/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    files: filesData
                })
            });

            if (!res.ok) {
                throw new Error('Failed to generate presigned URLs');
            }
            const { presignedUrls } = await res.json();
            console.log(Array.from(values.files));
            await Promise.all(
                Array.from(values.files).map(async (file, index) => { 
                    await uploadFileToPresignedUrl(
                        presignedUrls[index],
                        file
                    );
                })
            );
            router.push(
                getStatusRedirect(
                    window.location.toString(),
                    'Notes added successfully.',
                    `Notes successfully added.`
                )
            );
        } catch (error: any) {
            console.error('Error uploading files:', error);
            router.push(
                getErrorRedirect(
                    window.location.toString(),
                    'Error adding notes.',
                    error.message
                )
            );
        } finally {
            form.reset(); // Reset the form after submission
            setLoading(false);
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 w-full mx-auto lg:max-w-2xl lg:border-2 lg:border-primary/50 rounded-xl p-8 mt-12 mb-24 relative"
            >
                <h1 className="lg:leading-tighter text-3xl text-center font-medium tracking-tighter sm:text-4xl md:text-5xl text-balance">
                    Add{' '}
                    <span className="underline decoration-primary decoration-[6px] underline-offset-[4px] font-bold">
                        Notes
                    </span>
                </h1>

                <FormField
                    control={form.control}
                    name="files"
                    render={({ field: { onChange }, ...field }) => {
                        const files = form.watch('files');
                        return (
                            <FormItem>
                                <FormLabel className="text-base font-medium">
                                    File(s)
                                </FormLabel>
                                <FormDescription className="text-foreground/90 text-sm my-4">
                                    Maximum file size is <b>15MB</b>.<br />
                                    The name of the file will be used as the{' '}
                                    <b className="text-base">
                                        title of the note
                                    </b>
                                    .
                                </FormDescription>
                                <FormControl>
                                    <Input
                                        disabled={loading}
                                        type="file"
                                        accept="application/pdf, image/gif, image/jpeg, image/png"
                                        multiple={true}
                                        {...field}
                                        onChange={(event) => {
                                            const dataTransfer =
                                                new DataTransfer();
                                            if (files) {
                                                Array.from(files).forEach(
                                                    (file) =>
                                                        dataTransfer.items.add(
                                                            file as File
                                                        )
                                                );
                                            }
                                            Array.from(
                                                event.target.files!
                                            ).forEach((file) =>
                                                dataTransfer.items.add(file)
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

                <FormField
                    control={form.control}
                    name="semester"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-base font-medium">
                                Semester
                            </FormLabel>

                            <FormControl>
                                <Input
                                    disabled={loading}
                                    type="number"
                                    min={1}
                                    max={8}
                                    {...field}
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-base font-medium">
                                Subject
                            </FormLabel>

                            <FormControl>
                                <Input
                                    disabled={loading}
                                    placeholder="Subject"
                                    {...field}
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="branch"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-base font-medium">
                                Branch
                            </FormLabel>

                            <FormControl>
                                <Select
                                    disabled={loading}
                                    {...field}
                                    onValueChange={field.onChange}
                                    value={undefined}
                                >
                                    <SelectTrigger
                                        className="rounded-2xl lg:text-lg text-base h-12 lg:px-4 px-3 w-full"
                                        aria-modal={'false'}
                                    >
                                        {field.value ? (
                                            <SelectValue placeholder="Select Branch" />
                                        ) : (
                                            'Select Branch'
                                        )}
                                    </SelectTrigger>
                                    <SelectContent
                                        aria-modal={'false'}
                                        className=" max-h-[300px]"
                                        defaultValue={undefined}
                                    >
                                        {Object.entries(branches).map(
                                            (kv, index) => (
                                                <SelectItem
                                                    className="lg:text-lg text-base lg:px-4 px-2"
                                                    value={kv[0]}
                                                    key={index}
                                                >
                                                    <span>{kv[1]}</span>
                                                </SelectItem>
                                            )
                                        )}
                                    </SelectContent>
                                </Select>
                            </FormControl>

                            <FormMessage />
                            <div className="flex flex-row items-end justify-end ">
                                <Button
                                    variant="outline"
                                    className="rounded-2xl lg:text-base text-sm h-12 lg:px-4 px-6 hover:bg-primary/5 hover:text-primary transition-all duration-300 ease-in-out-sine border-primary/50 border-2"
                                    disabled={form.formState.isSubmitting}
                                    onClick={() => {
                                        form.setValue('branch', undefined);
                                    }}
                                    type="reset"
                                >
                                    Reset Branch
                                </Button>
                            </div>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="course"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-base font-medium">
                                Course
                            </FormLabel>

                            <FormControl>
                                <Select
                                    disabled={loading}
                                    {...field}
                                    onValueChange={field.onChange}
                                >
                                    <SelectTrigger
                                        className="rounded-2xl lg:text-lg text-base h-12 lg:px-4 px-3 w-full"
                                        aria-modal={'false'}
                                    >
                                        <SelectValue
                                            placeholder={'Select Course'}
                                        />
                                    </SelectTrigger>
                                    <SelectContent
                                        aria-modal={'false'}
                                        className=" max-h-[300px]"
                                    >
                                        <SelectItem
                                            className="lg:text-lg text-base lg:px-4 px-2"
                                            value={'bba'}
                                            key={'bba'}
                                        >
                                            <span>BBA</span>
                                        </SelectItem>
                                        <SelectItem
                                            className="lg:text-lg text-base lg:px-4 px-2"
                                            value={'btech'}
                                            key={'btech'}
                                        >
                                            <span>B. Tech</span>
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    disabled={loading}
                    size={'lg'}
                    className="w-full"
                    type="submit"
                >
                    Add Notes
                </Button>
                {loading && (
                    <div className="py-4 absolute inset-0 flex items-center justify-center bg-background/70 backdrop-blur-sm">
                        <Spinner />
                    </div>
                )}
            </form>
        </Form>
    );
};

export default CreateNoteForm;
