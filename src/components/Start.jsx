import React from 'react'
import './Start.css'

import Latest from './Latest.jsx'
import StartSearch from './StartSearch.jsx'
import StartShortcuts from './StartShortcuts.jsx'

const Start = () => {
  return (
      <div id="start">
        {/* <h1>Start</h1> */}
        <StartSearch />
        <StartShortcuts />
        <Latest />
      </div>
    // <StartSearch />
    // <Categories />

  )
}

export default Start
