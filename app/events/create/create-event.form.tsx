'use client';
import React, { useState } from 'react';
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
import { Tables } from '@/types_db';
import { Textarea } from '@/components/ui/textarea';
import { getErrorRedirect, getStatusRedirect } from '@/utils/helpers';
import { useRouter } from 'next/navigation';
import { type Option } from '@/components/ui/mutiple-selector';
import MultipleSelector from '@/components/ui/mutiple-selector';
import Spinner from '@/components/ui/spinner';

const eventSchema = z.object({
    title: z
        .string()
        .min(10, 'Must be at least 10 characters.')
        .max(80, 'Must be at most 80 characters.'),
    host_data: z.custom<Tables<'users'>>(),
    host_user_id: z.string(),
    date: z.string(),
    time: z.custom<TimeValue>(),
    location: z
        .string()
        .min(4, 'Please enter a valid location')
        .max(200, 'Location must be at most 200 characters.'),
    description: z
        .string()
        .min(100, 'Must be at least 100 characters.')
        .max(2000, 'Must be at most 2000 characters.'),
    registration_link: z.string().url('Must be a valid URL.'),
    images: z.custom<File[]>(),
    tags: z.custom<Option[]>()
});

const CreateEventForm = ({ user }: { user: Tables<'users'> }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
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
            host_user_id: user.id,
            tags: [],
            location: ''
        }
    });

    async function onSubmit(values: z.infer<typeof eventSchema>) {
        try {
            setLoading(true);
            const formData = new FormData();
            if (values.images.length === 0) {
                return form.setError('images', {
                    message: 'Please select at least one image.'
                });
            }
            if (values.tags.length < 3) {
                return form.setError('tags', {
                    message: 'Please select at least three tag.'
                });
            }
            formData.set('title', values.title);
            formData.set('date', values.date);
            formData.set('time', JSON.stringify(values.time));
            formData.set('description', values.description);
            formData.set('registration_link', values.registration_link);
            formData.set('host_user_id', values.host_user_id);
            formData.set('location', values.location);
            Array.from(values.images).forEach((file, index) => {
                formData.set(`images[${index}]`, file);
            });
            Array.from(values.tags.values()).forEach((tag, index) => {
                formData.set(`tags[${index}]`, tag.value);
            });
            for (const [key, data] of Object.entries(values.host_data)) {
                formData.set(`host_data[${key}]`, data ? data.toString() : '');
            }
            const res = await fetch('/api/images/create', {
                method: 'POST',
                body: formData
            });
            if (res.ok) {
                router.push(
                    `/events/${values.title
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '')}`
                );
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
            router.push(
                `${window.location.origin}/events/${values.title
                    .toLowerCase()
                    .replace(/ /g, '-')
                    .replace(/[^\w-]+/g, '')}`
            );
            form.reset();
            setLoading(false);
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 w-full lg:max-w-2xl lg:border-2 lg:border-primary/50 rounded-xl p-8 mt-12 mb-24 relative"
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
                                <Input
                                    disabled={loading}
                                    placeholder="Event Title"
                                    {...field}
                                />
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
                                <Input
                                    disabled={loading}
                                    type="date"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-base font-medium">
                                Location
                            </FormLabel>
                            <FormControl>
                                <Input
                                    disabled={loading}
                                    type="text"
                                    {...field}
                                />
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
                                    disabled={loading}
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
                                        disabled={loading}
                                        type="file"
                                        accept="image/*"
                                        multiple={true}
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

                <FormField
                    control={form.control}
                    name="tags"
                    render={({ field }) => {
                        const tags = form.watch('tags');
                        return (
                            <FormItem>
                                <FormLabel className="text-base font-medium">
                                    Tags
                                </FormLabel>
                                <FormControl>
                                    <MultipleSelector
                                        maxSelected={5}
                                        onMaxSelected={(maxLimit) => {
                                            router.push(
                                                getErrorRedirect(
                                                    window.location.toString(),
                                                    'Maximum number of tags reached.',
                                                    `You have reached the maximum number of tags. You can only select ${maxLimit} tags.`
                                                )
                                            );
                                        }}
                                        options={tags}
                                        creatable
                                        emptyIndicator={
                                            <p className="text-center text-lg leading-4 text-foreground/70">
                                                No tags found.
                                            </p>
                                        }
                                        placeholder="Add Event Tags"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />
                <span className="text-destructive text-base whitespace-pre-wrap">
                    {message}
                </span>
                <Button
                    disabled={loading}
                    size={'lg'}
                    className="w-full"
                    type="submit"
                    onClick={() => {
                        console.log(form.getValues());
                        if (form.getValues().images.length === 0) {
                            setMessage(
                                (message) =>
                                    message +
                                    '\nPlease select at least one image.'
                            );
                        }
                        if (form.getValues().tags.length < 3) {
                            setMessage(
                                (message) =>
                                    message +
                                    '\nPlease select at least three tags.'
                            );
                        }
                    }}
                >
                    Create Event
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

export default CreateEventForm;
