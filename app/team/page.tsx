import {
    LinkedInLogoIcon,
} from '@radix-ui/react-icons';
import {
    Briefcase,
    Calendar,
    InfoIcon,
    LucideGlobe
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {
    FaGithub,
    FaInstagram,
    FaXTwitter
} from 'react-icons/fa6';

export default function TeamPage() {
    return (
        <div className="flex flex-col min-h-[100dvh]  lg:mb-48 mb-96">
            <main className="flex-1">
                <section className="w-full max-w-7xl mx-auto px-4">
                    <div className="">
                        <div className="grid items-center gap-10 lg:grid-cols-1">
                            <section className="w-full py-12 md:py-24 lg:py-32">
                                <div className=" grid items-center gap-16">
                                    <div className="space-y-2 flex flex-col gap-0 justify-center items-center tracking-tight">
                                        <h1 className="-mt-2 text-center lg:leading-tighter text-4xl font-medium tracking-tighter sm:text-5xl md:text-6xl text-pretty">
                                            Meet<br className='md:hidden'/> Team{' '}
                                            <span className="underline decoration-primary decoration-[6px] underline-offset-[4px] font-bold">
                                                StudyFliss
                                            </span>
                                        </h1>
                                        <p className="max-w-[700px] text-center text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                            We're a team of undergraduate
                                            students from New Delhi, united by
                                            our passion for improving everyone's
                                            current college experience and
                                            making the lives of students easier.
                                        </p>
                                    </div>
                                    <div className="flex max-w-full justify-center mx-auto items-center flex-wrap flex-row gap-12 lg:gap-12">
                                        <div className="flex flex-col gap-4">
                                            <img
                                                draggable={false}
                                                alt="Avatar"
                                                className="select-none mx-auto shadow-xl shadow-primary/20 hover:shadow-primary/35 transition-all duration-300 ease-in-out-sine aspect-square overflow-hidden rounded-full object-cover object-center border-primary border-2 md:size-80 sm:size-56 size-full"
                                                height="500"
                                                src="/amitoje.png"
                                                width="500"
                                            />
                                            <div className="flex flex-col gap-0 items-center">
                                                <h3 className="text-xl font-bold">
                                                    Amitoje Singh Bakshi
                                                </h3>
                                                <p className="text-md text-foreground/80">
                                                    Chief Executive Officer
                                                </p>
                                                <div className="flex flex-row mt-4 items-center justify-start divide-x-2 divide-primary/20 [:first-child]:mr-0 [:first-child]:ml-0">
                                                    {/* <Link
                                                        href="https://harjot.pro"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <LucideGlobe className="size-6 mx-2 hover:text-primary transition-all duration-300 ease-in-out-sine text-foreground/80" />
                                                    </Link> */}
                                                    <Link
                                                        href="https://www.linkedin.com/in/amitojesbakshi"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <LinkedInLogoIcon className="size-6 mx-2 hover:text-primary transition-all duration-300 ease-in-out-sine text-foreground/80" />
                                                    </Link>
                                                    {/* <Link
                                                        href="https://github.com/HarjjotSinghh"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <FaGithub className="size-6 mx-2 hover:text-primary transition-all duration-300 ease-in-out-sine text-foreground/80" />
                                                    </Link> */}
                                                    {/* <Link
                                                        href="https://twitter.com/HarjjotSinghh"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <FaXTwitter className="size-6 mx-2 hover:text-primary transition-all duration-300 ease-in-out-sine text-foreground/80" />
                                                    </Link> */}
                                                    <Link
                                                        href="https://www.instagram.com/amitojesb_official"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <FaInstagram className="size-6 mx-2 hover:text-primary transition-all duration-300 ease-in-out-sine text-foreground/80" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <img
                                                draggable={false}
                                                alt="Avatar"
                                                className="select-none mx-auto shadow-xl shadow-primary/20 hover:shadow-primary/35 transition-all duration-300 ease-in-out-sine aspect-square overflow-hidden rounded-full object-cover object-center border-primary border-2 md:size-80 sm:size-56 size-full"
                                                height="500"
                                                src="/harjot.webp"
                                                width="500"
                                            />
                                            <div className="flex flex-col gap-0 items-center">
                                                <h3 className="text-xl font-bold">
                                                    Harjot Singh Rana
                                                </h3>
                                                <p className="text-md text-foreground/80">
                                                    Chief Technical Officer
                                                </p>
                                                <div className="flex flex-row mt-4 items-center justify-start divide-x-2 divide-primary/20 [:first-child]:mr-0 [:first-child]:ml-0">
                                                    <Link
                                                        href="https://harjot.pro"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <LucideGlobe className="size-6 mx-2 hover:text-primary transition-all duration-300 ease-in-out-sine text-foreground/80" />
                                                    </Link>
                                                    <Link
                                                        href="https://www.linkedin.com/in/HarjjotSinghh/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <LinkedInLogoIcon className="size-6 mx-2 hover:text-primary transition-all duration-300 ease-in-out-sine text-foreground/80" />
                                                    </Link>
                                                    <Link
                                                        href="https://github.com/HarjjotSinghh"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <FaGithub className="size-6 mx-2 hover:text-primary transition-all duration-300 ease-in-out-sine text-foreground/80" />
                                                    </Link>
                                                    <Link
                                                        href="https://twitter.com/HarjjotSinghh"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <FaXTwitter className="size-6 mx-2 hover:text-primary transition-all duration-300 ease-in-out-sine text-foreground/80" />
                                                    </Link>
                                                    <Link
                                                        href="https://instagram.com/harjotzlife"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <FaInstagram className="size-6 mx-2 hover:text-primary transition-all duration-300 ease-in-out-sine text-foreground/80" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <img
                                                draggable={false}
                                                alt="Avatar"
                                                className="select-none mx-auto shadow-xl shadow-primary/20 hover:shadow-primary/35 transition-all duration-300 ease-in-out-sine aspect-square overflow-hidden rounded-full object-cover object-center border-primary border-2 md:size-80 sm:size-56 size-full"
                                                height="500"
                                                src="/meet.png"
                                                width="500"
                                            />
                                            <div className="flex flex-col gap-0 items-center">
                                                <h3 className="text-xl font-bold">
                                                    Prabhmeet Singh
                                                </h3>
                                                <p className="text-md text-foreground/80">
                                                    Chief Commercial Officer
                                                </p>
                                                <div className="flex flex-row mt-4 items-center justify-start divide-x-2 divide-primary/20 [:first-child]:mr-0 [:first-child]:ml-0">
                                                    {/* <Link
                                                        href="https://harjot.pro"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <LucideGlobe className="size-6 mx-2 hover:text-primary transition-all duration-300 ease-in-out-sine text-foreground/80" />
                                                    </Link> */}
                                                    <Link
                                                        href="https://www.linkedin.com/in/prabhmeet-singh-41a841284/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <LinkedInLogoIcon className="size-6 mx-2 hover:text-primary transition-all duration-300 ease-in-out-sine text-foreground/80" />
                                                    </Link>
                                                    <Link
                                                        href="https://github.com/MeetDotPy"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <FaGithub className="size-6 mx-2 hover:text-primary transition-all duration-300 ease-in-out-sine text-foreground/80" />
                                                    </Link>
                                                    <Link
                                                        href="https://twitter.com/Me3t_22"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <FaXTwitter className="size-6 mx-2 hover:text-primary transition-all duration-300 ease-in-out-sine text-foreground/80" />
                                                    </Link>
                                                    <Link
                                                        href="https://www.instagram.com/me3t_22/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <FaInstagram className="size-6 mx-2 hover:text-primary transition-all duration-300 ease-in-out-sine text-foreground/80" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
                {/* <section className="w-full py-12 md:py-24">
                    <div className=" px-4 md:px-6">
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
                                <p className="mx-auto max-w-[700px] text-foreground/80 dark:text-foreground/90 md:text-xl/relaxed">
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
                </section> */}
            </main>
        </div>
    );
}
