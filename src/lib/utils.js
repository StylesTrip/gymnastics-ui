

export function getHighScores(scores) {
    let highScores = {
        vaultScore: 0,
        barsScore: 0,
        beamScore: 0,
        floorScore: 0,
        allAroundScore: 0,
    };

    if (!scores) {
        return highScores;
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

    return highScores;
}