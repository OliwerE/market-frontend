import React, { useState } from 'react'
import './Login.css'

const Login = ({ close }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleResponse = (status, json) => {
    console.log('status: ', status)
    console.log('----')
    console.log(json)

    if (status === 200) {
      // "logga in" användare
    } else if (status === 401) {
      // meddela användare att inloggning misslyckades
    } else {
      // okänt fel
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const userData = {
      username,
      password
    }

    let statusCode = 0
    fetch('http://localhost:8080/auth/login', {
    method: 'POST',
    // mode: 'cors', // krävs ej
    credentials: 'include',
    headers: {
        "Content-Type": "application/json", // "application/x-www-form-urlencoded"
        // "Access-Control-Allow-Origin": "http://localhost:3000" // krävs ej på klient
    },
    body: JSON.stringify(userData)
    }).then(res => {
      statusCode = res.status
      return res.json()
    }).then(json => {
      handleResponse(statusCode, json)
    }).catch(err => console.error(err))

    

  }

  return (
      <div id="loginBox">
        <button onClick={close}>Stäng</button>
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
