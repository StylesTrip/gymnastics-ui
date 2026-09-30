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
            className={`flex flex-col h-[135px] w-[145px] items-center justify-between border rounded-lg p-2`}
            style={{ boxShadow: `0 8px 6px -6px ${color}` }}
        >
            <dt className={`text-md`} style={{ color: color }}>
                {event}
            </dt>
            <dd className={`text-xl`} style={{ color: color }}>
                {score}
            </dd>
        </div>
    );
};
export const PersonalBestsDisplay = ({ scores }) => {
    let highScores = {
        vaultScore: 0,
        barsScore: 0,
        beamScore: 0,
        floorScore: 0,
        allAroundScore: 0,
    };

    if (!scores) {
        return null;
    }

    scores.map((score) => {
        if (score.scores[0].vault_score >= highScores.vaultScore)
            highScores.vaultScore = score.scores[0].vault_score;
        if (score.scores[0].bars_score >= highScores.barsScore)
            highScores.barsScore = score.scores[0].bars_score;
        if (score.scores[0].beam_score >= highScores.beamScore)
            highScores.beamScore = score.scores[0].beam_score;
        if (score.scores[0].floor_score >= highScores.floorScore)
            highScores.floorScore = score.scores[0].floor_score;
        if (score.scores[0].all_around_score >= highScores.allAroundScore)
            highScores.allAroundScore = score.scores[0].all_around_score;
    });

    return (
        <dl className="flex flex-row gap-1 w-full md:w-[75%] py-2">
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
