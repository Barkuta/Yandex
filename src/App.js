import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Content from "./Components/Content/Content";
import Header from "./Components/Header/Header";
import Info from "./Components/Info/Info";
import Navbar from "./Components/Navbar/Navbar";
import Reviews from "./Components/Reviews/Reviews";
import Services from "./Components/Services/Sevices";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/services" element={<Services />} />
          <Route path="/info" element={<Info />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
