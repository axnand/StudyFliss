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

interface NavlinksProps {
  user?: any;
}

export default function Navlinks({ user }: NavlinksProps) {
  const router = getRedirectMethod() === 'client' ? useRouter() : null;

  return (
    <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
      <div className="flex items-center flex-1">
        {/* <Link href="/" className={""} aria-label="Logo">
          <Logo />
        </Link> */}
        <nav className="ml-6 space-x-2 lg:block">
          <Link href="/" className={''}>
            Pricing
          </Link>
          {user && (
            <Link href="/account" className={''}>
              Account
            </Link>
          )}
        </nav>
      </div>
      <div className="flex justify-end items-center space-x-2">
        {user ? (
          <>
            <p className='text-sm'>{user.email}</p>
            <form onSubmit={(e) => handleRequest(e, SignOut, router)}>
              <Input type="hidden" name="pathName" value={usePathname()} />
              <Button variant={"outline"} type="submit" className={'border-primary/50 border-2 py-6 px-6 rounded-xl'}>
                Sign out
              </Button>
            </form>
          </>
        ) : (
          <Link href="/signin" className={''}>
            <Button variant={"outline"} type="submit" className={'border-primary/50 border-2 py-6 px-6 rounded-xl'}>
                Sign in
              </Button>
          </Link>
        )}
        <ThemeSwitcher />
      </div>
    </div>
  );
}
