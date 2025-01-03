import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../component.css/Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="log">HEMEN</div>
      <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className={`links ${isMenuOpen ? 'open' : ''}`}>
        <div className="one-links">
          <Link className="link" to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
        </div>
        <div className="one-links dropdown">
          <Link className="link" id="serv" to="/services" onClick={() => setIsMenuOpen(false)}>
            Services
          </Link>
          <div className="dropdown-menu">
            <Link className="dropdown-link" to="/services/rooms" onClick={() => setIsMenuOpen(false)}>
              Rooms
            </Link>
            <Link className="dropdown-link" to="/services/meeting" onClick={() => setIsMenuOpen(false)}>
              Meeting
            </Link>
          </div>
        </div>
        <div className="one-links">
          <Link className="link" to="/menu" onClick={() => setIsMenuOpen(false)}>
            Menu
          </Link>
        </div>
        <div className="one-links">
          <Link className="link" to="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
