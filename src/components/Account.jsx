import React, { useState } from 'react'
import './Account.css'

import MyListings from './MyListings.jsx'
import Messages from './Messages.jsx'
import Profile from './Profile.jsx'

const Account = () => {
  const [showMyListings, setShowMyListings] = useState(true)
  const [showMessages, setShowMessages] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  const openMyListings = () => {
    if (showMyListings) {
      return
    }
    if (showMessages) {
      setShowMessages(false)
    }
    if (showProfile) {
      setShowProfile(false)
    }
    setShowMyListings(true)
  }

  const openMessages = () => {
    if (showMessages) {
      return
    }
    if (showMyListings) {
      setShowMyListings(false)
    }
    if (showProfile) {
      setShowProfile(false)
    }
    setShowMessages(true)
  }

  const openProfile = () => {
    if (showProfile) {
      return
    }
    if (showMyListings) {
      setShowMyListings(false)
    }
    if (showMessages) {
      setShowMessages(false)
    }
    setShowProfile(true)
  }

  return (
    <div>
      <div id="myAccountNav">
        <div id="myAccountNavContent">
            <ul>
              <li onClick={openMyListings}>
                Mina Annonser
              </li>
              <li onClick={openMessages}>
                Meddelanden
              </li>
              <li onClick={openProfile}>
                Profil
              </li>
            </ul>
        </div>
      </div>
      <div id="myAccountContentContainer">

        {showMyListings && <MyListings />}
        {showMessages && <Messages />}
        {showProfile && <Profile />}
      </div>
    </div>
  )
}

export default Account
