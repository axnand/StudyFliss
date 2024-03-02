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
import { MdLogin, MdLogout, MdOutlineSettings, MdSettings } from 'react-icons/md';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {
    CalendarIcon,
    HomeIcon,
    PersonIcon,
    RowsIcon
} from '@radix-ui/react-icons';
import { Tables } from '@/types_db';
import { CircleUserRoundIcon, CogIcon, CompassIcon, User2Icon } from 'lucide-react';
import { FaCircleUser, FaRegCircleUser } from 'react-icons/fa6';

export default function Navlinks({ user }: { user: Tables<'users'> | null }) {
    const router = getRedirectMethod() === 'client' ? useRouter() : null;

    return (
        <div className="relative flex flex-row justify-between py-4 align-center md:py-4">
            <div className="flex items-center flex-1 ">
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
                {user ? (
                    <>
                        <form
                            onSubmit={(e) => handleRequest(e, SignOut, router)}
                        >
                            <Input
                                type="hidden"
                                name="pathName"
                                value={usePathname()}
                            />
                            <Button
                                variant={'outline'}
                                type="submit"
                                className={
                                    'group bg-transparent hover:bg-primary/20 border-primary/50 border-2 lg:py-6 lg:px-6 py-6 px-4 lg:text-sm text-xs rounded-xl transition-all duration-300 ease-in-out-sine'
                                }
                            >
                                <span className="inline-flex justify-center items-center gap-2">
                                    Sign Out
                                    <MdLogout className="size-4 group-hover:ml-0.5 group-hover:-rotate-6 transition-all duration-300 ease-in-out-sine" />
                                </span>
                            </Button>
                        </form>
                    </>
                ) : (
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
                    <DropdownMenuContent>
                        {user && (
                            <>
                                <DropdownMenuLabel className="inline-flex items-center justify-center">
                                    <FaRegCircleUser className="size-4 mr-2 text-foreground/80" />
                                    Your Account
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <Link href="/account">
                                    <DropdownMenuItem className="hover:cursor-pointer mb-2">
                                        <MdOutlineSettings className="size-4 mr-2 text-foreground/80" />
                                        Settings
                                    </DropdownMenuItem>
                                </Link>
                            </>
                        )}
                        <DropdownMenuLabel className="inline-flex items-center justify-center">
                            <CompassIcon className="size-4 inline-block mr-2" />{' '}
                            Navigation
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <Link href="/">
                            <DropdownMenuItem className="hover:cursor-pointer">
                                <HomeIcon className="size-4 mr-2" /> Home
                            </DropdownMenuItem>
                        </Link>
                        <Link href="/events">
                            <DropdownMenuItem className="hover:cursor-pointer">
                                <CalendarIcon className="size-4 mr-2" /> Events
                            </DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}
