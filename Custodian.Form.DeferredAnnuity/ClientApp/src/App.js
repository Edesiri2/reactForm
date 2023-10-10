import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import PersonalInformation from "./components/personal-information/PersonalInformation";
import Onboarding from "./components/onboarding/Onboarding";
import Navbar from "./components/NavBar/Navbar";
import "./custom.css";

const App = () => {
  return (
    <div className=" w-screen h-screen md:overflow-hidden ">
      <Navbar/>
      <div className=" flex justify-start h-10  items-center  text-lg font-semibold bg-slate-100"><h1 className=" pl-10">Deferred Annuity</h1></div>
      <Onboarding />
    </div>
  );
};

export default App;
