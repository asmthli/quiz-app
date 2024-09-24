import PropTypes from 'prop-types'
import MultipleChoiceAnswer from "../primitives/MultipleChoiceAnswer/MultipleChoiceAnswer.jsx"

MultipleChoice.propTypes = {
    choices: PropTypes.arrayOf(PropTypes.string),
    setChosenAnswer: PropTypes.func.isRequired,
    buttonStates: PropTypes.objectOf(PropTypes.string)
}

function MultipleChoice({choices, setChosenAnswer, buttonStates}) {
    const answerComponents = []
    const letters = ['G', 'F', 'E', 'D', 'C', 'B', 'A']

    console.log(buttonStates)

    for (let choice of choices) {
        const answer = 
        <MultipleChoiceAnswer 
            key={choice}
            letter={letters.pop()} 
            choice={choice}
            setChosenAnswer={setChosenAnswer}
            state={buttonStates[choice]}
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