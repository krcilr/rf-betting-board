const { GoogleSpreadsheet } = require("google-spreadsheet")

const handler = async (req, res) => {
    try {
        if (req.method !== "POST") {
            res.json({ message: "Try a POST!" })
        }

        const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

        await doc.useServiceAccountAuth({
            client_email: process.env.CLIENT_EMAIL,
            private_key: process.env.PRIVATE_KEY.replace(/(\\r)|(\\n)/g, '\n'),
        })
        await doc.getInfo();

        // Get Sheety
        const betsSheet = doc.sheetsByTitle("Bets");

        // If not set yet (sheet is empty), add the headers.
        if (!sheet.headerValues) {
            await sheet.setHeaderRow([`Competitor A`, `Competitor B`, `Details`, `Wager`, `Duration`, `Other Details`])
        }

        var count = 0;
        var rows = [];
        for (elem in req.body)
        {
            if (elem == "Competitor A" + count) {
                rows.push({
                    competitor_a: req.body[elem],
                    competitor_b: req.body["competitor_b" + count],
                    details: req.body["details" + count],
                    wager: req.body["wager" + count],
                    duration: req.body["duration" + count],
                    other_details: req.body["other_details" + count]
                })
                count++;
            }
        }

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