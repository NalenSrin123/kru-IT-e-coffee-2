import React from "react";
import Design_checkout_page from "./components/public/checkout/Design_checkout_page";
import Form_Confirm_OTP from "./services/auth/Form_Confirm_OTP";
import Footer from "./components/public/Footer/Footer";
import Registerform from "./services/auth/Registerform";
import ResetPassword from "./services/auth/ResetPassword";
import Send_Reset_password from "./services/auth/Send_Reset_password";

const App = () => {
  return (
    <div>
      {/* <Design_checkout_page /> 
      <Form_Confirm_OTP /> */}
      <Send_Reset_password/>
      {/* <Registerform />
      <ResetPassword /> */}
      {/* <Footer /> 
      <About/> */}
    </div>
  );
};

export default App;