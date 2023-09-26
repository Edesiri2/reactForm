import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CapitalBuilder from "./Pages/CapitalBuilder";
import CapitalBuilderBenefitForm from "./Pages/CapitalBuilderBenefitForm";
import TermAssurance from "./Pages/TermAssurance";
import LifeTimeBenefit from "./Pages/LifeTimeBenefit";
import TermAssuranceBenefit from "./Pages/TermAssuranceBenefit";
import LifeTimeHarvest from "./Pages/LifeTimeHarvest";
import DeferredAnnuityBenefitForm from "./Pages/DeferredAnnuityBenefitForm";
import DeferredAnnuityForm from "./Pages/DeferredAnnuityForm";
import WholeLifeAssurance from "./Pages/WholeLifeAssurance";
import WholeLifeAssuranceBenefit from "./Pages/WholeLifeAssuranceBenefit";

function App() {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/" Component={DeferredAnnuityForm} />
        <Route path="/termassurance" Component={TermAssurance} />
        <Route path="/termassurancebenefit" Component={TermAssuranceBenefit} />
        <Route path="/wholelife" Component={WholeLifeAssurance} />
        <Route path="/wholelifebenefit" Component={WholeLifeAssuranceBenefit} />
        <Route path="/lifetimeharvest" Component={LifeTimeHarvest} />
        <Route path="/lifetimebenefit" Component={LifeTimeBenefit} />
        <Route path="/capitalbuilder" Component={CapitalBuilder} />
        <Route path="/capitalbenefit" Component={CapitalBuilderBenefitForm} /> 
        <Route path="/mor" Component={DeferredAnnuityBenefitForm } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
