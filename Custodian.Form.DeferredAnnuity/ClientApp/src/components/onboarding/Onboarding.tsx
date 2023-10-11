import { useState, useEffect, useRef } from "react";
import { steps } from "./Steps";

import Benefit from "../benefit/Benefit";
import { benefitDataValidation } from "../../validation/validation";
import Summary from "../summary/Summary";
import personalInformationValidation from "../../validation/personalData.validation";
import PersonalInformation from "../personal-information/PersonalInformation";
import { useFormik } from "formik";

const Onboarding = ({ handleScroll }: any) => {
  const [OnboardingSteps, setOnboardingSteps] = useState<any[]>(steps);
  const [isActive, setIsActive] = useState(0);
  const [isModal, setIsModal] = useState(false);
  const [modalData, setModalData] = useState<string[]>([]);
  const [personalInformation, setPersonalInformation] = useState<any>({
    title: "",
    firstName: "",
    middleName: "",
    surname: "",
    dob: "",
    gender: "",
    email: "",
    phoneNumber: "",
    insuranceStartDate: "",
    IdType: "",
    IdNumber: "",
    file: "",
  });
  const [benefitData, setBenefitData] = useState<any>({
    amountToSave: "",
    paymentFrequency: "",
    policyTerm: "",
    targetAmount: "",
    lifeSumAssured: "",
  });
  const [error, setError] = useState({});

  const personalDataRef = useRef<any>();

  const handleIsActive = (active: any) => {
    setIsActive(active);
  };

  const handlePersonalData = (data: any) => {
    setPersonalInformation(data);
    console.log(data);
  };
  const handleBenefitData = (data: any) => {
    setBenefitData(data);
    console.log(data);
  };
  const handleModal = () => {
    setIsModal(!isModal);
  };

  const handleNext = async (values: any) => {
    handleScroll(isActive);
    if (isActive === 0) {
      personalFormik.handleSubmit();
    }

    if (isActive === 1) {
      benefitFormik.handleSubmit();
    }
  };

  const personalFormik = useFormik({
    initialValues: personalInformation && personalInformation,
    validationSchema: personalInformationValidation,
    onSubmit: (values) => {
      setOnboardingSteps((prevArray) => {
        const updated = [...prevArray];
        updated[isActive].isComplete = true;
        return updated;
      });
      if (steps.length - 1 > isActive) {
        setIsActive(isActive + 1);
      }
    },
  });

  const benefitFormik = useFormik({
    initialValues: benefitData && benefitData,
    validationSchema: benefitDataValidation,
    onSubmit: (values) => {
      setOnboardingSteps((prevArray) => {
        const updated = [...prevArray];
        updated[isActive].isComplete = true;
        return updated;
      });
      if (steps.length - 1 > isActive) {
        setIsActive(isActive + 1);
      }
    },
  });

  const handlePrev = (active: any) => {
    if (active > 0) {
      setIsActive(active - 1);
    }
  };

  const handleData = (e: any) => {
    setModalData([...modalData, e.target.value]);
    console.log(e.target.value);
  };

  const handleFinal = (active: any) => {
    alert("final step");
  };

  return (
    <div className="w-full h-full px-[3rem] md:px-[7rem] py-[2rem] flex flex-col">
      <div className="bg-[#fff] w-full h-[5rem] mb-[2rem]">
        <div className="flex flex-row items-center h-full">
          {OnboardingSteps.map((step: any, index: any) => (
            <div
              className={`group/item flex flex-row flex-1 items-center px-[10px] cursor-pointer hover:bg-[#444]/5 h-full ${
                isActive === index ? "bg-[#444]/10" : null
              }`}
            >
              <div className={"flex flex-row items-center mr-[10px] px-3"}>
                {step.isComplete ? (
                  <div
                    className={`h-[30px] w-[30px]  rounded-full items-center justify-center flex mr-3 ${
                      isActive === index
                        ? "bg-[#4BB543] text-[#fff]"
                        : "bg-[#4BB543] text-[#fff]"
                    }`}
                  >
                    <i className="fa-solid fa-check"></i>
                  </div>
                ) : (
                  <div
                    className={`h-[30px] w-[30px]  rounded-full items-center justify-center flex mr-3 ${
                      isActive === index
                        ? "bg-[#A73439] text-[#fff]"
                        : "bg-[#444]/5"
                    }`}
                  >
                    {index + 1}
                  </div>
                )}
                <div
                  className={`w-fit ${
                    isActive === index ? "font-medium" : null
                  }`}
                >
                  {step?.title}
                </div>
              </div>
              <div className="flex-1 h-[2px] bg-[#444]/25"></div>
            </div>
          ))}
        </div>
      </div>
      <div
        className={
          isActive === 2
            ? "bg-[#fff] h-full w-[100vw - 20rem]"
            : ` bg-[#fff] h-full w-[100vw - 20rem] md:overflow-hidden`
        }
      >
        <div className="md:h-full w-[100vw - 15rem] transition-all duration-1000">
          {isActive === 0 ? (
            <div className={`h-full w-full`}>
              <div className="">
                <PersonalInformation
                  handlePersonalData={handlePersonalData}
                  oldData={personalInformation}
                  error={error}
                  formik={personalFormik}
                />
              </div>
            </div>
          ) : null}
          {isActive === 1 ? (
            <div className={`h-full w-full px-4`}>
              <div>
                <Benefit
                  handleBenefitData={handleBenefitData}
                  oldData={benefitData}
                  formik={benefitFormik}
                />
              </div>
            </div>
          ) : null}
          {isActive === 2 ? (
            <div className={`h-full w-full px-2 mb-5`}>
              <Summary
                personalData={personalFormik.values}
                benefitData={benefitFormik.values}
              />
            </div>
          ) : null}
        </div>
        <div
          className={
            isActive < steps.length - 1
              ? ""
              : `absolute md:bottom-0 right-[50px] p-2`
          }
        >
          {isActive > 0 ? (
            <button
              className="bg-[#444]/25 px-[2rem] py-[.5rem] rounded-lg  hover:bg-[#444]/30 mr-5"
              onClick={() => handlePrev(isActive)}
            >
              Back
            </button>
          ) : null}
          {isActive < steps.length - 1 ? (
            <button
              type="submit"
              className="bg-[#A73439] px-[2rem] py-[.5rem] rounded-lg text-[#fff] hover:bg-[#A73439]/90"
              onClick={handleNext}
            >
              Next
            </button>
          ) : (
            <button
              className="bg-[#A73439] px-[2rem] py-[.5rem] rounded-lg text-[#fff] hover:bg-[#A73439]/90"
              onClick={() => handleFinal(isActive)}
            >
              Finish
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
