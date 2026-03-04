<<<<<<< Updated upstream
import React from 'react'

const App = () => {
  return (
    <div className='text-red-500 text-2xl'>App</div>
  )
}
=======
import React from "react";
import Design_checkout_page from "./components/public/checkout/Design_checkout_page";
import Form_Confirm_OTP from "./services/auth/Form_Confirm_OTP";
import Footer from "./components/public/Footer/Footer";
import Reset_password from "./services/auth/Reset_password";
import Registerform from "./services/auth/Registerform";
import ResetPassword from "./services/auth/ResetPassword";
import Design_Service_Page from "./components/public/service/Design_Service_Page";
const App = () => {
  return (
    <div>
      {/* <Design_checkout_page /> */}
      {/* <Form_Confirm_OTP /> */}
      {/* <Registerform />
      <Reset_password />
      <ResetPassword />
      <Footer /> */}
      <Design_Service_Page/>
    </div>
  );
};
>>>>>>> Stashed changes

export default App