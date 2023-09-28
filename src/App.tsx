import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CapitalBuilder from "./Pages/CapitalBuilder";
import CapitalBuilderBenefitForm from "./Pages/CapitalBuilderBenefitForm";
import TermAssurance from "./Pages/TermAssurance";
import LifeTimeBenefit from "./Pages/LifeTimeBenefit";
import TermAssuranceBenefit from "./Pages/TermAssuranceBenefit";
import LifeTimeHarvest from "./Pages/LifeTimeHarvest";
import DeferredAnnuityForm from "./Pages/DeferredAnnuityForm";
import WholeLifeAssurance from "./Pages/WholeLifeAssurance";
import WholeLifeAssuranceBenefit from "./Pages/WholeLifeAssuranceBenefit";
import SafetyPlus from "./Pages/SafetyPlus";
import SafetyPlusBenefit from "./Pages/SafetyPlusBenefit";
import OrdinaryEndowment from "./Pages/OrdinaryEndowment";
import OrdinaryEndowmentBenefit from "./Pages/OrdinaryEndowmentBenefit";
import EducationEndowmentBenefit from "./Pages/EducationEndowmentBenefit";
import EducationEndowment from "./Pages/EducationEndowment";
import InvestmentPlusPlanBenefit from "./Pages/InvestmentPlusPlanBenefit";
import InvestmentPlusPlan from "./Pages/InvestmentPlusPlan";
import DeferredAnnuityBenefit from "./Pages/DeferredAnnuityBenefit";
import DignifyPlan from "./Pages/DignityPlan";
import DignityPlanBenefit from "./Pages/DignityPlanBenefit";
import SummaryPage from "./Pages/SummaryPage";

function App() {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/" Component={DeferredAnnuityForm} />
        <Route path="/termassurance" Component={TermAssurance} />
        <Route path="/termassurancebenefit" Component={TermAssuranceBenefit} />
        <Route path="/wholelife" Component={WholeLifeAssurance} />
        <Route path="/wholelifebenefit" Component={WholeLifeAssuranceBenefit} />
         <Route path="/ordinaryendowment" Component={OrdinaryEndowment} />
        <Route path="/ordinaryendowmentbenefit" Component={OrdinaryEndowmentBenefit} />
        <Route path="/lifetimeharvest" Component={LifeTimeHarvest} />
        <Route path="/lifetimebenefit" Component={LifeTimeBenefit} />
        <Route path="/investmentplusplan" Component={InvestmentPlusPlan} />
        <Route path="/investmentplusplanbenefit" Component={InvestmentPlusPlanBenefit} />
        <Route path="/educationendowment" Component={EducationEndowment} />
        <Route path="/educationendowmentbenefit" Component={EducationEndowmentBenefit} />
        <Route path="/safetyplus" Component={SafetyPlus} />
        <Route path="/safetyplusbenefit" Component={SafetyPlusBenefit} />
        <Route path="/dignityplan" Component={DignifyPlan} />
        <Route path="/dignityplanbenefit" Component={DignityPlanBenefit} /> 
        <Route path="/capitalbuilder" Component={CapitalBuilder} />
        <Route path="/capitalbenefit" Component={CapitalBuilderBenefitForm} /> 
        <Route path="/mor" Component={DeferredAnnuityBenefit} />
        <Route path="/summary" Component={SummaryPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
