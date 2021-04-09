import React, { useState } from 'react'
import './Register.css'

const Register = ({ close }) => {
  const [firstname, setFirstName] = useState('') // byt till lösning utan många useState?
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')
  const [city, setCity] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(firstname, lastName, username, phoneNumber, password, passwordRepeat, city)
  }


  return (
    <div id="registerBox">
      <button onClick={close}>Close!</button>
        <h2>Skapa konto</h2>
        <form onSubmit={handleSubmit}>
          <label id="firstFormLabel" for="firstname">Förnamn:</label>
          <input type="text" id="firstname" name="firstname" value={firstname} onChange={(e) => setFirstName(e.target.value)}></input>
          <label className="formLabel" for="lastname">Efternamn:</label>
          <input type="text" id="lastname" name="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)}></input><br>
          
          </br><label className="formLabel" for="username">Användarnamn:</label>
          <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
          <label className="formLabel" for="Telefonnummer">Telefonnummer:</label>
          <input type="text" id="Telefonnummer" name="Telefonnummer" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}></input><br>
          
          </br><label className="formLabel" for="password">Lösenord:</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
          <label className="formLabel" for="passwordRepeat">Upprepa lösenord:</label>
          <input type="password" id="passwordRepeat" name="passwordRepeat" value={passwordRepeat} onChange={(e) => setPasswordRepeat(e.target.value)}></input><br>
          </br><label className="formLabel" for="city">Ort:</label>
          <input type="text" id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)}></input><br>
          </br><button type="submit">Skapa konto</button>
        </form>
        
        <p>Har du redan ett konto?</p>
        <button>Logga in</button>
    </div>
  )
}

export default Register
