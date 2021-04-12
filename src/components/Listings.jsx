import { getDefaultNormalizer } from '@testing-library/dom'
import React, {useState, useEffect} from 'react'
import './Listings.css'

import Listing from './Listing.jsx'

const Listings = () => {
  const [listings, setListings] = useState([])
  const getData = async () => {
    await fetch('http://localhost:8080/test/listings').then(res => {
      return res.json()
    }).then((json) => {
      setListings(json)
    }).catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  console.log('listings!')
  console.log(listings)
  return (
    <div id="listings">
      {listings.map((listing) => {
        return <Listing listing={listing} />
      })}
    </div>
  )
}

export default Listings
