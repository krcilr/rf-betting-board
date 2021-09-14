import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BetsTable from "../components/BetsTable"
import DarkModeSwitch from '../components/DarkModeSwitch'
import { Button, Heading, } from "@chakra-ui/react"
import '../styles/global.scss'
import '../styles/index.scss'

const SPREADSHEET_QUERY = graphql`
  query betsQuery{
    allGoogleSpreadsheet2021BetsBets {
      edges {
        node {
          id
          competitorA
          competitorB
          details
          wager
          duration
          otherDetails
        }
      }
    }
  }
`;

const IndexPage = () => {
  const { allGoogleSpreadsheet2021BetsBets } = useStaticQuery(SPREADSHEET_QUERY);

  return (
    <main>
      <title>Betting Board</title>
      <Heading style={{textAlign:'center'}}>Betting Board - RosterFreak</Heading>
      <Button style={{position: 'absolute', top: '10px', left: '15px'}}
        onClick={(e) => {
          e.preventDefault();
          window.location.href='/new-bet';
        }}
      >
        Create New Bet
      </Button>
      <DarkModeSwitch />
      <BetsTable tableData={allGoogleSpreadsheet2021BetsBets} />
    </main>
  )
}

export default IndexPage