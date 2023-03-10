import { Suspense } from 'react';
import { supabase } from '../../lib/supabaseClient';

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
        <div className="w-screen h-screen bg-white">
            <h1 className="text-3xl font-bold mt-4 underline text-center">Level 3</h1>
            <section className="flex justify-center mt-4">
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
