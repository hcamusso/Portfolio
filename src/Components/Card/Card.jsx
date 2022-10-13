import React from 'react';
import './Card.css';

const Card = ({emoji, heading , detail}) => {
  return (
    <div className="card">
      <img src={emoji} alt="emoji" />
      <span className='cardspan1'>{heading}</span>
      <span className='cardspan2'>{detail}</span>
      <button className="c-button">LEARN MORE</button>
    </div>
  );
}

export default Card