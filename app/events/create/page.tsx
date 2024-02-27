import React from 'react';
import CreateEventForm from './create-event.form';
import { createClient } from '@/utils/supabase/server';
import { toast } from '@/components/ui/use-toast';
import { redirect } from 'next/navigation';
import { getErrorRedirect } from '@/utils/helpers';

export default async function CreateEventPage() {
    const supabase = createClient();
    const { data } = await supabase.auth.getSession();
    if (!data.session) {
        redirect(
            getErrorRedirect(
                '/signin/password_signin',
                'Cannot create event.',
                "You must logged in order to create a new event."
              )
        )
    }
    const {data: userDetails, error: userError} = await supabase.from("users").select("*").eq("id", data.session.user.id).single();
    if (userError) {
        redirect(
            getErrorRedirect(
                '/events',
                'Cannot fetch user details.',
                userError.message
              )
        )
    }
    return (
        <div className="flex flex-col items-center justify-center">
            <CreateEventForm user={userDetails} />
        </div>
    );
}
