import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Header/Home";
import Navbar from "./Components/Header/Navbar";
import Error from "./Components/Header/Error";
import Contact from "./Components/Header/Contact";
import Services from "./Components/Header/Services";
import About from "./Components/Header/About";
import Foot from "./Components/Footer/Foot";
function App() {
  const [partochild, setpartochild] = useState("");
  function getinputValue(val) {
    console.log(val);
    setpartochild(val);
  }

  return (
    <div>
      <header>
        <BrowserRouter>
          <Navbar getfun={getinputValue} />
          <Routes>
            <Route path="/" element={<Home part={partochild} />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/Services" element={<Services />}></Route>
            <Route path="/*" element={<Error />}></Route>
            <Route path="/contact/" element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>
      </header>

      <Foot />
    </div>
  );
}

export default App;
