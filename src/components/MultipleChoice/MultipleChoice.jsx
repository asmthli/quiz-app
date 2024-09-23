import MultipleChoiceAnswer from "../primitives/MultipleChoiceAnswer/MultipleChoiceAnswer.jsx"

function MultipleChoice() {
    return (
        <ul>
            <MultipleChoiceAnswer letter="A" choice="Test 1" />
            <MultipleChoiceAnswer letter="B" choice="Test 2" />
            <MultipleChoiceAnswer letter="C" choice="Test 3" />
            <MultipleChoiceAnswer letter="D" choice="Test 4" />
        </ul>
    )
}

export default MultipleChoice