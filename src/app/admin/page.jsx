import { CreateCompetition } from '@/components/create/CreateCompetition';
import { createClient } from '@/lib/supabase/server';

export default async function AdminPage() {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        // TODO: redirect to login page instead of showing unauthorized message
        return <div>Unauthorized</div>;
    }
    return (
        <main className="p-4">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <CreateCompetition />
        </main>
    );
}
