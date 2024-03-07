'use client';

import Link from 'next/link';
import { SignOut } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import Logo from '@/components/icons/Logo';
import { usePathname, useRouter } from 'next/navigation';
import { getRedirectMethod } from '@/utils/auth-helpers/settings';
import ThemeSwitcher from '../ThemeSwitcher';
import Input from '../Input';
import Button from '../Button';
import {
    MdLogin,
    MdLogout,
    MdOutlineSettings,
    MdSettings
} from 'react-icons/md';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import {
    CalendarIcon,
    FileTextIcon,
    HomeIcon,
    InfoCircledIcon,
    PersonIcon,
    RowsIcon
} from '@radix-ui/react-icons';
import { Tables } from '@/types_db';
import {
    CircleUserRoundIcon,
    CogIcon,
    CompassIcon,
    LogOutIcon,
    User2Icon
} from 'lucide-react';
import { FaCircleUser, FaRegCircleUser } from 'react-icons/fa6';
import { CoursesListItem, AboutUsListItem } from '../list-item';

const coursesFields: { title: string; href: string; description: string }[] = [
    {
        title: 'B. Tech',
        href: '/courses/btech',
        description: 'Bachelors of Technology'
    },
    {
        title: 'BBA',
        href: '/courses/bba',
        description: 'Bachelors of Business Administration'
    }
];
const aboutUsFields: { title: string; href: string; description: string }[] = [
    {
        title: 'Our Vision',
        href: '/vision',
        description: 'StudyFliss vision.'
    },
    {
        title: 'Our Team',
        href: '/team',
        description: 'The faces behind StudyFliss.'
    }
];

