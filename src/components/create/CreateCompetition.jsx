'use client';

import { createClient } from '@/lib/supabase/client';
import { useState } from 'react';

export const CreateCompetition = () => {
    const supabase = createClient();
    const [response, setResponse] = useState(null);

    // TODO: investigate server actions for this, but for now this is fine since it's only used by admins
    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const { error } = await supabase.from('competitions').insert({
            competition_name: formData.get('competition'),
            level: formData.get('level'),
            competition_date: formData.get('date'),
        });

        // TODO: handle errors and show success message to user
        if (error) {
            setResponse('Error creating competition');
            console.error('Error creating competition:', error);
        } else {
            setResponse('Competition created successfully');
        }
    }

    // TODO: form validation, styling, messages
    return (
        <section className="p-4 bg-white rounded-2xl shadow">
            <div role="alert" className="text-green">
                {response}
            </div>
            <h2 className="text-xl font-semibold">Create Competition</h2>
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <label htmlFor="competition">Competition name</label>
                <input
                    id="competition"
                    name="competition"
                    type="text"
                    className="border border-black p-[2px]"
                />

                <label htmlFor="level">Level</label>
                <select
                    id="level"
                    name="level"
                    className="border border-black w-[100px]"
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level) => (
                        <option key={level} value={level}>
                            {level}
                        </option>
                    ))}
                </select>

                <label htmlFor="date">Date of competition</label>
                <input
                    id="date"
                    name="date"
                    type="date"
                    className="border border-black w-[200px]"
                />
                <button type="submit">Create</button>
            </form>
        </section>
    );
};
