import React from 'react'
import './Listing.css'

const Listing = ({listing}) => {
  console.log(listing)

  const handleListingClick = (e) => {
    console.log('Clicked: ', e.target.parentNode) // annonsen som klickas
  }

  return (
    <div onClick={handleListingClick} id="listing">
      <div id="listingImage"></div>
      <div id="listingTitle"></div>
      <div id="listingPrice"></div>
    </div>
  )
}

export default Listing
