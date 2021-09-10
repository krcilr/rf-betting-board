const { GoogleSpreadsheet } = require("google-spreadsheet")
require('dotenv').config();

const handler = async (req, res) => {
    try {
        if (req.method !== "POST") {
            res.json({ message: "Try a POST!" })
        }

        const doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID);

        await doc.useServiceAccountAuth({
            client_email: process.env.CLIENT_EMAIL,
            private_key: process.env.PRIVATE_KEY.replace(/(\\r)|(\\n)/g, '\n'),
        })
        await doc.getInfo();
        
        const betsSheet = doc.sheetsByTitle["Bets"];

        // If not set yet (sheet is empty), add the headers.
        if (!betsSheet.headerValues) {
            console.log('adding Headers');
            await betsSheet.setHeaderRow([`CompetitorA`, `CompetitorB`, `Details`, `Wager`, `Duration`, `OtherDetails`])
        }

        var count = 0;
        var rows = [];
        console.log('req.body', req.body);
        for (elem in req.body)
        {
            if (elem == "competitorA_" + count) {
                rows.push({
                    CompetitorA: req.body[elem],
                    CompetitorB: req.body[`competitorB_${count}`],
                    Details: req.body[`details_${count}`],
                    Wager: req.body[`wager_${count}`],
                    Duration: req.body[`duration_${count}`],
                    OtherDetails: req.body[`otherDetails_${count}`]
                })
                count++;
            }
        }

        console.log('adding rows', rows);

        return await betsSheet.addRows(rows).then( value => {
            return res.status(200).json({
                message: "Pushing rows to sheet",
            })
        },
            error => {
                console.error(error);
                if (error.response) {
                    return res.status(500).json({
                        error: error.response,
                    })
                }
            }
        )

    } 
    catch (err) {
        console.log(err);
        return res.status(500).json( {message: "There was an error", error: err});
    }
}

module.exports = handler;