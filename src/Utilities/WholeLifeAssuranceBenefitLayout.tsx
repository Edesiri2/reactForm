import { FC } from "react";
import FormInput from "./FormInput";
import FormInputSelector from "./FormInputSelector";
import { Link } from "react-router-dom";
interface WholeLifeAssuranceBenefitLayoutProps{
    title : string
}

const WholeLifeAssuranceBenefitLayout: FC<WholeLifeAssuranceBenefitLayoutProps> = ({title}) => {
  return (
    <div className="h-[fit] w-[full] px-6 py-12">
      <div className="flex flex-col w-[100%] h-[fit] md:h-[500px]  mt-2 px-16 bg-white rounded-lg shadow-lg ">
        <section className="bg-white mb-8 py-2 px-4">
          <div className="">
            <div className="flex justify-between">
              <h1 className="lg:text-2xl md:text-lg md:font-semibold sm:text-sm sm:font-normal sm:flex-wrap">
                {title}
              </h1>
            </div>
          </div>
        </section>
        <h1 className=" text-[#900000] mb-2 font-bold">Benefits</h1>
        <div className=" p-2 py-2 px-2 md:flex md:gap-6 md:px-4">
          <FormInput
            onClick={() => {}}
            placeholder={"Amount to Save"}
            type={"number"}
            required={true}
            onBlur={() => {}}
            onChange={() => {}}
            name={""}
            label={""}
            pattern={""}
            errorMessage={""}
          />
          <FormInputSelector
            placeholder={"Payment Frequency"}
            defalt={"Payment Frequency"}
            firstOption={"Annualy"}
            secondOption={"Single Premium"} disabled={false}          />
          <FormInputSelector
            placeholder={"Policy Term"}
            defalt={"Policy Term"}
            firstOption={"45"}
            secondOption={"50"} disabled={false}          />
        </div>
        <div className=" p-2 py-2 px-2 md:flex md:gap-6 md:px-4">
          <FormInput
            onClick={() => {}}
            placeholder={"Target Amount"}
            type={"number"}
            required={true}
            onBlur={() => {}}
            onChange={() => {}}
            name={""}
            label={""}
            pattern={""}
            errorMessage={""}
          />

          <FormInput
            onClick={() => {}}
            placeholder={"Life Sum Assured"}
            type={"number"}
            required={true}
            onBlur={() => {}}
            onChange={() => {}}
            name={""}
            label={""}
            pattern={""}
            errorMessage={""}
          />
        </div>
        <div className=" p-2 py-2 px-2 md:flex md:gap-6 md:px-4 justify-center mt-6">
          <button className=" rounded-lg bg-gray-400 w-80 lg:w-80 md:w-40 py-2 px-2 text-black border  border-gray-400 hover:border-red-600">Calculate</button></div>
          <div className="flex gap-[4rem] justify-end w-[90%] bottom-0 mt-8">
          <Link to="/wholelife">
            <button className="bg-[#900000] w-20 p-1 mt-8 px-4 text-white">
              Prev
            </button>
          </Link>
          <Link to="/summary">
            <button className="bg-[#900000] w-20 p-1 mt-8 px-4 text-white">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WholeLifeAssuranceBenefitLayout;
