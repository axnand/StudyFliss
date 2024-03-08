import LandingPage from '@/components/component/landing-page';
import Pricing from '@/components/ui/Pricing/Pricing';
import { createClient } from '@/utils/supabase/server';

export default async function PricingPage() {
    // const supabase = createClient();
    // const { data: similarEvents, error: similarEventsError } = await supabase
    //     .from('events')
    //     .select('*')
    //     .order('created_at', { ascending: false })
    //     .limit(4);

    return (
        <LandingPage
        // recentEvents={similarEventsError ? [] : similarEvents}
        />
    );
}
