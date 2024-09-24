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
    const [showAnswer, setShowAnswer] = useState(false)

    const subjectData = data.quizzes.filter(quiz => quiz.title === subject)[0]
    const subjectIconUrl = subjectData.icon

    const question = subjectData.questions[questionIndex].question
    const options = subjectData.questions[questionIndex].options
    const answer = subjectData.questions[questionIndex].answer

    const buttonStates = {}
    if (showAnswer) {
        // If the chosen answer is right, its value will be overwritten with 'correct'.
        buttonStates[chosenAnswer] = 'incorrect'
        buttonStates[answer] = 'correct'
    } else {
        buttonStates[chosenAnswer] = 'selected'
    }

    function handleSubmit() {
        if (!chosenAnswer) {
            console.log("please choose an answer")
            return
        } 
        
        if (chosenAnswer === answer) {
            setScore(score + 1)
        }

        setShowAnswer(true)
    }

    function handleNext() {
        setQuestionIndex(questionIndex + 1)
        setChosenAnswer('')
        setShowAnswer(false)
    }

    const quizRunning = questionIndex < 9
    if (quizRunning) {
        return (
            <>
                <img src={subjectIconUrl} />
                <h1>{subjectData.title}</h1>
                <h2>Question {questionIndex + 1} of 10</h2>
                <p>{question}</p>
                <MultipleChoice 
                    choices={options} 
                    setChosenAnswer={setChosenAnswer} 
                    buttonStates={buttonStates} 
                />
                {showAnswer ? 
                    <button onClick={handleNext}>Next Question</button> :
                    <button onClick={handleSubmit}>Submit Answer</button>
                }
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