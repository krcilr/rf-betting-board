import * as React from "react"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { graphql, useStaticQuery } from "gatsby"
import BetsTable from "../components/BetsTable/BetsTable";
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
const { allGoogleSpreadsheet2021Bets2021Bets } = useStaticQuery(SPREADSHEET_QUERY);

  return (
    <main>
      <title>Betting Board</title>
      <h1>RosterFreak - Betting Board</h1>
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            Dark mode
          </label>
        )}
      </ThemeToggler>
      <BetsTable tableData={allGoogleSpreadsheet2021Bets2021Bets} />
    </main>
  )
}

export default IndexPage
