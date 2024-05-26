import React, { useEffect, useState } from "react";
import HomePg from "./pages/home";
import Navbar from "./components/Navbar/Navbar";
import './App.css'

const App = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <HomePg />
      </div>
    </>
  );
};

export default App;
