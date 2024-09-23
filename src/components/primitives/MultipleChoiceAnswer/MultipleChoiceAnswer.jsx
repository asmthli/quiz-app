import styles from './MultipleChoiceAnswer.module.css'

function MultipleChoiceAnswer({letter, choice}) {
    return (
       <li>
            <button>
                {letter}
                {choice}
            </button>
       </li>
    )
}

export default MultipleChoiceAnswer