export default function Navlinks({ user }: { user: Tables<'users'> | null }) {
    const router = getRedirectMethod() === 'client' ? useRouter() : null;

    return (
        <div className="relative flex flex-row justify-between py-4 align-center md:py-4">
            <div className="lg:flex hidden items-center flex-1 ">
                <Link
                    href="/"
                    className={'flex flex-row items-center gap-2 '}
                    aria-label="Logo"
                >
                    <Logo className="size-[54px] hover:bg-primary/5 dark:hover:bg-primary/20 bg-transparent border-2 border-primary/50 p-3 rounded-2xl transition-all duration-300 ease-in-out-sine" />
                    <h1 className="md:text-3xl text-xl font-extrabold transition-all duration-300 ease-in-out-sine dark:shadow-primary/80 shadow-primary/30 sm:block hidden hover:[text-shadow:_1px_1px_16px_var(--tw-shadow-color)] ">
                        Study<span className="text-primary/90">Fliss</span>
                    </h1>
                </Link>
            </div>
            <div className="flex justify-end items-center space-x-2">
                <NavigationMenu className="max-w-[300px]">
                    <NavigationMenuList>
                        {/* <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                Getting started
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                href="/"
                                            >
                                                <Logo />
                                                <div className="mb-2 mt-4 text-lg font-medium">
                                                    StidyFliss
                                                </div>
                                                <p className="text-sm leading-tight text-muted-foreground">
                                                    A website that comprises of resources that a
                                                    student might need to live
                                                    his/her college years to the
                                                    fullest.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <ListItem href="/docs" title="Introduction">
                                        Re-usable components built using Radix
                                        UI and Tailwind CSS.
                                    </ListItem>
                                    <ListItem
                                        href="/docs/installation"
                                        title="Installation"
                                    >
                                        How to install dependencies and
                                        structure your app.
                                    </ListItem>
                                    <ListItem
                                        href="/docs/primitives/typography"
                                        title="Typography"
                                    >
                                        Styles for headings, paragraphs,
                                        lists...etc
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem> */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="bg-transparent hover:bg-primary/20 border-primary/50 border-2 lg:py-6 lg:px-6 md:py-7 py-6 px-4 lg:text-sm text-xs rounded-xl transition-all duration-300 ease-in-out-sine">
                                All Courses
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="">
                                <ul className="grid gap-2 p-4 md:w-[256px] md:grid-cols-1 lg:w-[350px] w-[240px] rounded-2xl">
                                    {coursesFields.map((component) => (
                                        <CoursesListItem
                                            key={component.title}
                                            title={component.title}
                                            href={component.href}
                                        >
                                            {component.description}
                                        </CoursesListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="bg-transparent hover:bg-primary/20 border-primary/50 border-2 lg:py-6 lg:px-6 md:py-7 py-6 px-4 lg:text-sm text-xs rounded-xl transition-all duration-300 ease-in-out-sine">
                                About Us
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="">
                                <ul className="grid gap-2 p-4 md:w-[256px] md:grid-cols-1 lg:w-[350px] w-[240px] rounded-2xl">
                                    {aboutUsFields.map((component) => (
                                        <AboutUsListItem
                                            key={component.title}
                                            title={component.title}
                                            href={component.href}
                                        >
                                            {component.description}
                                        </AboutUsListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                {user ? null : (
                    <Link href="/signin" className={''}>
                        <Button
                            variant={'outline'}
                            type="submit"
                            className={
                                'group bg-transparent hover:bg-primary/20 border-primary/50 border-2 lg:py-6 lg:px-6 py-6 px-4 lg:text-sm text-xs rounded-xl transition-all duration-300 ease-in-out-sine'
                            }
                        >
                            <span className="inline-flex justify-center items-center gap-2 group">
                                Sign In
                                <MdLogin className="size-4 group-hover:ml-0.5 group-hover:-rotate-6 transition-all duration-300 ease-in-out-sine" />
                            </span>
                        </Button>
                    </Link>
                )}

                <ThemeSwitcher />
                <DropdownMenu modal={false}>
                    <DropdownMenuTrigger>
                        <div className="md:px-4 md:py-4 px-4 py-4 rounded-2xl lg:scale-90 bg-transparent border-2 border-primary/50 text-foreground  hover:bg-primary/20 transition-all duration-300 ease-in-out-sine">
                            {user ? (
                                <PersonIcon className="md:w-6 md:h-6 w-4 h-4 " />
                            ) : (
                                <RowsIcon className="md:w-6 md:h-6 w-4 h-4" />
                            )}
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-full min-w-[200px] ">
                        {user && (
                            <>
                                <DropdownMenuLabel className="inline-flex items-center justify-center">
                                    <FaRegCircleUser className="size-4 mr-2 text-foreground/80" />
                                    Your Account
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator className="bg-primary/50 border-1" />
                                <Link href="/account">
                                    <DropdownMenuItem className="hover:cursor-pointer">
                                        <MdOutlineSettings className="size-4 mr-2 text-foreground/80" />
                                        Settings
                                    </DropdownMenuItem>
                                </Link>
                                <Link href="/account">
                                    <DropdownMenuItem className="hover:cursor-pointer mb-2">
                                        <LogOutIcon className="size-4 mr-2 text-foreground/80" />
                                        <form
                                            onSubmit={(e) =>
                                                handleRequest(
                                                    e,
                                                    SignOut,
                                                    router
                                                )
                                            }
                                        >
                                            <Input
                                                type="hidden"
                                                name="pathName"
                                                value={usePathname()}
                                            />

                                            <span className="inline-flex justify-center items-center gap-2">
                                                Sign Out
                                            </span>
                                        </form>
                                    </DropdownMenuItem>
                                </Link>
                            </>
                        )}
                        <DropdownMenuLabel className="inline-flex items-center justify-center">
                            <CompassIcon className="size-4 inline-block mr-2" />{' '}
                            Navigation
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator className="bg-primary/50 border-1" />
                        <Link href="/">
                            <DropdownMenuItem className="hover:cursor-pointer">
                                <HomeIcon className="size-4 mr-2" /> Home
                            </DropdownMenuItem>
                        </Link>
                        <Link href="/about-us">
                            <DropdownMenuItem className="hover:cursor-pointer">
                                <InfoCircledIcon className="size-4 mr-2" />{' '}
                                About Us
                            </DropdownMenuItem>
                        </Link>
                        <Link href="/events">
                            <DropdownMenuItem className="hover:cursor-pointer">
                                <CalendarIcon className="size-4 mr-2" /> Events
                            </DropdownMenuItem>
                        </Link>
                        <Link href="/courses">
                            <DropdownMenuItem className="hover:cursor-pointer">
                                <FileTextIcon className="size-4 mr-2" /> Notes
                            </DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}
