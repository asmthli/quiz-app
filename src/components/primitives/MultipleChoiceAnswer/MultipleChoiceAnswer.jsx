import PropTypes from 'prop-types'
import correctImg from '/images/icon-correct.svg'
import incorrectImg from '/images/icon-incorrect.svg'

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
        stateImage = <img src={correctImg} />
    } else if (state === 'incorrect') {
        stateImage = <img src={incorrectImg} />
    }

    return (
       <li>
            <button
                onClick={handleClick}>
                {letter}
                {choice}
                {stateImage}
            </button>
       </li>
    )
}

export default MultipleChoiceAnswer