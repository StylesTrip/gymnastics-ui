import { TableOfContents } from '@/components/table-contents/TableOfContents';
import { PersonalBestTable } from '@/components/tables/PersonalBestTable';
import { ScoresTable } from '@/components/tables/ScoresTable';
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
        <div className="grid md:grid-cols-6 gap-2">
            <TableOfContents />
            <div className="col-span-5">
                <h2 id="lvl3-scores" className="text-2xl font-bold text-center">
                    Level 3
                </h2>
                <section className="flex flex-col overflow-x-auto justify-center mt-4">
                    <h3
                        id="lvl3-personal-best"
                        className="text-2xl font-bold text-start mb-1"
                    >
                        Personal Best
                    </h3>
                    <PersonalBestTable scores={scores} />
                </section>
                <section className="flex flex-col overflow-x-auto justify-center mt-4">
                    <h3
                        id="lvl3-scores"
                        className="text-2xl font-bold text-start mb-1"
                    >
                        Results
                    </h3>
                    <ScoresTable scores={scores} />
                </section>

                <h2
                    id="lvl4-scores"
                    className="text-2xl font-bold text-center mt-2"
                >
                    Level 4
                </h2>
                <section className="flex flex-col overflow-x-auto justify-center mt-4">
                    <h3
                        id="lvl4-personal-best"
                        className="text-2xl font-bold text-start mb-1"
                    >
                        Personal Best
                    </h3>
                    <PersonalBestTable scores={null} />
                </section>
                <section className="flex flex-col overflow-x-auto justify-center mt-4">
                    <h3
                        id="lvl4-scores"
                        className="text-2xl font-bold text-start mb-1"
                    >
                        Results
                    </h3>
                    <ScoresTable scores={null} />
                </section>
            </div>
        </div>
    );
}
