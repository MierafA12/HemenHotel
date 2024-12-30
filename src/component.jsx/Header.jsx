import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../component.css/Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change state when user scrolls more than 50px
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className='log'>HEMEN</div>
      <div className='links'>
        <div className='one-links'>
          <Link className='link' to='/'>Home</Link>
        </div>
        <div className='one-links'>
          <Link className='link' to='/about'>About</Link>
        </div>
        <div className='one-links'>
          <Link className='link' to='/menu'>Menu</Link>
        </div>
        <div className='one-links'>
          <Link className='link' to='/contact'>Contact</Link>
        </div>
      </div>
    </div>
  );
}
