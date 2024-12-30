import React from 'react';

const Room = ({ roomType, description, price, image }) => {
  return (
    <div className="room-card">
      <img src={image} alt={roomType} className="room-image" />
      <div className="room-details">
        <h3 className="room-title">{roomType}</h3>
        <p className="room-description">{description}</p>
        <p className="room-price">${price} per night</p>
        <button className="book-button">Book Now</button>
      </div>
    </div>
  );
};

export default Room;
