import { Suspense } from 'react';
import { supabase } from '../../lib/supabaseClient';

export const metadata = {
    title: "Scores",
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

    const getHighestScoreForEvent = () => {
        let highScores = {
            vaultScore: 0,
            barsScore: 0,
            beamScore: 0,
            floorScore: 0,
            allAroundScore: 0,
        };

        scores.map((score, key) => {
            if (score.vault_score >= highScores.vaultScore)
                highScores.vaultScore = score.vault_score;
            if (score.bars_score >= highScores.barsScore)
                highScores.barsScore = score.bars_score;
            if (score.beam_score >= highScores.beamScore)
                highScores.beamScore = score.beam_score;
            if (score.floor_score >= highScores.floorScore)
                highScores.floorScore = score.floor_score;
            if (score.all_around_score >= highScores.allAroundScore)
                highScores.allAroundScore = score.all_around_score;
        });

        return (
            <tr className="bg-black border">
                <td className="border text-center">{highScores.vaultScore}</td>
                <td className="border text-center">{highScores.barsScore}</td>
                <td className="border text-center">{highScores.beamScore}</td>
                <td className="border text-center">{highScores.floorScore}</td>
                <td className="border text-center">
                    {highScores.allAroundScore}
                </td>
            </tr>
        );
    };

    return (
        <div className="w-screen h-screen bg-white p-4">
            <h1 className="text-3xl font-bold text-center">Level 3</h1>
            <section className="flex flex-col overflow-x-auto justify-center mt-4">
                <h2 className="text-2xl font-bold underline text-center">
                    Personal Best
                </h2>
                <table className="table-auto border">
                    <thead className="border bg-pink-500">
                        <tr className="border">
                            <th className="border px-4 pt-4">Vault</th>
                            <th className="border px-4 pt-4">Uneven Bars</th>
                            <th className="border px-4 pt-4">Beam</th>
                            <th className="border px-4 pt-4">Floor</th>
                            <th className="border px-4 pt-4">All Around</th>
                        </tr>
                    </thead>
                    <tbody className="border">
                        <Suspense fallback={<tr></tr>}>
                            {getHighestScoreForEvent()}
                        </Suspense>
                    </tbody>
                </table>
            </section>
            <section className="flex flex-col overflow-x-auto justify-center mt-4">
                <h2 className="text-2xl font-bold underline text-center">
                    Scores
                </h2>
                <table className="table-auto border">
                    <thead className="border bg-pink-500">
                        <tr className="border">
                            <th className="border px-4 pt-4">Competition</th>
                            <th className="border px-4 pt-4">Vault</th>
                            <th className="border px-4 pt-4">Uneven Bars</th>
                            <th className="border px-4 pt-4">Beam</th>
                            <th className="border px-4 pt-4">Floor</th>
                            <th className="border px-4 pt-4">All Around</th>
                        </tr>
                    </thead>
                    <tbody className="border">
                        <Suspense fallback={<tr></tr>}>
                            {scores.map((score, key) => {
                                return (
                                    <tr
                                        className={
                                            key % 2 === 0
                                                ? 'bg-black border'
                                                : 'bg-pink-500 border'
                                        }
                                        key={score.id}
                                    >
                                        <td className="border p-2">
                                            {
                                                score.competitions
                                                    .competition_name
                                            }
                                        </td>
                                        <td className="border text-center">
                                            {score.vault_score}
                                        </td>
                                        <td className="border text-center">
                                            {score.bars_score}
                                        </td>
                                        <td className="border text-center">
                                            {score.beam_score}
                                        </td>
                                        <td className="border text-center">
                                            {score.floor_score}
                                        </td>
                                        <td className="border text-center">
                                            {score.all_around_score}
                                        </td>
                                    </tr>
                                );
                            })}
                        </Suspense>
                    </tbody>
                </table>
            </section>
        </div>
    );
}
