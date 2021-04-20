import React from 'react'
import './NavAccountSignedIn.css'

const NavAccountSignedIn = ({ setAuth }) => {
  const updateAuthState = (json) => {
    if (json.successfulLogout) {
      // uppdatera auth state
      setAuth(false)
    } else {
      // informera användare att utloggning misslyckades
    }
  }

  const handleLogout = () => {
    fetch('http://localhost:8080/auth/logout', {
    method: 'POST',
    credentials: 'include',
    }).then(res => {
      return res.json()
    }).then(json => {
      updateAuthState(json)
    }).catch(err => console.error(err))
  }

  return (
    <div id="navSignedIn">
      <h2>Anv namn</h2>
      <button onClick={handleLogout} >Logga ut</button>
    </div>
  )
}

export default NavAccountSignedIn
