import { useState } from 'react'
import data from '../../data.json'
import MultipleChoice from '../MultipleChoice/MultipleChoice.jsx'

function Quiz({subject}) {
    const [questionIndex, setQuestionIndex] = useState(0)
    const [score, setScore] = useState(0)

    const subjectData = data.quizzes.filter(quiz => quiz.title === subject)[0]
    const subjectIconUrl = subjectData.icon
    const question = subjectData.questions[questionIndex].question
    const options = subjectData.questions[questionIndex].options

    return (
        <>
            <img src={subjectIconUrl} />
            <h1>{subjectData.title}</h1>
            <h2>Question {questionIndex + 1} of 10</h2>
            <p>{question}</p>
            <MultipleChoice choices={options} setQuestionIndex={setQuestionIndex}/>
        </>
    )
}

export default Quiz