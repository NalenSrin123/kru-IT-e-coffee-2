
import React from "react";
import Registerform from "./services/auth/Registerform";
import ResetPassword from './services/auth/ResetPassword';


const App = () => {
  return (
    <div>
      <Registerform />

      <ResetPassword />
    </div>
  )
}

export default App;
