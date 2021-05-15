import React, { useState } from 'react'
import './Register.css'
import isemail from 'isemail'

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
      setModalContent(json.msg) // Byt till Användarnamn existerar redan!
      setModal(true)
    } else {
      setModalContent('Okänt fel, försök igen senare.')
      setModal(true)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (firstname.trim().length > 0 && lastname.trim().length > 0 && username.trim().length > 0 && phoneNumber.trim().length > 0 && password.trim().length > 0 && passwordRepeat.trim().length > 0 && email.trim().length > 0 && city.trim().length > 0) {
      if (password === passwordRepeat) {
        if (isemail.validate(email)) {
          const userData = { firstname, lastname, username, phoneNumber, password, email, city }
          fetch(process.env.REACT_APP_POST_REGISTER, {
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
        } else {
        setModalContent('Ange en korrekt email adress!')
        setModal(true)
        }
      } else {
        setModalContent('Lösenorden matchar inte.')
        setModal(true)
      }
    } else {
      setModalContent('Vänligen fyll i alla fält!')
      setModal(true)
    }
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
              {/* Lägg till checkbox GDPR */}
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
