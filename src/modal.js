import React, { Component } from 'react'

const Modal = (props) => {
  return (
    <div className="modal__wrapper">
      <div className="modal__container">
        <p className="modal__prompt">Please confirm age 19 or older.</p>
        <button className="modal__button" onClick={props.onClick}>
          Confirm
        </button>
      </div>
    </div>
  )
}



export default Modal;
