export const ScoresTable = ({ scores }) => {
    const TableHeader = () => {
        return (
            <thead className="border bg-primary-table-header-background">
                <tr className="border text-black">
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
            <thead className="border bg-primary-table-header-background">
                <tr>
                    <th colSpan={2} className="border px-4 pt-4 text-black">
                        {score.competitions.competition_name}
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
                            <th colSpan={2} className="border px-4 pt-4">
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
                            <th className="border px-4 pt-4">Competition</th>
                            <th className="border px-4 pt-4">Vault</th>
                            <th className="border px-4 pt-4">Uneven Bars</th>
                            <th className="border px-4 pt-4">Beam</th>
                            <th className="border px-4 pt-4">Floor</th>
                            <th className="border px-4 pt-4">All Around</th>
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
                        key={score.id}
                    >
                        <MobileTableheader score={score} />
                        <tbody className="bg-white text-black">
                            <tr className="border text-black" key={score.id}>
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
                <tbody className="border text-black">
                    {scores.map((score, key) => {
                        return (
                            <tr
                                className={
                                    key % 2 === 0
                                        ? 'bg-white border'
                                        : 'bg-white border'
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
