import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../home/Navbar';
import Menu_page from '../menu/Menu_page';
import Service from '../service/Design_Service_Page';
import Home from '../home/Home_page';
import About from '../about/About'
// import Contact from '../contact'
import Hero_section from '../home/Hero_section';
function route() {
  return (
   <div>
      <Navbar /> 
      <Routes>
        <Route path="/" element={
      <>
        <Hero_section />
        <Home/>     
      </>
    } />
        <Route path="/menu"    element={<Menu_page />} />
        <Route path="/service"    element={<Service />} />
        <Route path="/about"    element={<About />} />
        <Route path="/contact"/>
      </Routes>
   </div>
  
  )
}

export default route