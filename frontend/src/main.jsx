import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos";

AOS.init({
  duration: 1000, // Durasi animasi
  easing: "ease-in-out", // Easing animasi
  once: true, // Apakah animasi hanya terjadi sekali
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
