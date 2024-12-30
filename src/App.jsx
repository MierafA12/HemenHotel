import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages.jsx/Home';
import About from './pages.jsx/About';
import Menu from './pages.jsx/Menu';
import Contact from './pages.jsx/Contact';
import Header from './component.jsx/Header';
import Services from './pages.jsx/Services';
import Rooms from './pages.jsx/Rooms';
import Footer from './component.jsx/Footer'; 
import Map from './component.jsx/Map';

const App = () => {
  return (
    <div>
      <Header/>          
       <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/services" element={<Services />} />  */}
        <Route path="/services/rooms" element={<Rooms />} /> 
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
