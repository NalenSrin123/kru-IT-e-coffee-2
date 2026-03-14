

import Send_Reset_password from "./services/auth/Send_Reset_password";

import React from "react";
import Design_checkout_page from "./components/public/checkout/Design_checkout_page";
import Form_Confirm_OTP from "./services/auth/Form_Confirm_OTP";
import Footer from "./components/public/Footer/Footer";
// import Reset_password from "./services/auth/Reset_password";
import Registerform from "./services/auth/Registerform";
import ResetPassword from "./services/auth/ResetPassword";
import Design_Service_Page from "./components/public/service/Design_Service_Page";
import Navbar from "./components/public/home/Navbar";
import Hero_section from "./components/public/home/Hero_section";
import Home from "./components/public/home/Home_page";
import About from "./components/public/about/About";
import Desgin_use_addres_page from "./components/public/user_profile/Desgin_use_addres_page";
import Menu_page from "./components/public/menu/Menu_page";
import Sendotpcode from "./services/auth/Sendotpcode";
import Reset_Password_In_Email from "./services/auth/Reset_Password_In_Email";
import CoffeeLogin from "./context/auth/form_login";
import UserOrderPage from "./components/public/user_profile/uers_order_page/order_page";
import Apps from "./components/public/user_profile/user-wishlist/App";
import  Route   from "../src/components/public/routes/Route";
const App = () => {
  return (
    <div>
      <div>
      <Route />   {/* This handles Navbar + all page routing */}
    </div>

      <Navbar/>
      <Hero_section/>
      <Home/>
      <Design_checkout_page /> 
      <Form_Confirm_OTP />
      <Send_Reset_password/>
       <Registerform />
      <ResetPassword />
       <Footer /> 
       <Design_Service_Page/>
       
      <About/>
      <Desgin_use_addres_page/>
      <Menu_page/>
      <Sendotpcode/>
    <Reset_Password_In_Email/>
    <CoffeeLogin/>
    <UserOrderPage/>
    {/* <Apps/> */}
    </div>
  );
};
 
export default App;
