import { Route, Routes } from 'react-router-dom'
import Registerform from '../auth/Registerform'
import ResetPassword from '../auth/ResetPassword'
import CoffeeLogin from '../../context/auth/form_login'
import Send_Reset_password from '../auth/Send_Reset_password'
import Home from '../../components/public/home/Home_page'
import Reset_Password_In_Email from '../auth/Reset_Password_In_Email'
import Sendotpcode from '../auth/Sendotpcode'
import Form_Confirm_OTP from '../auth/Form_Confirm_OTP'

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/register' element={<Registerform />} />
      <Route path='/login' element={<CoffeeLogin />} />
      <Route path='/send-reset-password' element={<Send_Reset_password />} />
      <Route path='/reset-password' element={<ResetPassword />} />
      <Route path='/send-reset-password-in-email' element={<Reset_Password_In_Email />} />
      <Route path='/send_otp_code' element={<Sendotpcode/>} />
      <Route path='/confirm_otp_code' element={<Form_Confirm_OTP/>} />
    </Routes>
  )
}
