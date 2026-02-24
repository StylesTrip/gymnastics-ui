'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/lib/supabase/server';

export async function login(formData) {
    const supabase = await createClient();

    const data = {
        email: formData.get('email'),
        password: formData.get('password'),
    };

    const { error } = await supabase.auth.signInWithPassword(data);

    if (error) {
        redirect('/login?error=Invalid%20credentials');
    }

    revalidatePath('/', 'layout');
    redirect('/admin');
}
