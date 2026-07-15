import { TableOfContents } from '@/components/table-contents/TableOfContents';
import { PersonalBestTable } from '@/components/tables/PersonalBestTable';
import { ScoresTable } from '@/components/tables/ScoresTable';
import { supabase } from '../../lib/supabaseClient';
import { ProgressionChart } from '@/components/progression-chart/ProgressionChart';

export const metadata = {
    title: 'Competition Results - Emma Turinsky',
    description:
        "Explore Emma Turinsky's gymnastics competition results, including personal bests and detailed scores for each event.",
    openGraph: {
        url: 'https://emmaturinsky.com/results',
        type: 'website',
        title: "Emma Turinsky's Competition Results",
        description:
            "Explore Emma Turinsky's gymnastics competition results, including personal bests and detailed scores for each event.",
    },
    twitter: {
        card: 'summary_large_image',
        title: "Emma Turinsky's Competition Results",
        description:
            "Explore Emma Turinsky's gymnastics competition results, including personal bests and detailed scores for each event.",
    },
    alternates: {
        canonical: 'https://emmaturinsky.com/results',
    },
};

async function getLatestLevel() {
    const { data, error } = await supabase
        .from('competitions')
        .select('level')
        .order('level', { ascending: false })
        .limit(1);

    return data[0]?.level;
}

async function getScores(level) {
    const { data, error } = await supabase
        .from('competitions')
        .select(
            'competition_name, level, scores(vault_score, bars_score, beam_score, floor_score, all_around_score)'
        )
        .eq('level', level);
    return data;
}

// TODO: Add unhappy path for when there are no scores for a level. Right now it just shows an empty table.
export default async function Page({ searchParams }) {
    const queryLevel = (await searchParams).level;
    const level =
        typeof queryLevel === 'string'
            ? parseInt(queryLevel)
            : await getLatestLevel();
    const scores = await getScores(level);

    return (
        <main className="w-full flex flex-col gap-4 py-4 px-6 text-white">
            <div className="flex flex-col gap-4 py-4 px-6 bg-white rounded-lg">
                <div className="grow px-4">
                    <h1
                        id={'lvl' + level}
                        className="text-black text-2xl font-bold"
                    >
                        Level {level}
                    </h1>
                    <div className="mt-4" key={level}>
                        <section className="flex flex-col overflow-x-auto justify-center mt-4 shadow-md">
                            <h3
                                id={'lvl' + level + '-personal-best'}
                                className="text-black text-2xl font-bold text-start mb-1"
                            >
                                Personal Best
                            </h3>
                            <PersonalBestTable
                                scores={scores.filter(
                                    (score) => score.level === level
                                )}
                            />
                        </section>
                        <section className="flex flex-col overflow-x-auto justify-center mt-4 shadow-md">
                            <h3
                                id={'lvl' + level + '-results'}
                                className="text-black text-2xl font-bold text-start mb-1"
                            >
                                Results
                            </h3>
                            <ScoresTable
                                scores={scores.filter(
                                    (score) => score.level === level
                                )}
                            />
                        </section>
                    </div>
                </div>
                <div className="px-4">
                    <h3
                        id={'lvl' + level + '-progression'}
                        className="text-black text-2xl font-bold text-start mb-1"
                    >
                        Season Progression
                    </h3>
                    <ProgressionChart scores={scores} />
                </div>
            </div>
        </main>
    );
}
