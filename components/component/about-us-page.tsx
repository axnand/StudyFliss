import {
    GitHubLogoIcon,
    GlobeIcon,
    InfoCircledIcon,
    InstagramLogoIcon,
    LinkedInLogoIcon,
    TwitterLogoIcon
} from '@radix-ui/react-icons';
import { BadgeInfoIcon, Briefcase, Calendar, InfoIcon, LucideGlobe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {
    FaGithub,
    FaInstagram,
    FaSquareInstagram,
    FaTwitter,
    FaX,
    FaXTwitter
} from 'react-icons/fa6';
import { MdAutoGraph } from 'react-icons/md';

export function AboutUsPage() {
    return (
        <div className="flex flex-col min-h-[100dvh] pt-12 lg:mb-48 mb-96">
            <main className="flex-1">
                <section className="w-full py-6 md:py-12 lg:py-20 xl:py-24 max-w-7xl mx-auto px-8">
                    <div className="overflow-clip relative  flex lg:flex-row flex-col items-center justify-center px-4 space-y-4 md:px-6 lg:space-y-10">
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
                <section className="w-full pb-6 md:pb-12 lg:pb-20 xl:pb-24 max-w-7xl mx-auto px-8">
                    <div className=" grid items-center gap-8 px-4 text-center md:px-6 lg:grid-cols-[1fr_1fr] lg:gap-16 xl:grid-cols-[1fr_1fr]">
                        <div className="space-y-4 lg:p-12 p-6 border-primary/50 border-2 rounded-2xl">
                            <InfoIcon className="mx-auto lg:size-16 size-12" />
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Up-To-Date Info 
                                </h2>
                                <p className="mx-auto max-w-[600px] text-foreground/40 dark:text-foreground/60 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Our website provides updated notes, datesheets, syllabus and other information for students to study and learn.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4 lg:p-12 p-6 border-primary/50 border-2 rounded-2xl">
                            <MdAutoGraph className="mx-auto lg:size-16 size-12" />
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Examination Analysis 
                                </h2>
                                <p className="mx-auto max-w-[600px] text-foreground/40 dark:text-foreground/60 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Out website provides detailed examination analysis which helps students understand exam patterns and prepare for the exam.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4 lg:p-12 p-6 border-primary/50 border-2 rounded-2xl">
                            <Calendar className="mx-auto lg:size-16 size-12" />
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Latest Events Info
                                </h2>
                                <p className="mx-auto max-w-[600px] text-foreground/40 dark:text-foreground/60 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Our website provides the latest events' details for students to stay updated about all the upcoming events amd not miss any opportunity.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4 lg:p-12 p-6 border-primary/50 border-2 rounded-2xl">
                            <Briefcase className="mx-auto lg:size-16 size-12" />
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Internship Opportunities
                                </h2>
                                <p className="mx-auto max-w-[600px] text-foreground/40 dark:text-foreground/60 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Our website provides internship opportunities for students to get hands-on experience in their field of interest.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="dark:bg-foreground/[3%] bg-foreground/[2%] w-full py-6 md:py-12 lg:py-20 xl:py-24 max-w-7xl mx-auto px-8 rounded-2xl">
                    <div className=" px-4 md:px-6">
                        <div className="grid items-center gap-10 lg:grid-cols-[600px_1fr]">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold text-pretty tracking-tighter sm:text-4xl md:text-5xl">
                                    "The main motive of our website is to not let
                                    anyone miss out on an opportunity that could
                                    potentially be a <span className='decoration-primary decoration-[6px] underline underline-offset-4'>life changing moment</span> for
                                    them."
                                </h2>
                                <div className="flex items-center space-x-2">
                                    <div className="font-medium flex flex-col gap-1">
                                        <h3>— Amitoje Singh Bakshi</h3>
                                        <div className='flex flex-col items-start gap-0 text-sm'>
                                            <span className='hover:text-foreground text-foreground/90 transition-all duration-300 ease-in-out-sine'>&nbsp;&nbsp;&nbsp;&nbsp; Co-Founder & CEO</span>
                                            <span className='hover:text-foreground text-foreground/90 transition-all duration-300 ease-in-out-sine'>&nbsp;&nbsp;&nbsp;&nbsp; StudyFliss</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mx-auto overflow-hidden rounded-xl h-full lg:block hidden">
                                <Image
                                    draggable={false}
                                    alt="Image"
                                    className="select-none object-cover object-center h-full w-full"
                                    height="500"
                                    src="/amitoje-quote.webp"
                                    
                                    width="600"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-6 md:py-12 lg:py-20 xl:py-24 max-w-7xl mx-auto px-8">
                    <div className=" px-4 md:px-6">
                        <div className="grid items-center gap-10 lg:grid-cols-1">
                            <section className="w-full py-12 md:py-24 lg:py-32">
                                <div className=" grid items-center gap-16 px-4 md:px-6">
                                    <div className="space-y-2 flex flex-col gap-0 justify-center items-center tracking-tight">
                                        <h1 className="-mt-2 lg:leading-tighter text-4xl font-medium tracking-tighter sm:text-5xl md:text-6xl text-balance">
                                            Meet Team{' '}
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
                                                    Co-Founder and CEO
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
                                                    Co-Founder and CTO
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
                                                    Co-Founder and CCO
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
                </section> */}
            </main>
        </div>
    );
}

