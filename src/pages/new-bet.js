import React, { useState } from "react"
import { Button, Heading, Container } from "@chakra-ui/react"
import DarkModeSwitch from '../components/DarkModeSwitch'
import SpreadsheetsRow from '../models/spreadsheet-row'
import '../styles/global.scss'

const NewBetPage = () => {
    const blankRow = { competitorA: "", competitorB: "", details: "", wager: "", duration: "", otherDetails: "" }
    const [rowState, setRowState] = useState([{ ...blankRow }])

    const addRow = () => {
        setRowState([...rowState, { ...blankRow }])
    }

    const handleChange = e => {
        const updatedRows = [...rowState]
        updatedRows[e.target.dataset.idx][e.target.dataset.columnname] = e.target.value
        setRowState(updatedRows)
    }

    return (
        <main>
            <title>New Bets - RosterFreak</title>
            <Heading>New Bets - RosterFreak</Heading>
            <DarkModeSwitch />
            <form action="/api/sheets" method="POST">
                <Container>
                    {rowState.map((val, index) => (
                        <SpreadsheetsRow
                            key={`row-${index}`}
                            idx={index}
                            state={rowState[index]}
                            handleChange={handleChange}
                        />
                    ))}
                    <div>
                        <Button type="submit">Submit</Button>
                    </div>
                </Container>
            </form>
        </main>
    )
}

export default NewBetPage