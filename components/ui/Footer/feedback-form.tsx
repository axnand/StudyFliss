'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Button from '../Button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import Input from '../Input';
import { toast } from '@/components/ui/use-toast';
import { getErrorRedirect, getStatusRedirect } from '@/utils/helpers';
import React, { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { cn } from '@/utils/cn';
import { Textarea } from '../textarea';
import { PostgrestError } from '@supabase/supabase-js';

const FormSchema = z.object({
    full_name: z
        .string()
        .min(3, {
            message: 'Full name must be at least 3 characters.'
        })
        .max(100, { message: 'Full name must be at most 100 characters.' }),
    feedback: z
        .string()
        .min(20, { message: 'Feedback must be at least 20 characters.' })
        .max(500, { message: 'Feedback must be at most 500 characters.' }),
    contact_email: z.string().email('Invalid email address.').min(3, {
        message: 'Email address must be at least 3 characters.'
    })
});

export default function FeedbackForm({
    ...props
}: React.ComponentPropsWithoutRef<'form'>) {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            full_name: '',
            contact_email: '',
            feedback: 'I really liked the website! Here are a few suggestions- '
        }
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const supabase = createClient();
    const router = useRouter();

    async function onSubmit() {
        const data = form.getValues();
        // console.log(data);
        try {
            setLoading(true);
            const { data: feedbackData, error } = await supabase
                .from('feedbacks')
                .insert({
                    contact_email: data.contact_email,
                    feedback: data.feedback
                });
            // console.log(feedbackData, error);
            if (error) {
                throw error;
            }
            router.push(
                getStatusRedirect(
                    window.location.toString(),
                    'Feedback submitted',
                    'Your feedback has been successfully recorded.'
                )
            );
        } catch (error: any) {
            console.error(error);
            router.push(
                getErrorRedirect(
                    window.location.toString(),
                    'Error submitting feedack',
                    error.message
                )
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <Form {...form}>
            <form className={cn('space-y-0', props.className)} {...props}>
                {/* <FormField
                    control={form.control}
                    name="full_name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-semibold tracking-tight">
                                Full Name
                            </FormLabel>
                            <FormControl>
                                <Input disabled={loading} className='rounded-lg' placeholder="Harjot Singh" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                /> */}
                <FormField
                    control={form.control}
                    name="contact_email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-semibold tracking-tight">
                                Contact Email
                            </FormLabel>
                            <FormControl>
                                <Input
                                    disabled={loading}
                                    className="rounded-lg"
                                    placeholder="harjot@studyfliss.com"
                                    required={true}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="feedback"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-semibold tracking-tight">
                                Feedback / Suggestions
                            </FormLabel>
                            <FormControl>
                                <Textarea
                                    disabled={loading}
                                    placeholder="I really liked the overall vibe of the website!"
                                    {...field}
                                    className="rounded-lg"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div>
                    <Button
                        type="submit"
                        variant={'outline'}
                        className="border-2 border-primary/50 w-full mt-2 rounded-lg "
                        disabled={loading}
                        onClick={(e) => {
                            e.preventDefault();
                            onSubmit();
                        }}
                    >
                        Submit Feedback
                    </Button>
                </div>
                <p className="text-xs text-muted-foreground">{message}</p>
            </form>
        </Form>
    );
}
