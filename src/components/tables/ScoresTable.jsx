export const ScoresTable = ({ scores }) => {
    const TableHeader = () => {
        return (
            <thead className="border bg-primary-table-header-background">
                <tr className="border text-black">
                    <th className="border px-2 pt-2 text-sm">Competition</th>
                    <th className="border px-2 pt-2 text-sm">Vault</th>
                    <th className="border px-2 pt-2 text-sm">Uneven Bars</th>
                    <th className="border px-2 pt-2 text-sm">Beam</th>
                    <th className="border px-2 pt-2 text-sm">Floor</th>
                    <th className="border px-2 pt-2 text-sm">All Around</th>
                </tr>
            </thead>
        );
    };

    const MobileTableheader = ({ score }) => {
        return (
            <thead className="border bg-primary-table-header-background">
                <tr>
                    <th
                        colSpan={2}
                        className="border px-2 pt-2 text-black text-sm"
                    >
                        {score.competition_name}
                    </th>
                </tr>
            </thead>
        );
    };

    if (!scores) {
        return (
            <>
                <table className="md:hidden table-auto border mb-2">
                    <thead className="border bg-white">
                        <tr>
                            <th
                                colSpan={2}
                                className="border px-2 pt-2 text-sm"
                            >
                                Competition
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center">
                                Season has not started
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className="hidden md:table table-auto border">
                    <thead className="border bg-white">
                        <tr className="border">
                            <th className="border px-2 pt-2 text-sm">
                                Competition
                            </th>
                            <th className="border px-2 pt-2 text-sm">Vault</th>
                            <th className="border px-2 pt-2 text-sm">
                                Uneven Bars
                            </th>
                            <th className="border px-2 pt-2 text-sm">Beam</th>
                            <th className="border px-2 pt-2 text-sm">Floor</th>
                            <th className="border px-2 pt-2 text-sm">
                                All Around
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={6} className="text-center">
                                Season has not started
                            </td>
                        </tr>
                    </tbody>
                </table>
            </>
        );
    }
    return (
        <>
            {scores.map((score, key) => {
                return (
                    <table
                        className="md:hidden table-auto border mb-2"
                        key={key}
                    >
                        <caption className="sr-only">
                            Scores for each event for the current selected level
                        </caption>
                        <MobileTableheader score={score} />
                        <tbody className="bg-white text-black">
                            <tr
                                className="border text-black text-sm"
                                key={score.competition_name}
                            >
                                <td className="border text-center text-sm">
                                    Vault
                                </td>
                                <td className="border text-center text-sm">
                                    {score.scores[0].vault_score}
                                </td>
                            </tr>
                            <tr>
                                <td className="border text-center text-sm">
                                    Bars
                                </td>
                                <td className="border text-center text-sm">
                                    {score.scores[0].bars_score}
                                </td>
                            </tr>
                            <tr>
                                <td className="border text-center text-sm">
                                    Beam
                                </td>
                                <td className="border text-center text-sm">
                                    {score.scores[0].beam_score}
                                </td>
                            </tr>
                            <tr>
                                <td className="border text-center text-sm">
                                    Floor
                                </td>
                                <td className="border text-center text-sm">
                                    {score.scores[0].floor_score}
                                </td>
                            </tr>
                            <tr>
                                <td className="border text-center text-sm">
                                    All Around
                                </td>
                                <td className="border text-center text-sm">
                                    {score.scores[0].all_around_score}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                );
            })}
            <table className="hidden md:table table-auto border">
                <caption className="sr-only">
                    Scores for each event for the current selected level
                </caption>
                <TableHeader />
                <tbody className="border text-black">
                    {scores.map((score, key) => {
                        return (
                            <tr
                                className={
                                    key % 2 === 0
                                        ? 'bg-white border'
                                        : 'bg-white border'
                                }
                                key={key}
                            >
                                <td className="border p-2 text-sm">
                                    {score.competition_name}
                                </td>
                                <td className="border text-center text-sm">
                                    {score.scores[0].vault_score}
                                </td>
                                <td className="border text-center text-sm">
                                    {score.scores[0].bars_score}
                                </td>
                                <td className="border text-center text-sm">
                                    {score.scores[0].beam_score}
                                </td>
                                <td className="border text-center text-sm">
                                    {score.scores[0].floor_score}
                                </td>
                                <td className="border text-center text-sm">
                                    {score.scores[0].all_around_score}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};
