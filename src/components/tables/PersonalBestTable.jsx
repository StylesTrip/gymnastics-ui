export const PersonalBestTable = ({ scores }) => {
    const getHighestScoreForEvent = () => {
        let highScores = {
            vaultScore: 0,
            barsScore: 0,
            beamScore: 0,
            floorScore: 0,
            allAroundScore: 0,
        };

        if (!scores) {
            return (
                <tr className="bg-white border">
                    <td colSpan={5} className="border text-center">
                        Season has not started
                    </td>
                </tr>
            );
        }

        scores.map((score, key) => {
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
            <tr className="bg-white border text-black">
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
        <table className="table-auto border">
            <thead className="border bg-primary-table-header-background">
                <tr className="border text-black">
                    <th className="border px-4 pt-4">Vault</th>
                    <th className="border px-4 pt-4">Uneven Bars</th>
                    <th className="border px-4 pt-4">Beam</th>
                    <th className="border px-4 pt-4">Floor</th>
                    <th className="border px-4 pt-4">All Around</th>
                </tr>
            </thead>
            <tbody className="border">{getHighestScoreForEvent()}</tbody>
        </table>
    );
};
