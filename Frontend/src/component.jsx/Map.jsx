import React from 'react';
import '../component.css/Map.css'; // You can style this map container

const Map = () => {
  return (
    <div className="map-container">
        <h2>Our Location</h2>
      
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.1543615709716!2d39.5301461911287!3d9.669070678842804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1649bd001ab1fa69%3A0xb910ff98e4210c66!2sHemen%20hotel!5e0!3m2!1sen!2set!4v1735587212139!5m2!1sen!2set"
        width="600"
        height="450"
        style={{ border: '0' }}  
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Map;
