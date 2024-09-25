import ToggleSwitch from "../primitives/ToggleSwitch/ToggleSwitch.jsx"
import styles from './Header.module.css'

function Header({titleIcon, title}) {
    return (
        <header className={styles.container}>
            <img className={styles.img} src={titleIcon} />
            <h1 className={styles.title}>{title}</h1>
            <ToggleSwitch></ToggleSwitch>
        </header>
    )
}

export default Header