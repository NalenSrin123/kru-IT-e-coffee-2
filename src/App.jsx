import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layouts
import PublicLayout from "./app/layouts/PublicLayout";
import AuthLayout from "./app/layouts/AuthLayout";



// Public Pages
import Home from "./components/public/home/Home_page";
import MenuPage from "./components/public/menu/Menu_page";
import ServicePage from "./components/public/service/Design_Service_Page";
import About from "./components/public/about/About";
import Index from "./components/dashboard/User/Iindex";
// Auth Pages
import Login from "./context/auth/form_login";
import Register from "./services/auth/Registerform";
import ResetPassword from "./services/auth/ResetPassword";
import SendResetPassword from "./services/auth/Send_Reset_password";
import ResetPasswordInEmail from "./services/auth/Reset_Password_In_Email";
import SendOtpCode from "./services/auth/Sendotpcode";
import ConfirmOtpCode from "./services/auth/Form_Confirm_OTP";
import CoffeeDashboardLayout from "./dashboard/pages/SSidebar_header";
import Checkout from "./components/public/checkout/Design_cart_page";
import ContactPage from "./components/public/contact/Contact_Page";
import AddUserForm from "./components/dashboard/Coffee/AddUserForm";
import DesignPageUserList from "./components/dashboard/Coffee/DesignPageUserList";
import CustomerList from "./components/dashboard/customer";
import UpdateCustomer from "./components/dashboard/customer/UpdateCustomer";


const App = () => {
  return (
    <Routes>   
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/send-reset-password" element={<SendResetPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/send-reset-password-in-email" element={<ResetPasswordInEmail />} />
          <Route path="/send_otp_code" element={<SendOtpCode />} />
          <Route path="/dashboard" element={<CoffeeDashboardLayout />}>
          <Route index element={<DesignPageUserList />} />
          <Route path="add-user" element={<AddUserForm />} />
        </Route>
      </Route>
          <Route path="/confirm_otp_code" element={<ConfirmOtpCode />} />
     
        <Route path="/dashboard" element={<CoffeeDashboardLayout />}>
               <Route index element={<h2>Dashboard Home</h2>} />
               <Route path="users" element={<DesignPageUserList />} />
        </Route>
        <Route path="/delete" element={<Index />} /> 
      </Routes>
   
     
  
   );
};

export default App;
