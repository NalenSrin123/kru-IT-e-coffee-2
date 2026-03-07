
// import { Routes, Route } from "react-router-dom";
import Navbar from "./components/public/home/Navbar";
import Hero_section from "./components/public/home/Hero_section";
import React from 'react'
import Design_checkout_page from './components/public/checkout/Design_checkout_page'
import Form_Confirm_OTP from './services/auth/Form_Confirm_OTP'
import Footer from "./components/public/Footer/Footer";
import Reset_password from './services/auth/Reset_password'
// import React from "react";
import Registerform from "./services/auth/Registerform";
import ResetPassword from './services/auth/ResetPassword';
const App = () => {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <div> 
        <Hero_section />
      </div>
          <div className=''>

      <Design_checkout_page/>
      <Form_Confirm_OTP />

      <Registerform />
<Reset_password/>
      <ResetPassword />
    <Footer />
    </div>
    </>
  );
};


export default App;
