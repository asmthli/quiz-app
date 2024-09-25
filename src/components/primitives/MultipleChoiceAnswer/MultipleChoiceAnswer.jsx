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
    if (state === 'correct') {
        stateImage = <img className={styles.image} src={correctImg} />
    } else if (state === 'incorrect') {
        stateImage = <img className={styles.image} src={incorrectImg} />
    }
    

    return (
       <li>
            <button
                onClick={handleClick}
                className={styles.button}
            >
                <p className={styles.letter}>{letter}</p>
                <p>{choice}</p>
                {stateImage}
            </button>
       </li>
    )
}

export default MultipleChoiceAnswer