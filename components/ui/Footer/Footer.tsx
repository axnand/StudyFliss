import Link from 'next/link';

import Logo from '@/components/icons/Logo';
import GitHub from '@/components/icons/GitHub';

export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-8 bg-background border-t-primary/10 border-t-2 transition-all duration-300 ease-in-out-sine">
      <div className="grid grid-cols-1 gap-8 py-12 text-foreground border-b lg:grid-cols-12 border-border bg-background transition-all duration-300 ease-in-out-sine">
        <div className="col-span-1 lg:col-span-4">
          <Link
            href="/"
            className="flex items-center flex-initial font-bold md:mr-24"
          >
            <div className='flex flex-row items-center gap-2'>
              <Logo className="size-[54px] hover:bg-primary/20 bg-transparent border-2 border-primary/50 p-3 rounded-2xl" />
              <h1 className="md:text-3xl text-2xl  font-extrabold dark:shadow-primary/80 shadow-primary/30  hover:[text-shadow:_1px_1px_16px_var(--tw-shadow-color)] transition-all duration-300 ease-in-out-sine">
                Study<span className="text-primary/90">Fliss</span>
              </h1>
            </div>
          </Link>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-foreground transition duration-150 ease-in-out hover:text-foreground"
              >
                Home
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-foreground transition duration-150 ease-in-out hover:text-foreground"
              >
                About
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-foreground transition duration-150 ease-in-out hover:text-foreground"
              >
                Careers
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-foreground transition duration-150 ease-in-out hover:text-foreground"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <p className="font-bold text-foreground transition duration-150 ease-in-out hover:text-foreground">
                LEGAL
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-foreground transition duration-150 ease-in-out hover:text-foreground"
              >
                Privacy Policy
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-foreground transition duration-150 ease-in-out hover:text-foreground"
              >
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-start col-span-1 text-foreground lg:col-span-full w-full lg:justify-end ">
          <div className="flex items-center h-10 space-x-6">
            <a
              aria-label="Github Repository"
              href="https://github.com/HarjjotSinghh/"
            >
              <GitHub />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between py-12 space-y-4 md:flex-row bg-background transition-all duration-300 ease-in-out-sine">
        <div>
          <span>
            &copy; {new Date().getFullYear()} StudyFliss. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
