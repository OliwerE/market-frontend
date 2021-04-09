import React from 'react'
import './Help.css'

import Questions from './Questions.jsx'
import Form from './Form.jsx'

function Help() {
  return (
    <div id="helpElement">
      <div id="helpTitle">
          <div id="text">
            <h1>Frågor &amp; svar</h1>
          </div>
      </div>
      <div id="helpQuestions">
        <Questions />
      </div>
      <div id="helpForm">
        <Form />
      </div>
    </div>
  )
}

export default Help
