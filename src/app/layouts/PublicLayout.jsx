import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/public/home/Navbar";
import Footer from "../../components/public/Footer/Footer";

const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* Public page content will render here */}
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;