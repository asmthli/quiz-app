import ToggleSwitch from "../primitives/ToggleSwitch/ToggleSwitch.jsx"
import { HeaderContext } from "../../contexts/HeaderContext.jsx"
import styles from './Header.module.css'
import { useContext } from "react"

// Using the composite component pattern

function useHeaderContext() {
    const context = useContext(HeaderContext)
    if (!context) {
        throw new Error('Used a Header composite component outside of a Header.')
    }
}

function Header({children}) {
    return (
        <HeaderContext.Provider value={{placeholder: 'test'}}>
            <header className={styles.container}>
                {children}
                <ToggleSwitch className={styles.toggle}></ToggleSwitch>
            </header>
        </HeaderContext.Provider>
    )
}

Header.Icon = function HeaderIcon ({image}) {
    useHeaderContext()
    return (
        <img className={styles.img} src={image} />
    )
}

Header.Title = function HeaderTitle({text}) {
    useHeaderContext()
    return (
        <h1 className={styles.title}>{text}</h1>
    )
}

export default Header