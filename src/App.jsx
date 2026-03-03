// import { Routes, Route } from "react-router-dom";
import Navbar from "./components/public/home/Navbar";
import Hero_section from "./components/public/home/Hero_section";

const App = () => {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <div> 
        <Hero_section />
      </div>
    </>
  );
};

export default App;