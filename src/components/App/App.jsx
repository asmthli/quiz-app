import './App.module.css'
import StartMenu from '../StartMenu/StartMenu.jsx'
import Quiz from '../Quiz/Quiz.jsx'
import { useState } from 'react'
import Themer from '../primitives/Themer/Themer.jsx'

function App() {
  const [quizSubject, setQuizSubject] = useState('')

  return (
    <Themer>
      {quizSubject ? 
      <Quiz 
        subject={quizSubject} 
        setQuizSubject={setQuizSubject} 
      /> : 
      <StartMenu 
        setQuizSubject={setQuizSubject}
      />}
    </Themer>
  )
}

export default App
