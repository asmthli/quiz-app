import {toggleSwitch} from './ToggleSwitch.module.css'

function ToggleSwitch() {
    return (
        <input className={toggleSwitch} type="checkbox" role="switch" />
    )
}

export default ToggleSwitch