'use client';

import { createClient } from '@/lib/supabase/client';
import { useState } from 'react';
import clsx from 'clsx';

export const CreateCompetition = () => {
    const supabase = createClient();
    const [response, setResponse] = useState(null);
    const [formErrors, setFormErrors] = useState({
        name: '',
        level: '',
        date: '',
    });

    // TODO: investigate server actions for this, but for now this is fine since it's only used by admins
    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        if (formErrors.name || formErrors.level || formErrors.date) {
            setResponse('Please fix form errors before submitting');
            return;
        } else if (formData.get('competition').trim() === '' || formData.get('level') === '' || formData.get('date') === '') {
            setResponse('Please fill out all required fields before submitting');
            return;
        }

        // Check for duplicate competition
        const { data, duplicateError } = await supabase
            .from('competitions')
            .select('id')
            .ilike('competition_name', formData.get('competition'))
            .eq('level', formData.get('level'));

        if (duplicateError) {
            setResponse('Internal error. Try again later.');
            console.error(
                'Error checking for duplicate competition:',
                duplicateError
            );
            return;
        } else if (data.length > 0) {
            setResponse('Competition with this name and level already exists.');
            return;
        }

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
        <section className="p-4 bg-white rounded-2xl shadow flex flex-col gap-2">
            {response && (
                <div
                    role="alert"
                    className={clsx(
                        'text-red-600',
                        response && 'border border-red-500 p-1 rounded-md'
                    )}
                >
                    {response}
                </div>
            )}
            <h2 className="text-xl font-semibold">Create Competition</h2>
            <form className="flex flex-col gap-3 p-2" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1">
                    <label htmlFor="competition" className="font-semibold">
                        Competition name
                    </label>
                    <input
                        id="competition"
                        name="competition"
                        aria-describedby="name-error"
                        type="text"
                        className="border border-black p-1 rounded focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                        onBlur={(e) => {
                            if (
                                !e.target.value ||
                                e.target.value.trim() === ''
                            ) {
                                setFormErrors((prev) => ({
                                    ...prev,
                                    name: 'Competition name is required',
                                }));
                            } else {
                                setResponse(null);
                                setFormErrors((prev) => ({
                                    ...prev,
                                    name: '',
                                }));
                            }
                        }}
                    />
                    {formErrors.name && (
                        <p id="name-error" className="text-sm text-red-600">
                            {formErrors.name}
                        </p>
                    )}
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="level" className="font-semibold">
                        Level
                    </label>
                    <select
                        id="level"
                        name="level"
                        aria-describedby="level-error"
                        className="block border border-black w-fit rounded p-1 pr-0 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                        onBlur={(e) => {
                            if (e.target.value === '') {
                                setFormErrors((prev) => ({
                                    ...prev,
                                    level: 'Level is required',
                                }));
                            } else {
                                setFormErrors((prev) => ({
                                    ...prev,
                                    level: '',
                                }));
                            }
                        }}
                    >
                        <option value="">Select</option>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level) => (
                            <option key={level} value={level}>
                                {level}
                            </option>
                        ))}
                    </select>
                    {formErrors.level && (
                        <p id="level-error" className="text-sm text-red-600">
                            {formErrors.level}
                        </p>
                    )}
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="date" className="font-semibold">
                        Date of competition
                    </label>
                    <input
                        id="date"
                        name="date"
                        aria-describedby="date-error"
                        type="date"
                        className="border border-black p-1 w-[200px] rounded focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                        onBlur={(e) => {
                            if (!e.target.value) {
                                setFormErrors((prev) => ({
                                    ...prev,
                                    date: 'Date is required',
                                }));
                            } else {
                                setFormErrors((prev) => ({
                                    ...prev,
                                    date: '',
                                }));
                            }
                        }}
                    />
                    {formErrors.date && (
                        <p id="date-error" className="text-sm text-red-600">
                            {formErrors.date}
                        </p>
                    )}
                </div>
                <button
                    type="submit"
                    className="border-2 border-black px-2 py-1 rounded-md self-center focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                    Create
                </button>
            </form>
        </section>
    );
};
