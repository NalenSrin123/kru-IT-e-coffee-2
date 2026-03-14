
<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
=======
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
>>>>>>> a8b59b019b668694f02e65b3ca49cc106f249cd4

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <App />
    </BrowserRouter>
)
