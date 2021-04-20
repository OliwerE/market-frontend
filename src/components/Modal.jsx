import React, { useEffect } from 'react'
import './Modal.css'


const Modal = ({ modalContent, /*close*/ }) => {
  /*
  useEffect(() => {
    setTimeout(() => {
      close()
    },10000)
  },[])
  */

  return (
    <div id="modal">
      <p>{modalContent}</p>
    </div>
  )
}

export default Modal
