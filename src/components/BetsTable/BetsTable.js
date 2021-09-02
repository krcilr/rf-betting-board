import React from 'react';

const BetsTable = ({tableData}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Competitors</th>
                    <th className="nameHead">Details</th>
                    <th>Wager</th>
                    <th>Duration</th>
                    <th>Other Details</th>
                </tr>
            </thead>
            <tbody>
                {
                    tableData.edges.map(edge => (
                        <tr key={edge.node.id}>
                            <td>{edge.node.competitorA}</td>
                            <td>{edge.node.competitorB}</td>
                            <td className="nameVal">{edge.node.details}</td>
                            <td>{edge.node.wager}</td>
                            <td>{edge.node.duration}</td>
                            <td>{edge.node.otherDetails}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default BetsTable;