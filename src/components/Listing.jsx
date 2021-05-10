import React from 'react'
import { useHistory } from 'react-router-dom'
import './Listing.css'

const Listing = ({listing}) => {
  const history = useHistory()
  const {id, title, listingType, productImage, description, category, price} = listing

  const handleListingClick = (e) => {
    console.log('Clicked: ', e.target.parentNode) // annonsen som klickas
    history.push('/salj/' + id) // Redirect till start
  }

  // http://localhost:8080/listings/6099004fe215e60b80409414

  console.log('ID: ', id)
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
