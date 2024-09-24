import PropTypes from 'prop-types'

MultipleChoiceAnswer.propTypes = {
    letter: PropTypes.string.isRequired,
    choice: PropTypes.string.isRequired,
    setChosenAnswer: PropTypes.func.isRequired
}

function MultipleChoiceAnswer({letter, choice, setChosenAnswer}) {
    return (
       <li>
            <button
                onClick={() => setChosenAnswer(choice)}>
                {letter}
                {choice}
            </button>
       </li>
    )
}

export default MultipleChoiceAnswer