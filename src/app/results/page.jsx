import { PersonalBestTable } from '@/components/tables/PersonalBestTable';
import { ScoresTable } from '@/components/tables/ScoresTable';
import { supabase } from '../../lib/supabaseClient';
import { ProgressionChart } from '@/components/progression-chart/ProgressionChart';
import Link from 'next/link';
import cslx from 'clsx';

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

async function getAvailableLevels() {
    const { data, error } = await supabase
        .from('competitions')
        .select('level')
        .order('level', { ascending: false });

    if (error) {
        console.error('Error fetching available levels:', error);
        return [];
    }

    return [...new Set(data.map((item) => item.level))];
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
    const levels = await getAvailableLevels();
    let level = typeof queryLevel === 'string' ? parseInt(queryLevel) : null;

    if (!level) {
        level = levels.length > 0 ? levels[0] : null;
    }

    const scores = await getScores(level);

    return (
        <main className="w-full flex flex-col gap-4 py-4 px-6 text-white">
            <div className="w-full flex justify-center">
                <nav className="bg-white px-2 py-2 rounded-lg">
                    <ul className="flex flex-row gap-4">
                        {levels.map((lvl) => (
                            <li>
                                <Link
                                    key={lvl}
                                    href={`/results?level=${lvl}`}
                                    className={cslx(
                                        'text-black',
                                        lvl === level
                                            ? 'underline underline-offset-2 decoration-2'
                                            : ''
                                    )}
                                >
                                    Level {lvl}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="flex flex-col gap-4 py-4 px-6 bg-white rounded-lg">
                <div className="grow px-4">
                    <h1
                        id={'lvl' + level}
                        className="text-black text-2xl font-bold"
                    >
                        Level {level}
                    </h1>
                    <div className="mt-4" key={level}>
                        <section className="flex flex-col overflow-x-auto justify-center mt-4">
                            <h3
                                id={'lvl' + level + '-personal-best'}
                                className="text-black text-xl font-bold text-start mb-1"
                            >
                                Personal Best
                            </h3>
                            <PersonalBestTable
                                scores={scores.filter(
                                    (score) => score.level === level
                                )}
                            />
                        </section>
                        <section className="flex flex-col overflow-x-auto justify-center mt-4">
                            <h3
                                id={'lvl' + level + '-results'}
                                className="text-black text-xl font-bold text-start mb-1"
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
                        className="text-black text-xl font-bold text-start mb-1"
                    >
                        Season Progression
                    </h3>
                    <ProgressionChart scores={scores} />
                </div>
            </div>
        </main>
    );
}
