import {toggleSwitch, toggleContainer} from './ToggleSwitch.module.css'
import darkModeSun from '/images/icon-sun-light.svg'
import darkModeMoon from '/images/icon-moon-light.svg'
import lightModeSun from '/images/icon-sun-dark.svg'
import lightModeMoon from '/images/icon-moon-dark.svg'
import { useContext } from 'react'
import { ThemeContext } from '../../../contexts/themeContext'

function ToggleSwitch({className}) {
    const {theme, toggleTheme} = useContext(ThemeContext)

    let sunImg = lightModeSun
    let moonImg = lightModeMoon

    if (theme === 'dark') {
        sunImg = darkModeSun
        moonImg = darkModeMoon
    }

    return (
        <div className={toggleContainer + " " + className}>
            <img src={sunImg} alt="light setting"/>
            <input 
                className={toggleSwitch} 
                type="checkbox" 
                role="switch" 
                onClick={toggleTheme}
            />
            <img src={moonImg} alt="dark setting"/>
        </div>
    )
}

export default ToggleSwitch