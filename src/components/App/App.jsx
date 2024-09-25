import './App.module.css'
import StartMenu from '../StartMenu/StartMenu.jsx'
import Quiz from '../Quiz/Quiz.jsx'
import { useState } from 'react'
import { ThemeContext } from '../../contexts/themeContext.jsx'

function App() {
  const [quizSubject, setQuizSubject] = useState('')
  const [theme, setTheme] = useState('light')

  function toggleTheme() {
    theme === 'light' ? setTheme('dark') : setTheme('light') 
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {
        quizSubject ? 
        <Quiz 
          subject={quizSubject} 
          setQuizSubject={setQuizSubject} 
        /> : 
        <StartMenu 
          setQuizSubject={setQuizSubject}
        />
      }
    </ThemeContext.Provider>
  )
}

export default App
