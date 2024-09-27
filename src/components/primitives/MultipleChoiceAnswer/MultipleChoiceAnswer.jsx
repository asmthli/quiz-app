import PropTypes from 'prop-types'
import correctImg from '/images/icon-correct.svg'
import incorrectImg from '/images/icon-incorrect.svg'
import styles from './MultipleChoiceAnswer.module.css'

MultipleChoiceAnswer.propTypes = {
    letter: PropTypes.string.isRequired,
    choice: PropTypes.string.isRequired,
    setChosenAnswer: PropTypes.func.isRequired,
    state: PropTypes.string,
    setShowError: PropTypes.func.isRequired
}

function MultipleChoiceAnswer({letter, choice, setChosenAnswer, state, setShowError}) {
    function handleClick() {
        setChosenAnswer(choice)
        setShowError(false)
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
    }
    

    return (
       <li>
            <button
                onClick={handleClick}
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