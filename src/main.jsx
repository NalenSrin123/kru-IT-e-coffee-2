<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./context/auth/form_login.jsx";
=======
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
>>>>>>> 82ea95c498bdcc596a083a4a20512296ca107767

createRoot(document.getElementById("root")).render(
  <StrictMode>
<<<<<<< HEAD
    <App />
  </StrictMode>
)
=======
      <App />
  </StrictMode>,
);
>>>>>>> 82ea95c498bdcc596a083a4a20512296ca107767
