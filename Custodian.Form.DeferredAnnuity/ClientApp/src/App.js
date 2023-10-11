import React, { Component, useState } from "react";
import { Route, Routes } from "react-router-dom";
import PersonalInformation from "./components/personal-information/PersonalInformation";
import Onboarding from "./components/onboarding/Onboarding";
import Navbar from "./components/NavBar/Navbar";
import "./custom.css";

const App = () => {
  const [scroll, setScroll] = useState(false);
  const handleScroll = (scroll) => {
    if (scroll === 1) {
      setScroll(true);
    }
    alert(scroll);
  };
  return (
    <div
      className={
        scroll ? " w-screen h-screen overflow-x-hidden" : " w-screen h-screen md:overflow-hidden"
      }
    >
      <Navbar />
      <div className=" flex justify-start h-10  items-center  text-lg font-semibold bg-slate-100">
        <h1 className=" pl-10">Deferred Annuity</h1>
      </div>
      <Onboarding handleScroll={handleScroll} />
    </div>
  );
};

export default App;
