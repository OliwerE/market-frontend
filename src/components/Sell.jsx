import React from 'react'
import './Sell.css'

import Latest from './Latest.jsx'
import Listings from './Listings.jsx'

function Sell() {
  return (
    <div id="sellMain">

      <div id="sellCategories">
        Kategorier
      </div>
      <div id="sellSearch">
        (sälj) sökkomponent
      </div>
      <div id="sellListings">
        <Listings url={process.env.REACT_APP_GET_SELL_LISTINGS} />
      </div>
      <div id="sellLatest">
        <Latest id="latestComponent" />
      </div>
    </div>
  )
}

export default Sell
