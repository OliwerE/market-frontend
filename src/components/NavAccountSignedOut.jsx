import React from 'react'

const NavAccountSignedOut = ({ openLogin, openRegister }) => {
  return (
    <>
      <button onClick={openLogin}>Logga in</button>
      <button onClick={openRegister}>Registrera</button>
    </>
  )
}

export default NavAccountSignedOut
