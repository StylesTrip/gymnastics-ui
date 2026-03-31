'use client';

import { createClient } from '@/lib/supabase/client';
import { useState } from 'react';

export const AddScores = () => {
    const supabase = createClient();
    const [competitions, setCompetitions] = useState([]);
    const [selectedCompetitionScores, setSelectedCompetitionScores] =
        useState(null);
    const [errors, setErrors] = useState({vault_score: false,
                        bars_score: false,
                        beam_score: false,
                        floor_score: false,
                        all_around_score: false})
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

    const validateScore = (score) => {
        // Ensure the score is a number and within the valid range
        const num = parseFloat(score);
        if (isNaN(num)) return false;

        // Check for letters in score
        if (/[a-zA-Z]/.test(score)) return false;

        return true;
    }

    const onScoreChange = (event, scoreType) => {
        console.log(event)
        if (!validateScore(event.target.value)) {
            setErrors({...errors, [scoreType]: true});
        } else {
            setErrors({...errors, [scoreType]: false});
        }

        setSelectedCompetitionScores({
            ...selectedCompetitionScores,
            [scoreType]: event.target.value
        });
    }

    return (
        <section className="p-4 bg-white rounded-2xl shadow flex flex-col gap-1">
            <h2 className="text-xl font-semibold">Add Scores</h2>

            <label className="font-bold" htmlFor="level">Level</label>
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
                    <label className="font-bold" htmlFor="competition">Competition</label>
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
                    <label className="font-bold" htmlFor="vault-score">Vault Score</label>
                    <input className="border border-black p-1" id="vault-score" aria-describedby="vault-score-error" type="number" value={selectedCompetitionScores.vault_score} onChange={(e) => onScoreChange(e, 'vault_score')}  min={0} max={10.0} step={0.025}/>
                    {errors.vault_score && <span id="vault-score-error" className="text-sm">Please enter a valid score between 0 and 10.</span>}
                    <label className="font-bold" htmlFor="bars-score">Bars Score</label>
                    <input className="border border-black p-1" id="bars-score" aria-describedby="bars-score-error" type="number" value={selectedCompetitionScores.bars_score} onChange={(e) => onScoreChange(e, 'bars_score')}  min={0} max={10.0} step={0.025}/>
                    {errors.bars_score && <span id="bars-score-error" className="text-sm">Please enter a valid score between 0 and 10.</span>}
                    <label className="font-bold" htmlFor="beam-score">Beam Score</label>
                    <input className="border border-black p-1" id="beam-score" aria-describedby="beam-score-error" type="number" value={selectedCompetitionScores.beam_score} onChange={(e) => onScoreChange(e, 'beam_score')}  min={0} max={10.0} step={0.025}/>
                    {errors.beam_score && <span id="beam-score-error" className="text-sm">Please enter a valid score between 0 and 10.</span>}
                    <label className="font-bold" htmlFor="floor-score">Floor Score</label>
                    <input className="border border-black p-1" id="floor-score" aria-describedby="floor-score-error" type="number" value={selectedCompetitionScores.floor_score} onChange={(e) => onScoreChange(e, 'floor_score')}  min={0} max={10.0} step={0.025}/>
                    {errors.floor_score && <span id="floor-score-error" className="text-sm">Please enter a valid score between 0 and 10.</span>}
                    <label className="font-bold" htmlFor="all-around-score">All-Around Score</label>
                    <input className="border border-black p-1" id="all-around-score" aria-describedby="all-around-score-error" type="number" value={selectedCompetitionScores.all_around_score} onChange={(e) => onScoreChange(e, 'all_around_score')}  min={0} max={40.0} step={0.025}/>
                    {errors.all_around_score && <span id="all-around-score-error" className="text-sm">Please enter a valid score between 0 and 40.</span>}
                </div>
            )}
        </section>
    );
};
