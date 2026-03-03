import { createClient } from '@/lib/supabase/server';

export default async function AdminPage() {
    const supabase = await createClient();

    const { data: { user }, } = await supabase.auth.getUser();

    if (!user) {
        // TODO: redirect to login page instead of showing unauthorized message
        return <div>Unauthorized</div>;
    }
    return <div>Admin Page</div>;
}
