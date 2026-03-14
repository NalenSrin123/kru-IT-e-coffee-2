import React from "react";
<<<<<<< HEAD

import Navbar from "./components/public/home/Navbar";
import Hero_section from "./components/public/home/Hero_section";
import Design_checkout_page from "./components/public/checkout/Design_checkout_page";

import Footer from "./components/public/Footer/Footer";

import Form_Confirm_OTP from "./services/auth/Form_Confirm_OTP";
import Reset_password from "./services/auth/Reset_password";
import Registerform from "./services/auth/Registerform";
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layouts
import PublicLayout from "./app/layouts/PublicLayout";
import AuthLayout from "./app/layouts/AuthLayout";

// Public Pages
import Home from "./components/public/home/Home_page";
import MenuPage from "./components/public/menu/Menu_page";
import ServicePage from "./components/public/service/Design_Service_Page";
import About from "./components/public/about/About";

// Auth Pages
import Login from "./context/auth/form_login";
import Register from "./services/auth/Registerform";
>>>>>>> a8b59b019b668694f02e65b3ca49cc106f249cd4
import ResetPassword from "./services/auth/ResetPassword";
import SendResetPassword from "./services/auth/Send_Reset_password";
import ResetPasswordInEmail from "./services/auth/Reset_Password_In_Email";
import SendOtpCode from "./services/auth/Sendotpcode";
import ConfirmOtpCode from "./services/auth/Form_Confirm_OTP";

const App = () => {
  return (
<<<<<<< HEAD
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
=======
    // <Router>
      <Routes>
        {/* Public Pages with Navbar/Footer */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/about" element={<About />} />
        </Route>

        {/* Auth Pages without Navbar/Footer */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/send-reset-password" element={<SendResetPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/send-reset-password-in-email" element={<ResetPasswordInEmail />} />
          <Route path="/send_otp_code" element={<SendOtpCode />} />
          <Route path="/confirm_otp_code" element={<ConfirmOtpCode />} />
        </Route>
      </Routes>
    // </Router>
>>>>>>> a8b59b019b668694f02e65b3ca49cc106f249cd4
  );
};

export default App;