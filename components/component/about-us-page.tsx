import Image from 'next/image';
import Link from 'next/link';

export function AboutUsPage() {
    return (
        <div className="flex flex-col min-h-[100dvh] pt-12">
            <main className="flex-1">
                <section className="w-full py-6 md:py-12 lg:py-20 xl:py-24">
                    <div className="overflow-clip relative container flex lg:flex-row flex-col items-center justify-center px-4 space-y-4 md:px-6 lg:space-y-10">
                        <div className="text-center">
                            <h1 className="-mt-2 lg:leading-tighter text-4xl font-medium tracking-tighter sm:text-5xl md:text-6xl text-balance">
                                About{' '}
                                <span className="underline decoration-primary decoration-[6px] underline-offset-[4px] font-bold">
                                    StudyFliss
                                </span>
                            </h1>
                            <p className="mx-auto max-w-[70ch] mt-4 text-foreground/40 dark:text-foreground/60 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                A website that comprises all the information/
                                resources a student might need to live his/her
                                college years to the fullest. Through the
                                efficient use of technology, we will transform
                                the access to resources for students.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24">
                    <div className="container grid items-center gap-8 px-4 text-center md:px-6 lg:grid-cols-[1fr_1fr] lg:gap-16 xl:grid-cols-[1fr_1fr]">
                        <div className="space-y-4 p-12 border-primary/50 border-2 rounded-2xl">
                            <RocketIcon className="mx-auto h-20 w-20" />
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Personalized Learning
                                </h2>
                                <p className="mx-auto max-w-[600px] text-foreground/40 dark:text-foreground/60 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Our platform adapts to each student's needs,
                                    providing personalized learning experiences.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4 p-12 border-primary/50 border-2 rounded-2xl">
                            <MousePointerClickIcon className="mx-auto h-20 w-20" />
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Interactive Courses
                                </h2>
                                <p className="mx-auto max-w-[600px] text-foreground/40 dark:text-foreground/60 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Engage with dynamic and interactive course
                                    materials that make learning fun and
                                    effective.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4 p-12 border-primary/50 border-2 rounded-2xl">
                            <ActivityIcon className="mx-auto h-20 w-20" />
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Real-time Progress Tracking
                                </h2>
                                <p className="mx-auto max-w-[600px] text-foreground/40 dark:text-foreground/60 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Students and parents can monitor progress,
                                    identify areas for improvement, and
                                    celebrate achievements in real time.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4 p-12 border-primary/50 border-2 rounded-2xl">
                            <ActivityIcon className="mx-auto h-20 w-20" />
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Another Really Cool Feature
                                </h2>
                                <p className="mx-auto max-w-[600px] text-foreground/40 dark:text-foreground/60 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Decription of the above really cool feature.
                                    Like its actually so cool. I am just filling
                                    up space here. Trust me bro the feature is
                                    so cool frfr.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 bg-foreground/5">
                    <div className="container px-4 md:px-6">
                        <div className="grid items-center gap-10 lg:grid-cols-[600px_1fr]">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    “StudyFliss has transformed the way my child
                                    learns. The personalized approach has
                                    boosted her confidence and made learning
                                    enjoyable. Highly recommended!”
                                </h2>
                                <div className="flex items-center space-x-2">
                                    <div className="font-medium">
                                        - Parent of a StudyFliss Student
                                    </div>
                                </div>
                            </div>
                            <div className="mx-auto aspect-[1/1] overflow-hidden rounded-xl sm:aspect-[16/9] lg:order-last">
                                <img
                                    draggable={false}
                                    alt="Image"
                                    classNameselect-none="object-cover object-center"
                                    height="400"
                                    src="/placeholder.svg"
                                    style={{
                                        aspectRatio: '600/400',
                                        objectFit: 'cover'
                                    }}
                                    width="600"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="space-y-4 ">
                    <div className="container px-4 md:px-6">
                        <div className="grid items-center gap-10 lg:grid-cols-1">
                            <section className="w-full py-12 md:py-24 lg:py-32 border-t">
                                <div className="container grid items-center gap-16 px-4 md:px-6">
                                    <div className="space-y-2 flex flex-col gap-0 justify-center items-center">
                                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                            Meet Team StudyFliss
                                        </h2>
                                        <p className="max-w-[700px] text-center text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                            We're a diverse team of designers,
                                            developers, and dreamers, united by
                                            our passion for the web.
                                        </p>
                                    </div>
                                    <div className="flex max-w-full mx-auto items-center flex-wrap flex-row gap-6 lg:gap-12">
                                        <div className="flex flex-col gap-2">
                                            <img
                                                draggable={false}
                                                alt="Avatar"
                                                className="select-none mx-auto aspect-square overflow-hidden rounded-full object-cover object-center border-primary/50 border-2 size-80"
                                                height="500"
                                                src="/placeholder.svg"
                                                width="500"
                                            />
                                            <div className="flex flex-col gap-0 items-center">
                                                <h3 className="text-xl font-bold">
                                                    Amitoje Singh
                                                </h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    Role in the team
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <img
                                                draggable={false}
                                                alt="Avatar"
                                                className="select-none mx-auto aspect-square overflow-hidden rounded-full object-cover object-center border-primary/50 border-2 size-80"
                                                height="500"
                                                src="/placeholder.svg"
                                                width="500"
                                            />
                                            <div className="flex flex-col gap-0 items-center">
                                                <h3 className="text-xl font-bold">
                                                    Harjot Singh
                                                </h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    Role in the team
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <img
                                                draggable={false}
                                                alt="Avatar"
                                                className="select-none mx-auto aspect-square overflow-hidden rounded-full object-cover object-center border-primary/50 border-2 size-80"
                                                height="500"
                                                src="/placeholder.svg"
                                                width="500"
                                            />
                                            <div className="flex flex-col gap-0 items-center">
                                                <h3 className="text-xl font-bold">
                                                    Prabhmeet Singh
                                                </h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    Role in the team
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
                            <div className="space-y-4">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                    Learning
                                </div>
                                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text_5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                    Learning is an Adventure
                                </h2>
                                <Link
                                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                    href="#"
                                >
                                    Get Started
                                </Link>
                            </div>
                            <div className="flex flex-col items-start space-y-4">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                    Adventure
                                </div>
                                <p className="mx-auto max-w-[700px] text-foreground/40 dark:text-foreground/60 md:text-xl/relaxed">
                                    Learning should be fun, engaging, and
                                    inspiring. At StudyFliss, we're dedicated to
                                    creating an educational adventure for every
                                    student.
                                </p>
                                <Link
                                    className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline:none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                                    href="#"
                                >
                                    Contact Sales
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

function RocketIcon({ ...props }) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
    );
}

function MousePointerClickIcon({ ...props }) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m9 9 5 12 1.774-5.226L21 14 9 9z" />
            <path d="m16.071 16.071 4.243 4.243" />
            <path d="m7.188 2.239.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656-2.12 2.122" />
        </svg>
    );
}

function ActivityIcon({ ...props }) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
    );
}
