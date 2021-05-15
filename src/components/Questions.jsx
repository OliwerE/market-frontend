import React, { useState, useEffect } from 'react'
import './Questions.css'

import Question from './Question.jsx'

const Questions = () => {
  const [questions, setQuestions] = useState([])

  const getQuestions = async () => {
    await fetch(process.env.REACT_APP_GET_HELP_QUESTIONS).then((res) => {
      return res.json()
    }).then((json) => {
      setQuestions(json)
      console.log(json)
    })
  }

  useEffect(() => {
    getQuestions()
  }, [])

  return (
    <>
      {/*questions.map((question) => {
        return <Question key={question.id} props={question} />
      })*/}
    </> // Fixa:  Koppla ihop med backend
  )
}

export default Questions
