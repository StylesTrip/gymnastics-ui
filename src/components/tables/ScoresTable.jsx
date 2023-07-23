export const ScoresTable = ({ scores }) => {
    const TableHeader = () => {
        return (
            <thead className="border bg-pink-500">
                <tr className="border">
                    <th className="border px-4 pt-4">Competition</th>
                    <th className="border px-4 pt-4">Vault</th>
                    <th className="border px-4 pt-4">Uneven Bars</th>
                    <th className="border px-4 pt-4">Beam</th>
                    <th className="border px-4 pt-4">Floor</th>
                    <th className="border px-4 pt-4">All Around</th>
                </tr>
            </thead>
        );
    };

    const MobileTableheader = ({ score }) => {
        return (
            <thead className="border bg-pink-500">
                <tr>
                    <th colSpan={2} className="border px-4 pt-4">
                        {score.competitions.competition_name}
                    </th>
                </tr>
            </thead>
        );
    };

    return (
        <>
            {scores.map((score, key) => {
                return (
                    <table className="md:hidden table-auto border mb-2">
                        <MobileTableheader score={score} />
                        <tbody>
                            <tr className="bg-black border" key={score.id}>
                                <td className="border text-center">Vault</td>
                                <td className="border text-center">
                                    {score.vault_score}
                                </td>
                            </tr>
                            <tr>
                                <td className="border text-center">Bars</td>
                                <td className="border text-center">
                                    {score.bars_score}
                                </td>
                            </tr>
                            <tr>
                                <td className="border text-center">Beam</td>
                                <td className="border text-center">
                                    {score.beam_score}
                                </td>
                            </tr>
                            <tr>
                                <td className="border text-center">Floor</td>
                                <td className="border text-center">
                                    {score.floor_score}
                                </td>
                            </tr>
                            <tr>
                                <td className="border text-center">
                                    All Around
                                </td>
                                <td className="border text-center">
                                    {score.all_around_score}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                );
            })}
            <table className="hidden md:table table-auto border">
                <TableHeader />
                <tbody className="border">
                    {scores.map((score, key) => {
                        return (
                            <tr
                                className={
                                    key % 2 === 0
                                        ? 'bg-black border'
                                        : 'bg-pink-500 border'
                                }
                                key={score.id}
                            >
                                <td className="border p-2">
                                    {score.competitions.competition_name}
                                </td>
                                <td className="border text-center">
                                    {score.vault_score}
                                </td>
                                <td className="border text-center">
                                    {score.bars_score}
                                </td>
                                <td className="border text-center">
                                    {score.beam_score}
                                </td>
                                <td className="border text-center">
                                    {score.floor_score}
                                </td>
                                <td className="border text-center">
                                    {score.all_around_score}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};
