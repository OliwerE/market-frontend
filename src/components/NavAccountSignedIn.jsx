import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './NavAccountSignedIn.css'

const NavAccountSignedIn = ({ setAuth, name }) => {
  const [username, setUsername] = useState('')  
  const history = useHistory()

  useEffect(() => {
    fetch(process.env.REACT_APP_GET_USERNAME, {
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
    fetch(process.env.REACT_APP_POST_LOGOUT, {
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
      <Link id="createListingLink" to="/skapa-annons"><p>Skapa Annons</p></Link>
      <h2 onClick={handleUsernameClick} >{username}</h2>
      <button onClick={handleLogout} >Logga ut</button>
    </div>
  )
}

export default NavAccountSignedIn
