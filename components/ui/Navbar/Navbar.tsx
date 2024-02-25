import { createClient } from '@/utils/supabase/server';
import Navlinks from './Navlinks';

export default async function Navbar() {
  const supabase = createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <nav className={"border-b-primary/10 border-b-2 max-w-7xl mx-auto"}>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="px-8">
        <Navlinks user={user} />
      </div>
    </nav>
  );
}
