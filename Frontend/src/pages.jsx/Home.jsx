import React from 'react'
import '../pages.css/Home.css';
import  About from '../pages.jsx/About.jsx';
import Header from '../component.jsx/Header.jsx';
import Map from '../component.jsx/Map.jsx';
import Cards from './Cards.jsx';

export default function Home() {
  return (
    <>  
    
        <div className="home">
        <Header/>
       <div className='hotelImage'>
       <div className='logo'> </div>
        <div ><p className='introduction'>    welcome to hemen hotel </p></div>
        <div className='addition'>Experience comfort, luxury, and unparalleled service at the heart of the city.</div>
      
    </div>
    </div>  
     <Cards/>
    <About/>
    <Map/>
    </>
  
   
  )

}
