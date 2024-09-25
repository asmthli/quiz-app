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
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        console.log("Changing theme. Theme is now ", theme)

        if (theme === 'light') {
            // Applying styles to the document root element
            document.documentElement.style.setProperty('--testColor', 'lightpink')
        } else if (theme === 'dark') {
            document.documentElement.style.setProperty('--testColor', 'purple')
        }
    })

    function toggleTheme() {
        theme === 'light' ? setTheme('dark') : setTheme('light') 
      }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default Themer