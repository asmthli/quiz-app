import { useState } from 'react'
import PropTypes from 'prop-types'
import data from '../../data.json'
import MultipleChoice from '../MultipleChoice/MultipleChoice.jsx'

Quiz.propTypes = {
    subject: PropTypes.string.isRequired,
    setQuizSubject: PropTypes.func.isRequired
}

function Quiz({subject, setQuizSubject}) {
    const [questionIndex, setQuestionIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [chosenAnswer, setChosenAnswer] = useState('')

    const subjectData = data.quizzes.filter(quiz => quiz.title === subject)[0]
    const subjectIconUrl = subjectData.icon

    const question = subjectData.questions[questionIndex].question
    const options = subjectData.questions[questionIndex].options
    const answer = subjectData.questions[questionIndex].answer

    function handleSubmit() {
        if (!chosenAnswer) {
            console.log("please choose an answer")
            return
        } 
        
        if (chosenAnswer === answer) {
            setScore(score + 1)
        }

        setQuestionIndex(questionIndex + 1)
        setChosenAnswer('')
    }

    if (questionIndex < 9) {
        return (
            <>
                <img src={subjectIconUrl} />
                <h1>{subjectData.title}</h1>
                <h2>Question {questionIndex + 1} of 10</h2>
                <p>{question}</p>
                <MultipleChoice choices={options} setChosenAnswer={setChosenAnswer} />
                <button onClick={handleSubmit}>Submit Answer</button>
            </>
        )
    } else {
        return (
            <>
                <img src={subjectIconUrl} />
                <h1>{subjectData.title}</h1>

                <h2>Quiz completed</h2>
                <p>You scored...</p>

                <div>
                    <img src={subjectIconUrl} />
                    <h3>{subjectData.title}</h3>

                    <p>{score} <span>out of 10</span></p>
                </div>

                <button onClick={() => setQuizSubject('')}>
                    Play Again
                </button>
            </>
        )
    }
}

export default Quiz