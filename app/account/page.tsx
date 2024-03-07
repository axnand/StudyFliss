import CustomerPortalForm from '@/components/ui/AccountForms/CustomerPortalForm';
import EmailForm from '@/components/ui/AccountForms/EmailForm';
import NameForm from '@/components/ui/AccountForms/NameForm';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function Account() {
    const supabase = createClient();

    const {
        data: { user }
    } = await supabase.auth.getUser();

    const { data: userDetails } = await supabase
        .from('users')
        .select('*')
        .single();

    if (!user) {
        return redirect('/signin');
    }

    return (
        <section className="mb-32 bg-background">
            <div className="max-w-6xl px-4 py-8 mx-auto sm:px-6 sm:pt-24 lg:px-4">
                <div className="sm:align-center sm:flex sm:flex-col">
                    <h1 className="-mt-2 text-center lg:leading-tighter text-4xl font-medium tracking-tighter sm:text-5xl md:text-6xl text-balance">
                        Account{' '}
                        <span className="underline decoration-primary decoration-[6px] underline-offset-[4px] font-bold">
                            Settings
                        </span>
                    </h1>
                </div>
            </div>
            <div className="p-4 max-w-2xl flex gap-8 flex-col  mx-auto lg:px-4">
                <NameForm userName={userDetails?.full_name ?? ''} />
                <EmailForm userEmail={user.email} />
            </div>
        </section>
    );
}
