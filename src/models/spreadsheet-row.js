import React from "react"
import PropTypes from "prop-types"
import { FormControl, FormLabel, Input } from "@chakra-ui/react"
import Columns from "./columns"

const SpreadsheetsRow = ({ register }) => {
    return (
        <>
            <FormControl>
                <FormLabel>Competitor 1</FormLabel>
                <Input
                    type="text"
                    name={Columns.competitorA}
                    id={Columns.competitorA}
                    defaultValue=""
                    {...register(Columns.competitorA, { required: true })}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Competitor 2</FormLabel>
                <Input
                    type="text"
                    name={Columns.competitorB}
                    id={Columns.competitorB}
                    defaultValue=""
                    {...register(Columns.competitorB)}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Details</FormLabel>
                <Input
                    type="text"
                    name={Columns.details}
                    id={Columns.details}
                    defaultValue=""
                    {...register(Columns.details)}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Wager</FormLabel>
                <Input
                    type="text"
                    name={Columns.wager}
                    id={Columns.wager}
                    defaultValue=""
                    {...register(Columns.wager)}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Duration</FormLabel>
                <Input
                    type="text"
                    name={Columns.duration}
                    id={Columns.duration}
                    defaultValue=""
                    {...register(Columns.duration)}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Other Details</FormLabel>
                <Input
                    type="text"
                    name={Columns.otherDetails}
                    id={Columns.otherDetails}
                    defaultValue=""
                    {...register(Columns.otherDetails)}
                />
            </FormControl>
        </>
    )
}

//figure out how to update this to correct values
SpreadsheetsRow.propTypes = {
    register: PropTypes.func,
    errors: PropTypes.any,
    // idx: PropTypes.number,
    // state: PropTypes.any,
    // handleChange: PropTypes.func,
}

export default SpreadsheetsRow