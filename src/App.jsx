import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages.jsx/Home';
import About from './pages.jsx/About';
import Menu from './pages.jsx/Menu';
import Contact from './pages.jsx/Contact';
import Header from './component.jsx/Header';

const App = () => {
  return (
    <div>
      <Header/>          
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
