import { getDefaultNormalizer } from '@testing-library/dom'
import React, {useState, useEffect} from 'react'
import './Listings.css'

import Listing from './Listing.jsx'

const Listings = ({ url }) => {
  const [listings, setListings] = useState([])
  const getData = async () => {
    await fetch(url, {
          method: 'GET',
          credentials: 'include',
          headers: {
              "Content-Type": "application/json"
          }
          }).then(res => {
      return res.json()
    }).then((json) => {
      setListings(json.foundListings)
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
      {listings && listings.map((listing) => {
        return <Listing listing={listing} />
      })}
    </div> // FIXA: koppla ihop med backend
  )
}

export default Listings
