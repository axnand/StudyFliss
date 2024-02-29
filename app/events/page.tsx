import { createClient } from '@/utils/supabase/server';
import React from 'react';
import EventsPage from './events-page';
import { Tables } from '@/types_db';

export default async function Events() {
    const supabase = createClient();
    const { error, data } = await supabase
        .from('events')
        .select('*')
        .order('created_at', { ascending: false });
    if (error) {
        console.error(error);
        return (
            <div className="flex flex-col min-h-[100dvh] pt-12">
                <main className="flex-1">
                    <section className="w-full py-6 md:py-12 lg:py-20 xl:py-24">
                        <div className="overflow-clip relative container flex lg:flex-row flex-col items-center justify-center px-4 space-y-4 md:px-6 lg:space-y-10">
                            <div className="text-center">
                                <h1 className="-mt-2 lg:leading-tighter text-4xl font-medium tracking-tighter sm:text-5xl md:text-6xl text-balance">
                                    Browse{' '}
                                    <span className="underline decoration-primary decoration-[6px] underline-offset-[4px] font-bold">
                                        Events
                                    </span>
                                </h1>
                                <p className="mx-auto max-w-[70ch] mt-4 text-foreground/40 dark:text-foreground/60 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Explore the latest events happening in your
                                    area. Check out the upcoming events and
                                    register for them.
                                </p>
                                <h1 className="lg:leading-tighter text-2xl font-medium text-red-600 tracking-tight mt-4 sm:text-3xl md:text-4xl text-balance">
                                    Error: Could not fetch events.
                                </h1>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
    return <EventsPage events={data as Tables<'events'>[]} />;
}
