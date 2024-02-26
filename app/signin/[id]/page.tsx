import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import {
  getAuthTypes,
  getViewTypes,
  getDefaultSignInView,
  getRedirectMethod
} from '@/utils/auth-helpers/settings';
import Card_ from '@/components/ui/Card_/Card_';
import PasswordSignIn from '@/components/ui/AuthForms/PasswordSignIn';
import EmailSignIn from '@/components/ui/AuthForms/EmailSignIn';
import ForgotPassword from '@/components/ui/AuthForms/ForgotPassword';
import UpdatePassword from '@/components/ui/AuthForms/UpdatePassword';
import SignUp from '@/components/ui/AuthForms/Signup';
import Logo from '@/components/icons/Logo';
import Image from 'next/image';
import Link from 'next/link';
import LottieAnimation from '@/components/ui/AuthForms/LottieAnimation';

export default async function SignIn({
  params,
  searchParams
}: {
  params: { id: string };
  searchParams: { disable_button: boolean };
}) {
  const { allowOauth, allowEmail, allowPassword } = getAuthTypes();
  const viewTypes = getViewTypes();
  const redirectMethod = getRedirectMethod();

  // Declare 'viewProp' and initialize with the default value
  let viewProp: string;

  // Assign url id to 'viewProp' if it's a valid string and ViewTypes includes it
  if (typeof params.id === 'string' && viewTypes.includes(params.id)) {
    viewProp = params.id;
  } else {
    const preferredSignInView =
      cookies().get('preferredSignInView')?.value || null;
    viewProp = getDefaultSignInView(preferredSignInView);
    return redirect(`/signin/${viewProp}`);
  }

  // Check if the user is already logged in and redirect to the account page if so
  const supabase = createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (user && viewProp !== 'update_password') {
    return redirect('/');
  } else if (!user && viewProp === 'update_password') {
    return redirect('/signin');
  }

  return (
    <div className="flex lg:flex-row flex-col justify-center items-center py-12 pb-24 gap-8">
      <div className="flex flex-col justify-center items-center p-3 gap-4 w-full md:max-w-md ">
        {/* <Link
          href="/"
          className={'flex flex-row items-center gap-2 '}
          aria-label="Logo"
        >
          <Logo className="size-[54px] hover:bg-primary/20 bg-transparent border-2 border-primary/50 p-3 rounded-2xl transition-all duration-300 ease-in-out-sine" />
          <h1 className="md:text-3xl text-xl font-extrabold dark:shadow-primary/80 shadow-primary/30 sm:block hidden hover:[text-shadow:_1px_1px_16px_var(--tw-shadow-color)] transition-all duration-300 ease-in-out-sine">
            Study<span className="text-primary/90">Fliss</span>
          </h1>
        </Link> */}
        <Card_
          title={
            viewProp === 'forgot_password'
              ? 'Reset Password'
              : viewProp === 'update_password'
                ? 'Update Password'
                : viewProp === 'signup'
                  ? 'Sign up for an account'
                  : 'Sign in to an account'
          }
        >
          {viewProp === 'password_signin' && (
            <PasswordSignIn
              allowEmail={allowEmail}
              redirectMethod={redirectMethod}
            />
          )}
          {viewProp === 'email_signin' && (
            <EmailSignIn
              allowPassword={allowPassword}
              redirectMethod={redirectMethod}
              disableButton={searchParams.disable_button}
            />
          )}
          {viewProp === 'forgot_password' && (
            <ForgotPassword
              allowEmail={allowEmail}
              redirectMethod={redirectMethod}
              disableButton={searchParams.disable_button}
            />
          )}
          {viewProp === 'update_password' && (
            <UpdatePassword redirectMethod={redirectMethod} />
          )}
          {viewProp === 'signup' && (
            <SignUp allowEmail={allowEmail} redirectMethod={redirectMethod} />
          )}
        </Card_>
      </div>
      <LottieAnimation className="md:max-w-lg w-[calc(100%-20px)] lg:block hidden h-full animate-pendulum-spin" />

    </div>
  );
}
