import { useEffect, useState } from "react"
import { ThemeContext } from "../../../contexts/themeContext"

/**
 * Deals with applying global styles.
 * 
 * Exposes a theme property as well as a toggle function for the theme
 * using context.
 * 
 * Will respond to a change of theme by setting CSS custom properties which
 * can be referenced in CSS to apply theming.
 */

function Themer({children}) {
    const [themeName, setThemeName] = useState('light')

    const themes = {
        light: {
            'buttonBgColor': 'white',
            'fontColorPrimary': 'navy',
            'fontColorSecondary': 'lightslategray',
            'backgroundImg': 'url(/images/pattern-background-desktop-light.svg)',
            'backgroundColor': 'white'

        },
        dark: {
            'buttonBgColor': 'navy',
            'fontColorPrimary': 'white',
            'fontColorSecondary': 'lightsteelblue',
            'backgroundImg': 'url(/images/pattern-background-desktop-dark.svg)',
            'backgroundColor': '#313E51'
        }
    }

    const theme = themes[themeName]
    
    useEffect(() => {
        // Applying styles to the document root element
        for (const property in theme) {
            document.documentElement.style.setProperty(`--${property}`, theme[property])
        }
    })

    function toggleTheme() {
        themeName === 'light' ? setThemeName('dark') : setThemeName('light') 
      }

    return (
        <ThemeContext.Provider value={{themeName, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default Themer