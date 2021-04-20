import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Login.css'

import Modal from './Modal.jsx'

const Login = ({ close, setAuth }) => {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [modal, setModal] = useState(false)
  const [modalContent, setModalContent] = useState('')

  /* // Används ej
  const closeModal = () => { // Bugg: om användare klickar flera ggr så stängs modal efter första 10 sek!
    setModal(false)
  }
  */

  const handleResponse = (status, json) => {
    if (status === 200) {
      setAuth(true) // obs byt till use context ist för prop drilling!
      close() // stänger fönster
      history.push('/konto')
    } else if (status === 401) {
      setModalContent('Inloggningen misslyckades. Kontrollera dina användaruppgifter')
      setModal(true)
    } else {
      setModalContent('Ett okänt fel har inträffat, försök igen senare.')
      setModal(true)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username.trim().length > 0 && password.trim().length > 0) {
      const userData = {
        username,
        password
      }
      let statusCode = 0
      fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(userData)
      }).then(res => {
        statusCode = res.status
        return res.json()
      }).then(json => {
        handleResponse(statusCode, json)
      }).catch(err => {
        console.error(err)
        setModalContent('Ett okänt fel har inträffat, försök igen senare.')
        setModal(true)
      })
    } else {
      setModalContent('Ange både användarnamn och lösenord!')
      setModal(true)
    }
  }

  return (
      <div id="loginBox">
        <button onClick={close}>Stäng</button>
        <div id="loginModalBox">
          {modal && <Modal modalContent={modalContent} /*close={closeModal}*/ />}
        </div>
        <h2>Logga in</h2>
        <form onSubmit={handleSubmit}>
          <label for="username">Användarnamn:</label><br>
          </br><input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)}></input><br>
          </br><label for="password">Lösenord:</label><br>
          </br><input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input><br>
          </br><button type="submit">Logga in</button>
        </form>
        
        <p>Har du inget konto?</p>
        <button>Skapa Konto</button>
      </div>
  )
}

export default Login
