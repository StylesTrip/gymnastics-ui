import { Suspense } from 'react';
import { supabase } from '../../lib/supabaseClient';

async function getScores() {
    let { data, error } = await supabase.from('scores').select(`id, vault_score, bars_score, beam_score, floor_score, all_around_score, competitions(competition_name)`);

    return data;
}

export default async function Page({}) {
    const scores = await getScores();

    return (
        <>
            <h1>Emma's Scores</h1>
            <table>
                <tr>
                    <th>Competition</th>
                    <th>Vault</th>
                    <th>Uneven Bars</th>
                    <th>Beam</th>
                    <th>Floor</th>
                    <th>All Around</th>
                </tr>
                <Suspense fallback={<tr></tr>}>
                    {scores.map((score) => {
                        return (
                            <tr key={score.id}>
                                <td>{score.competitions.competition_name}</td>
                                <td>{score.vault_score}</td>
                                <td>{score.bars_score}</td>
                                <td>{score.beam_score}</td>
                                <td>{score.floor_score}</td>
                                <td>{score.all_around_score}</td>
                            </tr>
                        );
                    })}
                </Suspense>
            </table>
        </>
    );
}
