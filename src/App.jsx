import React from 'react'
import Design_checkout_page from './components/public/checkout/Design_checkout_page'
import Form_Confirm_OTP from './services/auth/Form_Confirm_OTP'

import Footer from "./components/public/Footer/Footer";
import Reset_password from './services/auth/Reset_password'
import React from "react";
import Registerform from "./services/auth/Registerform";
import ResetPassword from './services/auth/ResetPassword';
const App = () => {
  return (
    <div className=''>

      <Design_checkout_page/>
    </div>
    
    <div className='text-red-500 text-2xl'>
      <Form_Confirm_OTP />
    <div>
      <Registerform />
<Reset_password/>
      <ResetPassword />
    <Footer />
    </div>
  )
}
export default App;
