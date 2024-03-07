import { createClient } from '@/utils/supabase/server';
import Navlinks from './Navlinks';
import { Tables } from '@/types_db';

export default async function Navbar() {
    const supabase = createClient();

    const { data: data, error: error } = await supabase.auth.getSession();
    const {data: userDetails, error: userError} = await supabase
        .from('users')
        .select('*')
        .eq('id', data.session?.user.id ?? "")
        .single();

    return (
        <nav
            className={
                'max-w-5xl mx-auto relative'
            }
        >
            {/* <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a> */}
            <div className="lg:px-16 px-4 fixed w-full top-0 z-10 bg-background/80 lg:border-2 border-b lg:border-primary/50 border-primary/20 backdrop-blur-md max-w-5xl lg:mx-auto lg:m-8 lg:rounded-full rounded-none tranisiton-all duration-300 ease-in-out-sine">
                <Navlinks user={userDetails ?? null} />
            </div>
        </nav>
    );
}
