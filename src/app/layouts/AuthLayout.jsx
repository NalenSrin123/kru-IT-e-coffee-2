import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <Outlet /> {/* Auth page content will render here */}
    </div>
  );
};

export default AuthLayout;