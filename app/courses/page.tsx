import { Badge } from '@/components/ui/badge';
import { Map } from 'lucide-react';
import Link from 'next/link';

export default function NotesPage() {
    return (
        <div className="flex flex-col min-h-[100dvh] pt-12 mb-48 px-8">
            <main className="flex-1">
                <section className="w-full py-6 md:py-12 lg:py-20 xl:py-24 max-w-5xl mx-auto flex flex-col gap-8 pt-0 pb-0 ">
                    <div className="overflow-clip relative flex lg:flex-row flex-col items-start justify-start space-y-4 lg:space-y-10">
                        <div className="">
                            <h1 className="-mt-2 lg:leading-tighter text-4xl font-medium tracking-tighter sm:text-5xl md:text-6xl text-balance">
                                Select your{' '}
                                <span className="underline decoration-primary decoration-[6px] underline-offset-[4px] font-bold">
                                    Course
                                </span>
                                .
                            </h1>
                            <div className='flex flex-row items-start justify-start flex-wrap gap-4 mt-8'>
                                <Link href={'/courses/bba'}>
                                    <Badge variant={"outline"} className="border-2 border-primary/50 hover:bg-primary/10 transition-all duration-300 ease-in-out-sine rounded-2xl lg:px-8 px-6 lg:py-2 py-1 lg:text-2xl text-lg font-semibold text-foreground/90">
                                        BBA
                                    </Badge>
                                </Link>
                                <Link href={'/courses/btech'}>
                                    <Badge variant={"outline"} className="border-2 border-primary/50 hover:bg-primary/10 transition-all duration-300 ease-in-out-sine rounded-2xl lg:px-8 px-6 lg:py-2 py-1 lg:text-2xl text-lg font-semibold text-foreground/90">
                                        B Tech
                                    </Badge>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="w-full py-12 md:py-24">
                    <div className="container grid items-center gap-16 px-4 text-center md:px-6 lg:grid-cols-[1fr_1fr] lg:gap-16 xl:grid-cols-[1fr_1fr]">
                        <div className="space-y-4 p-12 border-primary/50 border-2 rounded-2xl">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Today's Notes
                            </h2>
                            <p className="max-w-[700px] text-center text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Explore the latest notes happening in your
                                area. Check out the upcoming notes and register
                                for them.
                            </p>
                        </div>
                        <div className="flex flex-col items-start space-y-4">
                            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                Today's Notes
                            </div>
                            <div className="flex flex-row gap-2 items-center justify-start">
                                <Map className="lg:size-6 size-5" />
                                <span className="lg:text-lg text-sm">
                                    Today's Notes
                                </span>
                            </div>
                            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
                                Register Now
                            </div>
                        </div>
                    </div>
                </section> */}
            </main>
        </div>
    );
}
