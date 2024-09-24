import {toggleSwitch} from './ToggleSwitch.module.css'

function ToggleSwitch({className}) {
    return (
        <input 
            className={toggleSwitch + " " + className} 
            type="checkbox" 
            role="switch" 
        />
    )
}

export default ToggleSwitch