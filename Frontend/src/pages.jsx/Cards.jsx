import React from 'react';
import { FaLocationArrow, FaLocationDot, FaWifi,FaPeopleGroup,FaBed,FaLock} from 'react-icons/fa6';
import '../pages.css/Cards.css'; 

export default function Cards() {
  return (
    <div className="allcards">
      <div className="card">
        <FaLocationDot className="card-icon" />
        <h3>Prime Location</h3>
        <p>Our hotel is situated at the heart of the city, with easy access to major attractions, dining, and shopping.</p>
      </div>
      <div className="card">
        <FaWifi className="card-icon" />
        <h3>Complimentary Wi-Fi</h3>
        <p>Stay connected with our fast and free internet throughout the hotel. Ideal for both work and leisure.</p>
      </div>
      <div className="card">
        <FaLocationArrow className="card-icon" />
        <h3>Nearby Attractions</h3>
        <p>Explore popular landmarks and attractions, all within walking distance of our hotel.</p>
      </div>
      <div className="card">
        <FaBed className="card-icon" />
        <h3>Comfortable Rooms</h3>
        <p>Relax in our spacious, well-equipped rooms designed for your utmost comfort and convenience.</p>
      </div>
      <div className="card">
        <FaPeopleGroup className="card-icon" />
        <h3>Meeting Rooms</h3>
        <p>Host your next business meeting or event in our fully equipped, professional meeting rooms.</p>
      </div>
      <div className="card">
        <FaLock className="card-icon" />
        <h3>Top-Notch Security</h3>
        <p>Your safety is our priority. Our hotel is equipped with modern security systems for your peace of mind.</p>
      </div>
    </div>
  );
}
