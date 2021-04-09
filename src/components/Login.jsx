import React, { useState } from 'react'
import './Login.css'

const Login = ({ close }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(username, password)

    // koppla ihop med backend.
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
