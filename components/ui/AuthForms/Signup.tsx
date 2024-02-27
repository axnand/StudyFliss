'use client';

import Button from '@/components/ui/Button';
import React from 'react';
import Link from 'next/link';
import { signUp } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Input from '../Input';
import Label from '../Label';
// Define prop type with allowEmail boolean
interface SignUpProps {
    allowEmail: boolean;
    redirectMethod: string;
}

export default function SignUp({ allowEmail, redirectMethod }: SignUpProps) {
    const router = redirectMethod === 'client' ? useRouter() : null;
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setIsSubmitting(true); // Disable the button while the request is being handled
        await handleRequest(e, signUp, router);
        setIsSubmitting(false);
    };

    return (
        <div className="my-8">
            <form
                noValidate={true}
                className="mb-4"
                onSubmit={(e) => handleSubmit(e)}
            >
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <div>
                            <Label htmlFor="full_name">Full Name</Label>
                            <Input
                                id="full_name"
                                placeholder="Harjot Singh"
                                type="text"
                                name="full_name"
                                className="w-full p-3 rounded-md bg-background"
                            />
                        </div>
                        <div>
                            <Label htmlFor="college">College</Label>
                            <Input
                                id="college"
                                placeholder="Guru Tegh Bahadur Institute of Technology"
                                type="text"
                                name="college"
                                className="w-full p-3 rounded-md bg-background"
                            />
                        </div>
                        <div>
                            <Label htmlFor="branch">Branch</Label>
                            <Input
                                id="branch"
                                placeholder="CSE"
                                type="text"
                                name="branch"
                                className="w-full p-3 rounded-md bg-background"
                            />
                        </div>
                        <div>
                            <Label htmlFor="semester">Semester</Label>
                            <Input
                                id="semester"
                                placeholder="1"
                                type="number"
                                name="semester"
                                className="w-full p-3 rounded-md bg-background"
                            />
                        </div>
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                placeholder="name@example.com"
                                type="email"
                                name="email"
                                className="w-full p-3 rounded-md bg-background"
                            />
                        </div>
                        <div>
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                placeholder="Password"
                                type="password"
                                name="password"
                                className="w-full p-3 rounded-md bg-background"
                            />
                        </div>
                    </div>
                    <Button
                        variant="slim"
                        type="submit"
                        className="mt-1"
                        disabled={isSubmitting}
                    >
                        Sign up
                    </Button>
                </div>
            </form>
            <p>Already have an account?</p>
            <p>
                <Link
                    href="/signin/password_signin"
                    className="font-light text-sm"
                >
                    Sign in with email and password
                </Link>
            </p>
            {allowEmail && (
                <p>
                    <Link
                        href="/signin/email_signin"
                        className="font-light text-sm"
                    >
                        Sign in via magic link
                    </Link>
                </p>
            )}
        </div>
    );
}
