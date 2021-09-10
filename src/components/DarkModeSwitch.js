import * as React from "react"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { Switch } from "@chakra-ui/react"

const DarkModeSwitch = () => {
    return (
        <ThemeToggler>
            {({ theme, toggleTheme }) => (
                <label style={{ position: 'absolute', right: '30px', top: '13px' }}>
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
    )
}

export default DarkModeSwitch