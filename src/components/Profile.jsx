import React, { useEffect, useState } from 'react'
import './Profile.css'

const Profile = () => {
  var profileData = {}
  const [username, setUsername] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')

  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newPasswordRepeat, setNewPasswordRepeat] = useState('')



  useEffect(() => {
    fetch('http://localhost:8080/auth/profile', {
      method: 'GET',
      credentials: 'include'
    }).then((res) => {
      return res.json()
    }).then((json) => {
      setUsername(json.username)
      setFirstname(json.firstname)
      setLastname(json.lastname)
      setPhoneNumber(json.phoneNumber)
      setEmail(json.email)
      setCity(json.city)
      profileData = json
      console.log(json)
      console.log(lastname)
    }).catch((err) => {
      console.error('Error: get user data')
      console.error(err)
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      firstname,
      lastname,
      phoneNumber,
      email,
      city
    }

    if (oldPassword.length > 0) {
      console.log('lösenord uppdateras')
      // uppdatera lösenordet

      if (newPassword === newPasswordRepeat) {
        console.log('nya lösenorden stämmer')
        data.newPassword = newPassword
        data.password = oldPassword
      } else {
        console.log('Nya lösenorden stämmer inte!')
      }
    } else { // ta bort sen!
      console.log('Lösenord inte ändrat')
    }

    console.log(data)

      var statusCode = 0
      fetch('http://localhost:8080/auth/profile', {
      method: 'POST',
      credentials: 'include',
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
      }).then(res => {
        statusCode = res.status
        return res.json()
      }).then(json => {
        // handleResponse(statusCode, json)
        console.log(json)
        console.log(statusCode)
      }).catch(err => {
        console.error(err)
      })



    // if (firstname !== profileData.firstname || lastname !== profileData.lastname || phoneNumber !== profileData.phoneNumber || email !== profileData.email || city !== profileData.email) { // firstname !== profileData.firstname || lastname !== profileData.lastname || phoneNumber !== profileData.phoneNumber || email !== profileData.email || city !== profileData.email
    //   // om någon data (förutom password) ändrats
    //   // uppdatera användarinfo
    //   console.log('användardata uppdateras')
    // } else { // ta bort sen
    //   // användardata inte ändrat
    //   console.log('användardata inte ändrat')
    // }

    console.log('submit!')
  }

  return (
    <div id="AccountProfileContainer">
    <h1>Min profil</h1>
    <p>Användarnamn: {username}</p>
    <form id="loginForm" onSubmit={handleSubmit}>
      <label for="firstname">Förnamn:</label><br>
      </br><input type="text" id="firstname" name="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)}></input><br>
      </br><label for="lastname">Efternamn:</label><br>
      </br><input type="text" id="lastname" name="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)}></input><br>
      </br><label for="phoneNumber">Telefonnummer:</label><br>
      </br><input type="text" id="phoneNumber" name="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}></input><br>
      </br><label for="email">E-post:</label><br>
      </br><input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input><br>
      </br><label for="city">Stad:</label><br>
      </br><input type="text" id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)}></input><br>
      </br>
      <h2>Byt lösenord</h2>
      <label for="oldPassword">Nuvarande lösenord:</label><br>
      </br><input type="password" id="oldPassword" name="oldPassword" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)}></input><br>
      </br><label for="newPassword">Nytt lösenord:</label><br>
      </br><input type="password" id="newPassword" name="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}></input><br>
      </br><label for="newPasswordRepeat">Upprepa nytt lösenord:</label><br>
      </br><input type="password" id="newPasswordRepeat" name="newPasswordRepeat" value={newPasswordRepeat} onChange={(e) => setNewPasswordRepeat(e.target.value)}></input><br>
      
      
      </br><button className="loginBtn" type="submit">Ändra</button>
    </form>
    </div>
  )
}

export default Profile
