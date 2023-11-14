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
            `id, vault_score, bars_score, beam_score, floor_score, all_around_score, competitions(competition_name, level)`
        );

    return data;
}

export default async function Page({}) {
    const scores = await getScores();

    return (
        <div className="bg-white w-full flex flex-col gap-5 md:flex-row">
            <aside className="p-2 hidden md:block">
                <TableOfContents />
            </aside>
            <div className="p-2 col-span-5 min-h-screen">
                <h2 id="lvl3" className="text-2xl font-bold text-center">
                    Level 3
                </h2>
                <section className="flex flex-col overflow-x-auto justify-center mt-4">
                    <h3
                        id="lvl3-personal-best"
                        className="text-2xl font-bold text-start mb-1"
                    >
                        Personal Best
                    </h3>
                    <PersonalBestTable
                        scores={scores.filter(
                            (score) => score.competitions.level === 3
                        )}
                    />
                </section>
                <section className="flex flex-col overflow-x-auto justify-center mt-4">
                    <h3
                        id="lvl3-scores"
                        className="text-2xl font-bold text-start mb-1"
                    >
                        Results
                    </h3>
                    <ScoresTable
                        scores={scores.filter(
                            (score) => score.competitions.level === 3
                        )}
                    />
                </section>

                <h2 id="lvl4" className="text-2xl font-bold text-center mt-2">
                    Level 4
                </h2>
                <section className="flex flex-col overflow-x-auto justify-center mt-4">
                    <h3
                        id="lvl4-personal-best"
                        className="text-2xl font-bold text-start mb-1"
                    >
                        Personal Best
                    </h3>
                    <PersonalBestTable
                        scores={scores.filter(
                            (score) => score.competitions.level === 4
                        )}
                    />
                </section>
                <section className="flex flex-col overflow-x-auto justify-center mt-4">
                    <h3
                        id="lvl4-scores"
                        className="text-2xl font-bold text-start mb-1"
                    >
                        Results
                    </h3>
                    <ScoresTable
                        scores={scores.filter(
                            (score) => score.competitions.level === 4
                        )}
                    />
                </section>
            </div>
        </div>
    );
}
