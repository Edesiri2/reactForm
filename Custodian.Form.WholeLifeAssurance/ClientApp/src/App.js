import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import "./custom.css";
import PersonalInformation from "./components/personal-information/PersonalInformation";
import Onboarding from "./components/onboarding/Onboarding";

const App = () => {
  return (
    <div>
      <Onboarding />
    </div>
  );
};

export default App;
