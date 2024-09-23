import './App.module.css'
import StartMenu from '../StartMenu/StartMenu.jsx'
import Quiz from '../Quiz/Quiz.jsx'
import { useState } from 'react'

function App() {
  const [quizSubject, setQuizSubject] = useState('')

  return (
    quizSubject ? <Quiz subject={quizSubject} /> : <StartMenu setQuizSubject={setQuizSubject}/>
  )
}

export default App
