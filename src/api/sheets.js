const { GoogleSpreadsheet } = require("google-spreadsheet")

const handler = async (req, res) => {
    try {
        if (req.method !== "POST") {
            res.json({ message: "Try a POST!" });
        }

        console.log('--== Sheets function received row! ==--');
        const doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID);

        await doc.useServiceAccountAuth({
            client_email: process.env.CLIENT_EMAIL,
            private_key: process.env.PRIVATE_KEY.replace(/(\\r)|(\\n)/g, '\n'),
        })
        await doc.getInfo();
        
        const betsSheet = doc.sheetsByTitle["Bets"];

        if (!betsSheet.headerValues) {
            await betsSheet.setHeaderRow([`CompetitorA`, `CompetitorB`, `Details`, `Wager`, `Duration`, `OtherDetails`]);
        }

        var rows = [];
        rows.push({
            CompetitorA: req.body[`competitorA`],
            CompetitorB: req.body[`competitorB`],
            Details: req.body[`details`],
            Wager: req.body[`wager`],
            Duration: req.body[`duration`],
            OtherDetails: req.body[`otherDetails`]
        });
        
        return await betsSheet.addRows(rows).then( value => {
            console.log('--== Sheets function successfully sent row to sheet ==--')
            return res.status(200).json({
                message: "Pushed rows to sheet",
            });
        },
            error => {
                console.log('--== Sheets function **ERROR** ==-- ');
                console.error(err);
                if (error.response) {
                    return res.status(500).json({
                        error: error.response,
                    })
                }
            }
        )

    } 
    catch (err) {
        console.log('--== Sheets function FAILED ==--');
        console.error(err);
        return res.status(500).json( {message: "There was an error", error: err});
    }
}

module.exports = handler;