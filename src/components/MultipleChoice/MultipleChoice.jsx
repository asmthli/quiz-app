import PropTypes from 'prop-types'
import MultipleChoiceAnswer from "../primitives/MultipleChoiceAnswer/MultipleChoiceAnswer.jsx"

MultipleChoice.propTypes = {
    choices: PropTypes.arrayOf(PropTypes.string),
    setChosenAnswer: PropTypes.func.isRequired,
    buttonStates: PropTypes.objectOf(PropTypes.string),
    setShowError: PropTypes.func.isRequired
}

function MultipleChoice({choices, setChosenAnswer, buttonStates, setShowError}) {
    const answerComponents = []
    const letters = ['G', 'F', 'E', 'D', 'C', 'B', 'A']

    for (let choice of choices) {
        const answer = 
        <MultipleChoiceAnswer 
            key={choice}
            letter={letters.pop()} 
            choice={choice}
            setChosenAnswer={setChosenAnswer}
            state={buttonStates[choice]}
            setShowError={setShowError}
        />
        
        answerComponents.push(answer)
    }

    return (
        <ul>
            {answerComponents}
        </ul>
    )
}

export default MultipleChoice