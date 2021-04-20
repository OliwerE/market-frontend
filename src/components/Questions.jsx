import React, { useState, useEffect } from 'react'
import './Questions.css'

import Question from './Question.jsx'

const Questions = () => {
  const [questions, setQuestions] = useState([])

  const getQuestions = async () => {
    await fetch('http://localhost:8080/test/questions').then((res) => {
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
