import PropTypes from 'prop-types'
import correctImg from '/images/icon-correct.svg'
import incorrectImg from '/images/icon-incorrect.svg'
import styles from './MultipleChoiceAnswer.module.css'
import { useState } from 'react'

MultipleChoiceAnswer.propTypes = {
    letter: PropTypes.string.isRequired,
    choice: PropTypes.string.isRequired,
    setChosenAnswer: PropTypes.func.isRequired,
    state: PropTypes.string,
    setShowError: PropTypes.func.isRequired
}

function MultipleChoiceAnswer({letter, choice, setChosenAnswer, state, setShowError, showingAnswer}) {
    const [mouseInside, setMouseInside] = useState(false)

    function handleClick() {
        setChosenAnswer(choice)
        setShowError(false)
    }

    function handleHover() {
        if (!state) {
            setMouseInside(!mouseInside)
        }
    }

    function handleMouseLeave() {
        setMouseInside(false)
    }

    let stateImage;
    let stateClass;
    if (state === 'correct') {
        stateImage = <img className={styles.image} src={correctImg} />
        stateClass = styles.correct
    } else if (state === 'incorrect') {
        stateImage = <img className={styles.image} src={incorrectImg} />
        stateClass = styles.incorrect
    } else if (state === 'selected') {
        stateClass = styles.selected
    } else if (mouseInside && !showingAnswer) {
        stateClass = styles.hovered
    }
    

    return (
       <li>
            <button
                onClick={handleClick}
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
                className={styles.button + ' ' + stateClass}
            >
                <p className={styles.letter}>{letter}</p>
                <p>{choice}</p>
                {stateImage}
            </button>
       </li>
    )
}

export default MultipleChoiceAnswer