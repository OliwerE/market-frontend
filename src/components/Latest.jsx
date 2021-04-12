import React, { useState, useEffect } from 'react'
import './Latest.css'

const Latest = () => {
  const [adverts, setadverts] = useState([])

  const getData = async () => {
    await fetch('http://192.168.1.4:8080/test/latest').then(res => {
      return res.json()
    }).then((json) => {
      setadverts(json)
    }).catch(err => {
      console.log(err)
    })
    // console.log(data) // annonser

    
  }

  useEffect(() => {
    getData()
  }, [])


  // console.log(adverts)
  return (
    <div id="latest">
      <h2>Senaste annonserna</h2>
      <div id="latestFlexContainer">
        {adverts.map((advert) => {
          const {title, img, price} = advert
          return (
            <div>
              <img src={img} alt="alt text" />
              <h3>{title}</h3>
              <p>{price} kr</p>
              <button>visa annons</button>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default Latest
