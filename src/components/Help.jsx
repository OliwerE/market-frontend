import React from 'react'
import './Help.css'

import Questions from './Questions.jsx'

function Help() {
  return (
    <div id="helpElement">
      <div id="helpSearch">
        sök
      </div>
      <div id="helpQuestions">
        <Questions />
      </div>
      <div id="helpForm">
        formulär
      </div>
    </div>
  )
}

export default Help
