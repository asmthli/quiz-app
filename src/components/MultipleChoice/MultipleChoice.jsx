import MultipleChoiceAnswer from "../primitives/MultipleChoiceAnswer/MultipleChoiceAnswer.jsx"

function MultipleChoice({choices}) {
    const answerComponents = []
    const letters = ['G', 'F', 'E', 'D', 'C', 'B', 'A']

    for (let choice of choices) {
        const answer = <MultipleChoiceAnswer letter={letters.pop()} choice={choice} />
        answerComponents.push(answer)
    }

    return (
        <ul>
            {answerComponents}
        </ul>
    )
}

export default MultipleChoice