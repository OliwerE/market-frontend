import React, { useState } from 'react'
import './Question.css'

const Question = ({props}) => {
  const {id, title, answer} = props
  const [showAnswer, setShowAnswer] = useState(false)

  const toggleAnswer = () => {
    if (showAnswer === true) {
      setShowAnswer(false)
    } else {
      setShowAnswer(true)
    }
  }

  return (
    <div id={id} onClick={toggleAnswer} className="questionContainer">
      <div className="questionTitle">
        <h3>{title}</h3>
      </div>
      {showAnswer ? <p>{answer}</p> : null }

    </div>
  )
}

export default Question
