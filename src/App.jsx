import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Pages/Services";
import FAQ from "./Components/Pages/FAQ";
import Contact from "./Components/Pages/Contact";
import BottomBar from "./Components/BottomBar/BottomBar";
import Shop from "./Components/Pages/Shop";
import Lodding from "./Components/Pages/Lodding";

function App() {
  return (
    <>
      <BrowserRouter>
      <Lodding/>
      <Navbar/>
      <BottomBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/faq" element={<FAQ/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/shop" element={<Shop/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
