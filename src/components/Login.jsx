import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Login.css'

const Login = ({ close, setAuth, openRegister, setModal, setModalContent }) => {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

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
      fetch(process.env.REACT_APP_POST_LOGIN, {
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
      <>
        <form id="loginForm" onSubmit={handleSubmit}>
          <label for="username">Användarnamn:</label><br>
          </br><input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)}></input><br>
          </br><label for="password">Lösenord:</label><br>
          </br><input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input><br>
          </br><button className="loginBtn" type="submit">Logga in</button>
        </form>
        <p id="loginFormNoAccountText">Har du inget konto?</p>
        <button onClick={openRegister} className="loginBtn" id="loginCreateAccountBtn">Skapa Konto</button>
      </>
  )
}

export default Login
