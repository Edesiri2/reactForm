import { FC, useState } from "react";
import FormInput from "../Utilities/FormInput";
import FormInputSelect from "../Utilities/FormInputSelect";
import FormInputSelector from "../Utilities/FormInputSelector";
import { Link } from "react-router-dom";

const SummaryPage = () => {
  const [showDOBInput, setShowDOBInput] = useState(true);
  const [showInsuranceDate, setShowInsuranceDate] = useState(true);
  return (
    <div className="h-[fit] w-[full] flex flex-col px-6 py-12 place-content-center">
      <h1 className=" text-[#900000]  mb-4 font-bold">SUMMARY</h1>
      <h2 className=" text-[gray]  mb-2 font-bold">Personal Information</h2>
      <div className="flex flex-col w-[100%]  h-[fit] md:h-[700px]  mt-2 px-8 bg-white rounded-lg shadow-lg ">
        <div className=" place-content-center  p-2 py-2 px-2 md:flex md:gap-6 md:px-4 ">
          <FormInputSelect disabled={true} placeholder={"Mr"} />
          <FormInput
            onClick={() => {}}
            placeholder={"Eric"}
            type={"text"}
            required={true}
            name={""}
            disabled={true}
            onBlur={() => {}}
            onChange={() => {}}
            label={""}
            pattern={""}
            errorMessage={""}
          />
          <FormInput
            onClick={() => {}}
            placeholder={"Steve"}
            type={"text"}
            required={true}
            disabled={true}
            name={""}
            onBlur={() => {}}
            onChange={() => {}}
            label={""}
            pattern={""}
            errorMessage={""}
          />
        </div>
        <div className=" place-content-center p-2 py-2 px-2 md:flex md:gap-6 md:px-4">
          <FormInput
            onClick={() => {}}
            placeholder={"John"}
            type={"text"}
            required={true}
            disabled={true}
            name={""}
            onBlur={() => {}}
            onChange={() => {}}
            label={""}
            pattern={""}
            errorMessage={""}
          />
          {showDOBInput ? (
            <FormInput
              onClick={() => {
                setShowDOBInput(!showDOBInput);
              }}
              placeholder={"Date Of Birth"}
              type={"text"}
              required={true}
              name={""}
              disabled={true}
              onBlur={() => {}}
              onChange={() => {}}
              label={""}
              pattern={""}
              errorMessage={""}
            />
          ) : (
            <FormInput
              onClick={() => {}}
              placeholder={"12/10/1960"}
              type={"date"}
              required={true}
              disabled={true}
              name={""}
              onBlur={() => {}}
              onChange={() => {}}
              label={""}
              pattern={""}
              errorMessage={""}
            />
          )}
          <FormInputSelector
            placeholder={"male"}
            defalt={"Select Gender"}
            firstOption={"male"}
            secondOption={"female"}
            disabled={true}
          />
        </div>
        <div className=" place-content-center p-2 py-2 px-2 md:flex md:gap-6 md:px-4">
          <FormInput
            onClick={() => {}}
            placeholder={"ericjohn@gmail.com"}
            type={"text"}
            disabled={true}
            required={true}
            name={""}
            onBlur={() => {}}
            onChange={() => {}}
            label={""}
            pattern={""}
            errorMessage={""}
          />
          <FormInput
            onClick={() => {}}
            placeholder={"234 805 0987"}
            type={"text"}
            required={true}
            disabled={true}
            name={""}
            onBlur={() => {}}
            onChange={() => {}}
            label={""}
            pattern={""}
            errorMessage={""}
          />

          {showInsuranceDate ? (
            <FormInput
              onClick={() => {
                setShowInsuranceDate(!showInsuranceDate);
              }}
              placeholder={"Insurance Start Date"}
              type={"text"}
              required={true}
              name={""}
              onBlur={() => {}}
              onChange={() => {}}
              label={""}
              pattern={""}
              errorMessage={""}
            />
          ) : (
            <FormInput
              onClick={() => {}}
              placeholder={"Insurance Start Date"}
              type={"date"}
              required={true}
              disabled={true}
              name={""}
              onBlur={() => {}}
              onChange={() => {}}
              label={""}
              pattern={""}
              errorMessage={""}
            />
          )}
        </div>
        <div className=" place-content-center p-2 py-2 px-2 md:flex md:gap-6 md:px-4">
          <FormInput
            onClick={() => {}}
            placeholder={"National Id"}
            type={"text"}
            required={true}
            disabled={true}
            name={""}
            onBlur={() => {}}
            onChange={() => {}}
            label={""}
            pattern={""}
            errorMessage={""}
          />
          <FormInput
            onClick={() => {}}
            placeholder={"cvhwe324weqw"}
            type={"number"}
            disabled={true}
            required={true}
            name={""}
            onBlur={() => {}}
            onChange={() => {}}
            label={""}
            pattern={""}
            errorMessage={""}
          />
          <FormInput
            onClick={() => {}}
            placeholder={"Upload means of ID"}
            type={"file"}
            required={true}
            disabled={true}
            name={""}
            onBlur={() => {}}
            onChange={() => {}}
            label={""}
            pattern={""}
            errorMessage={""}
          />
        </div>
        <div className=" ">
          {" "}
          <h2 className=" place-content-center text-[gray] flex  mb-2 font-bold">
            Benefits
          </h2>
          <div className=" place-content-center p-2 py-2 px-2 md:flex md:gap-6 md:px-4">
            <FormInput
              onClick={() => {}}
              placeholder={"N100,000"}
              type={"number"}
              required={true}
              disabled={true}
              onBlur={() => {}}
              onChange={() => {}}
              name={""}
              label={""}
              pattern={""}
              errorMessage={""}
            />
            <FormInputSelector
              placeholder={"Payment Frequency"}
              defalt={"Annual"}
              firstOption={"Annualy"}
              secondOption={"Single Premium"}
              disabled={true}
            />
            <FormInputSelector
              placeholder={"Policy Term"}
              defalt={"2years"}
              firstOption={"45"}
              secondOption={"50"}
              disabled={true}
            />
          </div>
          <div className=" ml-24 p-2 py-2 px-2 md:flex md:gap-6 md:px-4">
            <FormInput
              onClick={() => {}}
              placeholder={"N50,000"}
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
          <div className="flex gap-[4rem] justify-end w-[90%] bottom-0 mt-8">
            <Link to="/">
              <button className="bg-[#900000] w-20 p-1 mt-8 px-4 text-white">
                Prev
              </button>
            </Link>
            <Link to="">
              <button className="bg-[#900000] w-20 p-1 mt-8 px-4 text-white">
                Finish
              </button>
            </Link>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default SummaryPage;
