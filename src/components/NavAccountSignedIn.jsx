import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './NavAccountSignedIn.css'

const NavAccountSignedIn = ({ setAuth, name }) => {
  const [username, setUsername] = useState('')  
  const history = useHistory()

  useEffect(() => {
    fetch('http://localhost:8080/auth/username', {
      method: 'GET',
      credentials: 'include'
    }).then((res) => {
      return res.json()
    }).then((json) => {
      setUsername(json.username)
    }).catch((err) => {
      console.error('Fetch username Error:')
      console.error(err)
    })
  }, [])

  const updateAuthState = (json) => {
    if (json.successfulLogout) {
      // uppdatera auth state
      setAuth(false)
      history.push('/') // Redirect till start
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

  const handleUsernameClick = () => {
    console.log('clicked username!')
    history.push('/konto')
  }

  return (
    <div id="navSignedIn">
      <h2 onClick={handleUsernameClick} >{username}</h2>
      <button onClick={handleLogout} >Logga ut</button>
    </div>
  )
}

export default NavAccountSignedIn
