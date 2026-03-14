import React from "react";

import Navbar from "./components/public/home/Navbar";
import Hero_section from "./components/public/home/Hero_section";
import Design_checkout_page from "./components/public/checkout/Design_checkout_page";

import Footer from "./components/public/Footer/Footer";

import Form_Confirm_OTP from "./services/auth/Form_Confirm_OTP";
import Reset_password from "./services/auth/Reset_password";
import Registerform from "./services/auth/Registerform";
import ResetPassword from "./services/auth/ResetPassword";

const App = () => {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <Hero_section />

      {/* Test Pages */}
      <Design_checkout_page />
      <Form_Confirm_OTP />

      {/* Auth Pages */}
      {/* 
      <Registerform />
      <Reset_password />
      <ResetPassword />
      */}

      <Footer />
    </>
  );
};

export default App;