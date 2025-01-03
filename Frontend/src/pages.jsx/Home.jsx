import React from 'react';
import {useState,useEffect} from 'react';
import '../pages.css/Home.css';
import  About from '../pages.jsx/About.jsx';
import Header from '../component.jsx/Header.jsx';
import Map from '../component.jsx/Map.jsx';
import Cards from './Cards.jsx';

export default function Home() {
  const [backgroundImage, setBackgroundImage] = useState('hotel.png'); // Initial background image

  // Array of images to cycle through
  const images = [
    'hotel.png',
    'piza.png',
    'table.png',
   
  ];

  useEffect(() => {
    // Function to change background image
    const changeBackgroundImage = () => {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      setBackgroundImage(randomImage);
    };

    // Set interval to change image every 5 minutes (300,000 milliseconds)
    const interval = setInterval(changeBackgroundImage, 30000); 

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run only once on mount
  return (
    <>  
    
        <div className="home">
        <Header/>
       <div className='hotelImage'>
       <div className='logo'> </div>
        <div ><p className='introduction'>    welcome to hemen hotel </p></div>
        <div className='addition'>Experience comfort, luxury service at the heart of the city.</div>
      
    </div>
    </div>  
    <Cards/>
    <About/>
    <Map/>
    </>
  
   
  )

}
