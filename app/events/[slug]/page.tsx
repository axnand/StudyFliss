import { createClient } from '@/utils/supabase/server';
import EventPageClient from './event-page';

export default async function EventPage({
    params
}: {
    params: { slug: string };
}) {
    const supabase = createClient();
    const { data: eventData, error: eventError } = await supabase
        .from('events')
        .select('*')
        .eq('slug', params.slug)
        .single();
    if (eventError) {
        console.error(eventError);
        return (
            <div className="flex flex-col min-h-[100dvh] pt-12">
                <main className="flex-1">
                    <section className="w-full py-6 md:py-12 lg:py-20 xl:py-24">
                        <div className="overflow-clip relative container flex lg:flex-row flex-col items-center justify-center px-4 space-y-4 md:px-6 lg:space-y-10">
                            <div className="text-center text-foreground/90">
                                <h1 className="-mt-2 lg:leading-tighter text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-balance">
                                    Error <span className='text-destructive'>404</span>
                                    <br />
                                    <div className='text-4xl font-medium tracking-tight'>
                                        Event called{' '}
                                        <span className="underline underline-offset-4 decoration-primary decoration-[3px] transition-all duration-300 ease-in-out-sine">
                                            {decodeURI(params.slug)
                                                .toLowerCase()
                                                .split(' ')
                                                .map((s: string) => {
                                                    let matchResult = s.match(/\w/);
                                                    if (matchResult) {
                                                        let letterToCapitalize =
                                                            matchResult[0];
                                                        return s.replace(
                                                            letterToCapitalize,
                                                            letterToCapitalize.toUpperCase()
                                                        );
                                                    } else {
                                                        return s; // handle the case when no match is found
                                                    }
                                                })
                                                .join(' ')}
                                        </span>{' '}
                                        does not exist.
                                    </div>
                                </h1>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
    return <EventPageClient event={eventData} />;
}
