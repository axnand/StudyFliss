import { createClient } from '@/utils/supabase/server';
import Navlinks from './Navlinks';

export default async function Navbar() {
  const supabase = createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <nav className={"border-b-primary/10 border-b-2 max-w-5xl mx-auto relative"}>
      {/* <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a> */}
      <div className="lg:px-16 px-8 fixed w-full top-0 z-10 bg-background/80 lg:border-2 border-b lg:border-primary/50 border-primary/20 backdrop-blur-sm max-w-5xl lg:mx-auto lg:m-8 lg:rounded-full rounded-none">
        <Navlinks user={user} />
      </div>
    </nav>
  );
}
