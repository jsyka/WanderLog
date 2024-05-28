import React, { useEffect, useState } from "react";
import HomePg from "./pages/home";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="container">
        <Navbar/>
        <Routes className="contents">
          <Route path="/home" element={<HomePg />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
