import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import "./custom.css";
import PersonalInformation from "./components/personal-information/PersonalInformation";
import Onboarding from "./components/onboarding/Onboarding";
import Navbar from "./components/navbar/navbar";

const App = () => {
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Navbar />
      <div className="px-[7rem] py-3 bg-[#404040]/10 text-[22px] uppercase font-[700]">Whole Life Assurance</div>
      <Onboarding />
    </div>
  );
};

export default App;
