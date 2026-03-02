
import React from "react";
import Registerform from "./services/auth/Registerform";
import ResetPassword from './services/auth/ResetPassword';


function App() {
  return (
    <div>
      <Footer></Footer>
      <Registerform />

      <ResetPassword />
    </div>
  )
}

export default App
