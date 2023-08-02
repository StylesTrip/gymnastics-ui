import { PersonalBestTable } from '@/components/tables/PersonalBestTable';
import { ScoresTable } from '@/components/tables/ScoresTable';
import { Suspense } from 'react';
import { supabase } from '../../lib/supabaseClient';

export const metadata = {
    title: 'Scores',
};

async function getScores() {
    let { data, error } = await supabase
        .from('scores')
        .select(
            `id, vault_score, bars_score, beam_score, floor_score, all_around_score, competitions(competition_name)`
        );

    return data;
}

export default async function Page({}) {
    const scores = await getScores();

    return (
        <div className="w-screen h-full md:h-screen bg-white p-4">
            <h1 className="text-3xl font-bold text-center">Level 3</h1>
            <section className="flex flex-col overflow-x-auto justify-center mt-4">
                <h2 className="text-2xl font-bold text-start">Personal Best</h2>
                <PersonalBestTable scores={scores} />
            </section>
            <section className="flex flex-col overflow-x-auto justify-center mt-4">
                <h2 className="text-2xl font-bold text-start">Scores</h2>
                <ScoresTable scores={scores} />
            </section>
        </div>
    );
}
