import React, { useState, useEffect } from 'react'
import './AccountWindow.css'

import Modal from './Modal.jsx'


const AccountWindow = ({ title, close, Component, openLogin, openRegister, setAuth }) => {
  const [modal, setModal] = useState(false)
  const [modalContent, setModalContent] = useState('')

  return (
    <div id="AccountWindowContainer">
        <button id="AccountWindowContainerCloseBtn" onClick={close}>X</button> <br />
        <div id="AccountWindowContainerModalBox">
          {modal && <Modal modalContent={modalContent} /*close={closeModal}*/ />}
        </div>
        <h2>{title}</h2>
        <Component close={close} setAuth={setAuth} openLogin={openLogin} openRegister={openRegister} setModal={setModal} setModalContent={setModalContent} />
    </div>
  )
}

export default AccountWindow
