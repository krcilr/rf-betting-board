import React, { useState } from "react"
import { useForm } from "react-hook-form";
import { Button, Heading, Container } from "@chakra-ui/react"
import DarkModeSwitch from '../components/DarkModeSwitch'
import SpreadsheetsRow from '../models/spreadsheet-row'
import '../styles/global.scss'

const NewBetPage = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const [loading, setLoading] = useState(false)

    //maybe move this to its own file eventually
    const triggerBuild = () => {
        const triggerBuild = process.env.TRIGGER_BUILD
        console.log('trigger build', process.env.TRIGGER_BUILD)
        if (triggerBuild) {
            fetch(process.env.BUILD_WEBHOOK, {
                method: 'POST', 
            }).
            then(res => {
                res.json()
            })
        }
    }

    const sendRow = data => {
        return fetch('/api/sheets', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "content-type": 'application/json',
            },
        })
    }

    const onSubmit = data => {
        setLoading(true)        

        sendRow(data)
        .then(res => {
            triggerBuild()
            reset()
            res.json()
            setLoading(false)
        })
        .catch((error) => {
            console.log('fetch error', error)
            setLoading(false)
        })
    }

    return (
        <main>
            <title>New Bets - RosterFreak</title>
            <Heading style={{textAlign:'center'}}>New Bets - RosterFreak</Heading>
            <Button style={{position: 'absolute', left: '30px', top: '13px' }} onClick={(e) => {
                e.preventDefault();
                window.location.href='/';
            }}>Back</Button>
            <DarkModeSwitch />            
            <form onSubmit={handleSubmit(onSubmit)} >
                <Container>
                    <SpreadsheetsRow
                        register={register}
                        // errors={errors}
                    >
                    </SpreadsheetsRow>
                    <div>
                        <Button type="submit">Submit</Button>
                    </div>
                </Container>
            </form>
        </main>
    )
}

export default NewBetPage