

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
import User_sitting from "./components/public/user_sitting/User_sitting";

const App = () => {
  return (
    <div>

       <Navbar/>
     
      <Desgin_use_addres_page/>

    </div>
  );
};

export default App;
