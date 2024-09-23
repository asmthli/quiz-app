import SelectableChoice from "../primitives/SelectableChoice/SelectableChoice.jsx"
import htmlImg from '/images/icon-html.svg'
import cssImg from '/images/icon-css.svg'
import jsImg from '/images/icon-js.svg'
import accessibilityImg from '/images/icon-accessibility.svg'
import ToggleSwitch from "../primitives/ToggleSwitch/ToggleSwitch.jsx"

function StartMenu() {
    return (
        <div className="start-menu">
            <h1>Welcome to the <span>Frontend Quiz!</span></h1>
            <p>Pick a subject to get started.</p>

            <ToggleSwitch />

            <div>
                <SelectableChoice 
                    subject="HTML"
                    imgPath={htmlImg}
                />
                <SelectableChoice 
                    subject="CSS"
                    imgPath={cssImg}
                />
                <SelectableChoice 
                    subject="JavaScript"
                    imgPath={jsImg}
                />
                <SelectableChoice 
                    subject="Accessibility"
                    imgPath={accessibilityImg}
                />
            </div>
        </div>
    )
}

export default StartMenu