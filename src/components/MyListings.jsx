import React from 'react'

import Listings from './Listings.jsx'

const MyListings = () => {
  return (
    <div>
      Mina annonser
      <Listings url={process.env.REACT_APP_GET_OWN_LISTINGS} />
    </div>
  )
}

export default MyListings
