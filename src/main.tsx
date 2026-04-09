// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";
// import { BrowserRouter } from "react-router-dom"; // ✅ import

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <BrowserRouter>   {/* ✅ REQUIRED */}
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/* Keep the Router here */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)