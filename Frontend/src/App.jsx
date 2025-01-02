import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages.jsx/Home';
import About from './pages.jsx/About';
import Menu from './pages.jsx/Menu';
import Contact from './pages.jsx/Contact';
import Header from './component.jsx/Header';

import Cards from './pages.jsx/Cards';  
import Rooms from './pages.jsx/services/Rooms';
import Meeting from './pages.jsx/services/Meeting';
import Footer from './component.jsx/Footer'; 
import Map from './component.jsx/Map';

const App = () => {
  return (
    <div>
      <Header/>          
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cards" element={<Cards />} />
        <Route path="/services/rooms" element={<Rooms />} /> 
        <Route path="/services/Meeting" element={<Meeting />} /> 
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Map" element={<Map/>} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
