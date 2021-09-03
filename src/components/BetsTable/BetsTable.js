import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, } from "@chakra-ui/react"

const BetsTable = ({tableData}) => {
    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Competitor</Th>
                    <Th>Competitor</Th>
                    <Th className="nameHead">Details</Th>
                    <Th>Wager</Th>
                    <Th>Duration</Th>
                    <Th>Other Details</Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                    tableData.edges.map(edge => (
                        <Tr key={edge.node.id}>
                            <Td>{edge.node.competitorA}</Td>
                            <Td>{edge.node.competitorB}</Td>
                            <Td className="nameVal">{edge.node.details}</Td>
                            <Td>{edge.node.wager}</Td>
                            <Td>{edge.node.duration}</Td>
                            <Td>{edge.node.otherDetails}</Td>
                        </Tr>
                    ))
                }
            </Tbody>
        </Table>
    );
}

export default BetsTable;