import React from 'react'
import '../pages.css/Home.css';
import  About from '../pages.jsx/About.jsx';
import Header from '../component.jsx/Header.jsx';
import Map from '../component.jsx/Map.jsx';

export default function Home() {
  return (
    <>  
    
        <div className="home">
        <Header/>
       <div className='hotelImage'>
       <div className='logo'> </div>
        <div ><p className='introduction'>    welcome to hemen hotel </p></div>
        <div className='addition'>restorant with greate custemer service</div>
      
    </div>
    </div>  

    <About/>
    <Map/>
    </>
  
   
  )

}
