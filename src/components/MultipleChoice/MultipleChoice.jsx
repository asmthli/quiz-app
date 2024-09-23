import MultipleChoiceAnswer from "../primitives/MultipleChoiceAnswer/MultipleChoiceAnswer.jsx"

function MultipleChoice({choices, setQuestionIndex}) {
    const answerComponents = []
    const letters = ['G', 'F', 'E', 'D', 'C', 'B', 'A']

    for (let choice of choices) {
        const answer = 
        <MultipleChoiceAnswer 
            letter={letters.pop()} 
            choice={choice} 
            setQuestionIndex={setQuestionIndex} 
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