import React from 'react'

const StrainsModal = (props) =>{
  return (
    <div className="strainsModal" onClick={props.onClick}>
      <div>
       <p>{props.description}</p>
      </div>
    </div>
  )
}

export default StrainsModal;