import { FC } from "react";
import FormInput from "./FormInput";
import FormInputSelector from "./FormInputSelector";
import { Link } from "react-router-dom";
interface SafetyPlusBenefitLayoutProps{
    title : string
}

const SafetyPlusBenefitLayout: FC<SafetyPlusBenefitLayoutProps> = ({title}) => {
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

          <FormInputSelector
            placeholder={"Retirement Age"}
            defalt={"Retirement Age"}
            firstOption={"45"}
            secondOption={"50"} disabled={undefined}          />
          <FormInputSelector
            placeholder={"Payment Frequency"}
            defalt={"Payment Frequency"}
            firstOption={"Annualy"}
            secondOption={"Single Premium"} disabled={undefined}          />
          <FormInputSelector
            placeholder={"Payout Frequency"}
            defalt={"Payout Frequency"}
            firstOption={"Annually"}
            secondOption={"Single Premium"} disabled={undefined}          />
        </div>
        <div className=" p-2 py-2 px-2 md:flex md:gap-6 md:px-4">
          <FormInputSelector
            placeholder={"Policy Term"}
            defalt={"Policy Term"}
            firstOption={"45"}
            secondOption={"50"} disabled={undefined}          />

          <FormInput
            onClick={() => { } }
            placeholder={"Target Earnings"}
            type={"number"}
            required
            onBlur={() => { } }
            onChange={() => { } } name={""} label={""} pattern={""} errorMessage={""}          />
        </div>

        <div className="flex gap-[40rem]  place-content-center bottom-0 mt-16 ">
          <Link to="/safetyplus">
            <button className="bg-[#900000] w-20 p-1 mt-8 px-4 text-white">
              Prev
            </button>
          </Link>
          <Link to="/safetyplusbenefit">
            <button className="bg-[#900000] w-20 p-1 mt-8 px-4 text-white">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SafetyPlusBenefitLayout;
