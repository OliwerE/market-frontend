import React, { useState } from 'react'
import './Register.css'

const Register = ({ close, openLogin, setModal, setModalContent }) => {

  const [firstname, setFirstName] = useState('') // byt till lösning utan många useState?
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')

  const handleSubmitResponse = (json) => {
    if (json.status === 200) {
      // Fixa: Visa modal på login sidan.
      // setModalContent('Your account has been created.')
      // setModal(true)
      openLogin()
    } else if (json.status === 400 || json.status === 409 || json.status === 500) {
      setModalContent(json.msg)
      setModal(true)
    } else {
      setModalContent('Unknown Error, try again later')
      setModal(true)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(firstname, lastname, username, phoneNumber, password, passwordRepeat, email, city)
    
    const userData = { firstname, lastname, username, phoneNumber, password, passwordRepeat, email, city }

    // OBS!! email hanteras inte på servern!

    fetch('http://localhost:8080/auth/register', {
    method: 'POST',
    credentials: 'include',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
    }).then(res => {
      return res.json()
    }).then(json => {
      handleSubmitResponse(json)
    }).catch(err => console.error(err))

  }


  return (
    <>
        <div>
          <form id="registerForm" onSubmit={handleSubmit}>
            
            <div className="registerFormRow">
              <div className="registerFormColumn">
                <label id="firstFormLabel" for="firstname">Förnamn</label>
                <input type="text" id="firstname" name="firstname" value={firstname} onChange={(e) => setFirstName(e.target.value)}></input>
              </div>
              <div className="registerFormColumn">
                <label for="lastname">Efternamn</label>
                <input type="text" id="lastname" name="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)}></input>
              </div>
            </div>
            <div className="registerFormRow">
              <div className="registerFormColumn">
                <label for="username">Användarnamn</label>
                <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
              </div>
              <div className="registerFormColumn">
                <label for="Telefonnummer">Telefonnummer</label>
                <input type="text" id="Telefonnummer" name="Telefonnummer" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}></input>
              </div>
            </div>
            <div className="registerFormRow">
              <div className="registerFormColumn">
                <label for="email">E-post</label>
                <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
              </div>
              <div className="registerFormColumn">
                <label for="city">Ort</label>
                <input type="text" id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)}></input>
              </div>
            </div>
            <div className="registerFormRow">
              <div className="registerFormColumn">
                <label for="password">Lösenord</label>
                <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
              </div>
              <div className="registerFormColumn">
                <label for="passwordRepeat">Upprepa lösenord</label>
                <input type="password" id="passwordRepeat" name="passwordRepeat" value={passwordRepeat} onChange={(e) => setPasswordRepeat(e.target.value)}></input>
              </div>
              <button className="registerFormBtn" type="submit">Skapa konto</button>
            </div>
          </form>
        </div>
        <div id="registerFormHasAccountContainer">
          <p id="registerFormHasAccount">Har du redan ett konto?</p>
          <button className="registerFormBtn" onClick={openLogin} >Logga in</button>
        </div>
    </>
  )
}

export default Register
