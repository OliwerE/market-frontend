import React from 'react'
import './Listing.css'

const Listing = ({listing}) => {
  const {id, title, listingType, productImage, description, category, price} = listing

  const handleListingClick = (e) => {
    console.log('Clicked: ', e.target.parentNode) // annonsen som klickas
  }

  return (
    <div onClick={handleListingClick} id="listing">
      <div id="listingImage">
        <img src={productImage} alt="alt text" />
      </div>
      <div id="listingTitle">
        <h2>{title}</h2>
      </div>
      <div id="listingPrice">
        <p>{price} kr</p>
      </div>
    </div>
  )
}

export default Listing
