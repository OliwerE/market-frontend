import React from 'react'

import Listings from './Listings.jsx'

const MyListings = () => {
  return (
    <div>
      Mina annonser
      <Listings url="http://localhost:8080/listings/user" />
    </div>
  )
}

export default MyListings
