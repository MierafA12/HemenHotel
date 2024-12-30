import React from 'react';
import { Link } from 'react-router-dom';
import '../component.css/Footer.css'; // You can style it with your own CSS
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">privacypolicy</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <ul>
            <li>Phone: <a href="tel:+1234567890">+123 456 7890</a></li>
            <li>Email: <a href="mailto:HeaamenHotel@email.com">HeamenHotel@email.com</a></li>
            <li>Address: 03, Ethioipa, Debrebirhan</li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
         
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaTelegram />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagram />
          </a>
         
        </div>
      </div>
        <hr></hr>
      <div className="footer-bottom">
        <p>&copy; 2024 Hemen. All Rights Reserved.</p>
      </div>
    </div>
  );
}
