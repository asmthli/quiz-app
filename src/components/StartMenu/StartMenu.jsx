import SelectableChoice from "../primitives/SelectableChoice/SelectableChoice.jsx"
import htmlImg from '/images/icon-html.svg'
import cssImg from '/images/icon-css.svg'
import jsImg from '/images/icon-js.svg'
import PropTypes from 'prop-types'
import accessibilityImg from '/images/icon-accessibility.svg'
import {
    quizMenu,
    header,
    body,
    subjectList,
} from './StartMenu.module.css'
import Header from "../Header/Header.jsx"


StartMenu.propTypes = {
    setQuizSubject: PropTypes.func.isRequired
}

function StartMenu({setQuizSubject}) {
    return (
        <div className={quizMenu}>
            <Header />

            <h1 className={header}>Welcome to the <span>Frontend Quiz!</span></h1>
            <p className={body}>Pick a subject to get started.</p>

            <div className={subjectList}>
                <SelectableChoice 
                    choice="HTML"
                    imgPath={htmlImg}
                    setQuizSubject={setQuizSubject}
                    iconBgColor="#FF7E3540"
                />
                <SelectableChoice 
                    choice="CSS"
                    imgPath={cssImg}
                    setQuizSubject={setQuizSubject}
                    iconBgColor="#2FD88740"
                />
                <SelectableChoice 
                    choice="JavaScript"
                    imgPath={jsImg}
                    setQuizSubject={setQuizSubject}
                    iconBgColor="#306AFF40"
                />
                <SelectableChoice 
                    choice="Accessibility"
                    imgPath={accessibilityImg}
                    setQuizSubject={setQuizSubject}
                    iconBgColor="#F6E7FF"
                />
            </div>
        </div>
    )
}

export default StartMenu