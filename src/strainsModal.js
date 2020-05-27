import React from 'react';

const StrainsModal = (props) =>{
  return (
    <div className="strainsModal__overlay">
      <div className="strainsModal__container">
        <div className="strainsModal__actions" onClick={props.onClick}>
          <i className="fas fa-times"></i>
        </div>
        <h2 className="strainsModal__heading">{props.strain}</h2>
        {!props.description?
          <p className="strainsModal__information">
            Sorry! No information found on this strain.
          </p>:
          <p className="strainsModal__information">
            {props.description}
          </p>
         }
      </div>
    </div>
  )
}

export default StrainsModal;