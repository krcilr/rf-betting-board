import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BetsTable from "../components/BetsTable/BetsTable";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const SPREADSHEET_QUERY = graphql`
  query betsQuery{
    allGoogleSpreadsheet2021Bets2021Bets {
      edges {
        node {
          id
          competitors
          details
          wager
          duration
          otherDetails
        }
      }
    }
  }
`;

// markup
const IndexPage = () => {
const { allGoogleSpreadsheet2021Bets2021Bets } = useStaticQuery(SPREADSHEET_QUERY);

  return (
    <main style={pageStyles}>
      <title>Betting Board</title>
      <h1 style={headingStyles}>RosterFreak - Betting Board</h1>
      
      <BetsTable tableData={allGoogleSpreadsheet2021Bets2021Bets} />
    </main>
  )
}

export default IndexPage
