import { updateSession } from "@/lib/supabase/proxy";

export default async function proxy(request) {
    return await updateSession(request);
}

export const config = {
    matcher: ['/admin'],
};
