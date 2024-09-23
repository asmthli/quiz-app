import styles from './MultipleChoiceAnswer.module.css'

function MultipleChoiceAnswer({letter, choice, setQuestionIndex}) {
    return (
       <li>
            <button
                onClick={() => setQuestionIndex(index => index + 1)}
            >
                {letter}
                {choice}
            </button>
       </li>
    )
}

export default MultipleChoiceAnswer