import React from 'react'
import './Login.css'

const Login = ({ close }) => {
  return (
      <div id="loginBox">
        <button onClick={close}>Close!</button>
        <h2>Login</h2>
      </div>
  )
}

export default Login
