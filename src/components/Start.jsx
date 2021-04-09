import React from 'react'
import './Start.css'

import Latest from './Latest.jsx'
import StartSearch from './StartSearch.jsx'
import StartShortcuts from './StartShortcuts.jsx'

const Start = () => {
  return (
      <div id="start">
        <div id="mainLeft">
        <StartSearch />
        <StartShortcuts />
        </div>
        <div id="rightMenu">
          <Latest id="latest" />
        </div>

      </div>
    // <StartSearch />
    // <Categories />

  )
}

export default Start

/*

        <StartSearch />
        <StartShortcuts />
        <Latest />

*/
