import { createClient } from '@/utils/supabase/server';
import Navlinks from './Navlinks';

export default async function Navbar() {
    const supabase = createClient();

    const { data: data, error: error } = await supabase.auth.getSession();
    const {data: userDetails, error: userError} = await supabase
        .from('users')
        .select('*')
        .eq('id', data.session?.user.id ?? "")
        .single();
    if (!userDetails || userError || error) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-center text-3xl font-bold">
                    Error: Could not fetch user details.
                </h1>
            </div>
        );
    }
    return (
        <nav
            className={
                'border-b-primary/10 border-b-2 max-w-5xl mx-auto relative'
            }
        >
            {/* <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a> */}
            <div className="lg:px-16 px-8 fixed w-full top-0 z-10 bg-background/80 lg:border-2 border-b lg:border-primary/50 border-primary/20 backdrop-blur-md max-w-5xl lg:mx-auto lg:m-8 lg:rounded-full rounded-none tranisiton-all duration-300 ease-in-out-sine">
                <Navlinks user={userDetails} />
            </div>
        </nav>
    );
}
