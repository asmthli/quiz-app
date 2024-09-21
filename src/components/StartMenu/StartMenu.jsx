import SubjectButton from "../primitives/SubjectButton/SubjectButton.jsx"
import htmlImg from '/images/icon-html.svg'
import cssImg from '/images/icon-css.svg'
import jsImg from '/images/icon-js.svg'
import accessibilityImg from '/images/icon-accessibility.svg'

function StartMenu() {
    return (
        <div className="start-menu">
            <h1>Welcome to the <span>Frontend Quiz!</span></h1>
            <p>Pick a subject to get started.</p>

            <div>
                <SubjectButton 
                    subject="HTML"
                    imgPath={htmlImg}
                />
                <SubjectButton 
                    subject="CSS"
                    imgPath={cssImg}
                />
                <SubjectButton 
                    subject="JavaScript"
                    imgPath={jsImg}
                />
                <SubjectButton 
                    subject="Accessibility"
                    imgPath={accessibilityImg}
                />
            </div>
        </div>
    )
}

export default StartMenu