import React from "react"
import PropTypes from "prop-types"
import { FormControl, FormLabel, Input } from "@chakra-ui/react"
import Columns from "./columns"

const SpreadsheetsRow = ({ idx, state, handleChange }) => {
    const competitorAId = `${Columns.competitorA}_${idx}`
    const competitorBId = `${Columns.competitorB}_${idx}`
    const detailsId = `${Columns.details}_${idx}`
    const wagerId = `${Columns.wager}_${idx}`
    const durationId = `${Columns.duration}_${idx}`
    const otherDetailsId = `${Columns.otherDetails}_${idx}`

    return (
        <div key={`row-${idx}`}>
            <FormControl>
                <FormLabel>Competitor 1</FormLabel>
                <Input
                    type="text"
                    name={competitorAId}
                    data-idx={idx}
                    id={competitorAId}
                    data-columnname={Columns.competitorA}
                    value={state.competitorA}
                    onChange={handleChange}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Competitor 2</FormLabel>
                <Input
                    type="text"
                    name={competitorBId}
                    data-idx={idx}
                    id={competitorBId}
                    data-columnname={Columns.competitorB}
                    value={state.competitorB}
                    onChange={handleChange}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Details</FormLabel>
                <Input
                    type="text"
                    name={detailsId}
                    data-idx={idx}
                    id={detailsId}
                    data-columnname={Columns.details}
                    value={state.details}
                    onChange={handleChange}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Wager</FormLabel>
                <Input
                    type="text"
                    name={wagerId}
                    data-idx={idx}
                    id={wagerId}
                    data-columnname={Columns.wager}
                    value={state.wager}
                    onChange={handleChange}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Duration</FormLabel>
                <Input
                    type="text"
                    name={durationId}
                    data-idx={idx}
                    id={durationId}
                    data-columnname={Columns.duration}
                    value={state.duration}
                    onChange={handleChange}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Other Details</FormLabel>
                <Input
                    type="text"
                    name={otherDetailsId}
                    data-idx={idx}
                    id={otherDetailsId}
                    data-columnname={Columns.otherDetails}
                    value={state.otherDetails}
                    onChange={handleChange}
                />
            </FormControl>
        </div>
    )
}

SpreadsheetsRow.propTypes = {
    idx: PropTypes.number,
    state: PropTypes.any,
    handleChange: PropTypes.func,
}

export default SpreadsheetsRow