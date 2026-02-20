import { TableOfContents } from '@/components/table-contents/TableOfContents';
import { PersonalBestTable } from '@/components/tables/PersonalBestTable';
import { ScoresTable } from '@/components/tables/ScoresTable';
import { supabase } from '../../lib/supabaseClient';

export const metadata = {
    title: 'Competition Results - Emma Turinsky',
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

    const levels = [
        ...new Set(scores.map((score) => score.competitions.level)),
    ];

    return (
        <div className="w-full flex flex-col gap-4 md:flex-row py-4 px-6 text-white">
            <div className="min-h-screen grow px-4">
                {levels.reverse().map((level) => (
                    <div className="mt-4" key={level}>
                        <h2
                            id={'lvl' + level}
                            className="text-2xl font-bold text-center"
                        >
                            Level {level}
                        </h2>
                        <section className="flex flex-col overflow-x-auto justify-center mt-4">
                            <h3
                                id={'lvl' + level + '-personal-best'}
                                className="text-2xl font-bold text-start mb-1"
                            >
                                Personal Best
                            </h3>
                            <PersonalBestTable
                                scores={scores.filter(
                                    (score) =>
                                        score.competitions.level === level
                                )}
                            />
                        </section>
                        <section className="flex flex-col overflow-x-auto justify-center mt-4">
                            <h3
                                id={'lvl' + level + '-results'}
                                className="text-2xl font-bold text-start mb-1"
                            >
                                Results
                            </h3>
                            <ScoresTable
                                scores={scores.filter(
                                    (score) =>
                                        score.competitions.level === level
                                )}
                            />
                        </section>
                    </div>
                ))}
            </div>

            <aside className="hidden md:block">
                <TableOfContents />
            </aside>
        </div>
    );
}
