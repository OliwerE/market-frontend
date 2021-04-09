import React from 'react'
import './Register.css'

const Register = ({ close }) => {
  return (
    <div id="registerBox">
      <button onClick={close}>Close!</button>
      <h2>Register</h2>
    </div>
  )
}

export default Register
