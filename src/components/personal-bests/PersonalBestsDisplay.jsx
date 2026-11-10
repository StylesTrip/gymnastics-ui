import { getHighScores } from '../../lib/utils';

const PersonalBestCard = ({ event, score }) => {
    let color = 'text-black';

    switch (event) {
        case 'Vault':
            color = '#00274C';
            break;
        case 'Bars':
            color = '#BB0000';
            break;
        case 'Beam':
            color = '#CC4500';
            break;
        case 'Floor':
            color = '#660033';
            break;
        case 'All Around':
            color = '#8B008B';
            break;
    }
    return (
        <div
            className={`flex flex-col w-[145px] items-center justify-between gap-2 border rounded-lg p-2`}
            style={{ boxShadow: `0 8px 6px -6px ${color}` }}
        >
            <dt className={`text-md`} style={{ color: color }}>
                {event}
            </dt>
            <dd className={`text-2xl`} style={{ color: color }}>
                {score}
            </dd>
        </div>
    );
};
export const PersonalBestsDisplay = ({ scores }) => {
    const highScores = getHighScores(scores);

    return (
        <dl className="flex flex-row gap-1 md:gap-4 w-full md:w-[85%] py-2">
            <PersonalBestCard event="Vault" score={highScores.vaultScore} />
            <PersonalBestCard event="Bars" score={highScores.barsScore} />
            <PersonalBestCard event="Beam" score={highScores.beamScore} />
            <PersonalBestCard event="Floor" score={highScores.floorScore} />
            <PersonalBestCard
                event="All Around"
                score={highScores.allAroundScore}
            />
        </dl>
    );
};
