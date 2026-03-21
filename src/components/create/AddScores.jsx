'use client';

import { createClient } from '@/lib/supabase/client';
import { set } from 'mongoose';
import { useState } from 'react';

export const AddScores = () => {
    const supabase = createClient();
    const [competitions, setCompetitions] = useState([]);
    const [selectedCompetitionScores, setSelectedCompetitionScores] =
        useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // const {error} = await supabase.from('competitions').select('id, competition_name').

    const onLevelSelect = (event) => {
        setIsLoading(true);
        const level = event.target.value;

        supabase
            .from('competitions')
            .select('id, competition_name')
            .eq('level', level)
            .then(({ data, error }) => {
                if (error) {
                    console.error('Error fetching competitions:', error);
                }
                setCompetitions(data);
            })
            .finally(() => setIsLoading(false));
    };

    const onCompetitionSelect = (event) => {
        setIsLoading(true);
        supabase
            .from('scores')
            .select(
                'vault_score, bars_score, beam_score, floor_score, all_around_score'
            )
            .eq('competition_id', event.target.value)
            .then(({ data, error }) => {
                if (error) {
                    console.error(
                        `Error fetching scores for event id - ${event.target.value}:`,
                        error
                    );
                }
                console.log('Scores for selected competition:', data);

                if (data.length > 0) {
                    setSelectedCompetitionScores(data[0]);
                } else {
                    setSelectedCompetitionScores({
                        vault_score: 0,
                        bars_score: 0,
                        beam_score: 0,
                        floor_score: 0,
                        all_around_score: 0,
                    });
                }
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <section className="p-4 bg-white rounded-2xl shadow flex flex-col gap-1">
            <h2 className="text-xl font-semibold">Add Scores</h2>

            <label htmlFor="level">Level</label>
            <select
                id="level"
                name="level"
                className="border border-black"
                onChange={onLevelSelect}
            >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level) => (
                    <option key={level} value={level}>
                        {level}
                    </option>
                ))}
            </select>

            {competitions.length === 0 && isLoading && (
                <p>Loading competitions...</p>
            )}

            {competitions.length > 0 && (
                <>
                    <label htmlFor="competition">Competition</label>
                    <select
                        id="competition"
                        name="competition"
                        className="border border-black"
                        onChange={onCompetitionSelect}
                    >
                        <option value="">Select a competition</option>
                        {competitions.map((comp) => (
                            <option key={comp.id} value={comp.id}>
                                {comp.competition_name}
                            </option>
                        ))}
                    </select>
                </>
            )}

            {competitions.length > 0 && isLoading && <p>Loading scores...</p>}

            {competitions.length > 0 && selectedCompetitionScores && !isLoading && (
                <div className="flex flex-col gap-1">
                    <p>Vault Score: {selectedCompetitionScores.vault_score}</p>
                    <p>Bars Score: {selectedCompetitionScores.bars_score}</p>
                    <p>Beam Score: {selectedCompetitionScores.beam_score}</p>
                    <p>Floor Score: {selectedCompetitionScores.floor_score}</p>
                    <p>
                        All Around Score:{' '}
                        {selectedCompetitionScores.all_around_score}
                    </p>
                </div>
            )}
        </section>
    );
};
