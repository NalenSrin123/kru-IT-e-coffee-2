import React from "react";
import { Routes, Route } from "react-router-dom";

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
import ResetPassword from "./services/auth/ResetPassword";
import SendResetPassword from "./services/auth/Send_Reset_password";
import ResetPasswordInEmail from "./services/auth/Reset_Password_In_Email";
import SendOtpCode from "./services/auth/Sendotpcode";
import ConfirmOtpCode from "./services/auth/Form_Confirm_OTP";
import Contact_Page from "./components/public/contact/Contact_Page";

const App = () => {
  return (
    <Routes>
      {/* Public Pages with Navbar/Footer */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact_Page />} />
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
  );
};

export default App
