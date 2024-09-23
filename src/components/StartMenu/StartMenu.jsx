import SelectableChoice from "../primitives/SelectableChoice/SelectableChoice.jsx"
import htmlImg from '/images/icon-html.svg'
import cssImg from '/images/icon-css.svg'
import jsImg from '/images/icon-js.svg'
import accessibilityImg from '/images/icon-accessibility.svg'
import ToggleSwitch from "../primitives/ToggleSwitch/ToggleSwitch.jsx"

function StartMenu({setQuizSubject}) {
    return (
        <div className="start-menu">
            <h1>Welcome to the <span>Frontend Quiz!</span></h1>
            <p>Pick a subject to get started.</p>

            <ToggleSwitch />

            <div>
                <SelectableChoice 
                    choice="HTML"
                    imgPath={htmlImg}
                    setQuizSubject={setQuizSubject}
                />
                <SelectableChoice 
                    choice="CSS"
                    imgPath={cssImg}
                    setQuizSubject={setQuizSubject}
                />
                <SelectableChoice 
                    choice="JavaScript"
                    imgPath={jsImg}
                    setQuizSubject={setQuizSubject}
                />
                <SelectableChoice 
                    choice="Accessibility"
                    imgPath={accessibilityImg}
                    setQuizSubject={setQuizSubject}
                />
            </div>
        </div>
    )
}

export default StartMenu