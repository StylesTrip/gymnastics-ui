'use client';

import { useMemo, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Vault',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
        },
        {
            label: 'Bars',
            data: [28, 48, 40, 19, 86, 27, 90],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
        },
        {
            label: 'Beam',
            data: [18, 48, 77, 9, 100, 27, 40],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.2)',
        },
        {
            label: 'Floor',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: 'rgb(255, 206, 86)',
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
        },
        {
            label: 'All Around',
            data: [28, 48, 40, 19, 86, 27, 90],
            borderColor: 'rgb(153, 102, 255)',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
        },
    ],
};

// TODO: Add unhappy path for when there are no scores for a level
export function ProgressionChart({ scores }) {
    const competitionLabels = useMemo(
        () => scores.map((score) => score.competition_name),
        [scores]
    );
    const events = [
        { label: 'Vault', key: 'vault_score' },
        { label: 'Bars', key: 'bars_score' },
        { label: 'Beam', key: 'beam_score' },
        { label: 'Floor', key: 'floor_score' },
        { label: 'All Around', key: 'all_around_score' },
    ];
    const [selectedEvent, setSelectedEvent] = useState(events[0]);

    const getDataToDisplay = () => {
        const dataset = scores.map(
            (score) => score.scores[0][selectedEvent.key]
        );
        return {
            labels: competitionLabels,
            datasets: [
                {
                    label: selectedEvent.label,
                    data: dataset,
                    borderColor: 'rgb(75, 192, 192)',
                },
            ],
        };
    };

    const handleEventChange = (event) => {
        const selectedKey = event.target.value;
        const selected = events.find((e) => e.key === selectedKey);
        setSelectedEvent(selected);
    };

    return (
        <div className="w-full h-100 bg-white">
            <select
                id="event-select"
                value={selectedEvent.key}
                className="text-black block w-fit rounded p-1 pr-0 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                onChange={handleEventChange}
            >
                {events.map((event) => (
                    <option key={event.key} value={event.key}>
                        {event.label}
                    </option>
                ))}
            </select>
            <Line
                data={getDataToDisplay()}
                aria-label={`Season progression scores for ${selectedEvent.label}`}
            />
        </div>
    );
}
