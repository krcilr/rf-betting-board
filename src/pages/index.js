import * as React from "react"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { graphql, useStaticQuery } from "gatsby"
import BetsTable from "../components/BetsTable/BetsTable";
import { Button, Heading, Switch } from "@chakra-ui/react";
import '../styles/global.scss';
import '../styles/index.scss';

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

// markup
const IndexPage = () => {
  const { allGoogleSpreadsheet2021BetsBets } = useStaticQuery(SPREADSHEET_QUERY);

  return (
    <main>
      <title>Betting Board</title>
      <Heading style={{textAlign:'center'}}>RosterFreak - Betting Board</Heading>
      <Button style={{position: 'absolute', top: '10px', left: '15px'}}>Create New Bet</Button>
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label style={{position:'absolute', right: '30px', top: '13px'}}>
            <Switch
              id="darkMode"
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            Dark mode
          </label>
        )}
      </ThemeToggler>
      <BetsTable tableData={allGoogleSpreadsheet2021BetsBets} />
    </main>
  )
}

export default IndexPage
