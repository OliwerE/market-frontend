import React, { useEffect, useState } from 'react'

const ListingPage = () => {
  console.log(window.location.href)

  const [listing, setListing] = useState({})

  useEffect(() => {
    const splitHref = window.location.href.split('/')

    const id = splitHref[splitHref.length - 1]

    console.log(id) // OBS! om en användare själv lägger till något på slutet efter id så fungerar detta inte!!

    fetch(`${process.env.REACT_APP_GET_LISTINGS}/${id}`, {
      method: 'GET',
      // credentials: 'include',
      headers: {
          "Content-Type": "application/json"
      }
    }).then(res => {
      return res.json()
    }).then((json) => {
      console.log(json.foundListing[0])
      setListing(json.foundListing[0])
      
      // setListing(json)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div>
      <h1>Annonssida</h1>
      <p>{listing.listingType}</p>
      <p>{listing.category}</p>
      <h1>{listing.title}</h1>
      <img src={listing.productImage} /> {/* Fixa bilder! kan inte skickas till server! */}
      <p>{listing.description}</p>
      <p>{listing.price} kr</p>
    </div>
  )
}

export default ListingPage
