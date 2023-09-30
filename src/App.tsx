import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as Pages from "./Pages/Route";


function App() {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/" Component={Pages.DeferredAnnuityForm} />
        <Route path="/termassurance" Component={Pages.TermAssurance} />
        <Route path="/termassurancebenefit" Component={Pages.TermAssuranceBenefit} />
        <Route path="/wholelife" Component={Pages.WholeLifeAssurance} />
        <Route path="/wholelifebenefit" Component={Pages.WholeLifeAssuranceBenefit} />
         <Route path="/ordinaryendowment" Component={Pages.OrdinaryEndowment} />
        <Route path="/ordinaryendowmentbenefit" Component={Pages.OrdinaryEndowmentBenefit} />
        <Route path="/lifetimeharvest" Component={Pages.LifeTimeHarvest} />
        <Route path="/lifetimebenefit" Component={Pages.LifeTimeBenefit} />
        <Route path="/investmentplusplan" Component={Pages.InvestmentPlusPlan} />
        <Route path="/investmentplusplanbenefit" Component={Pages.InvestmentPlusPlanBenefit} />
        <Route path="/educationendowment" Component={Pages.EducationEndowment} />
        <Route path="/educationendowmentbenefit" Component={Pages.EducationEndowmentBenefit} />
        <Route path="/safetyplus" Component={Pages.SafetyPlus} />
        <Route path="/safetyplusbenefit" Component={Pages.SafetyPlusBenefit} />
        <Route path="/dignityplan" Component={Pages.DignifyPlan} />
        <Route path="/dignityplanbenefit" Component={Pages.DignityPlanBenefit} /> 
        <Route path="/capitalbuilder" Component={Pages.CapitalBuilder} />
        <Route path="/capitalbenefit" Component={Pages.CapitalBuilderBenefitForm} /> 
        <Route path="/mor" Component={Pages.DeferredAnnuityBenefit} />
        <Route path="/summary" Component={Pages.SummaryPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
