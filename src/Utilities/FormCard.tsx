import { FC, useState } from "react";
import FormInput from "./FormInput";
import FormInputSelect from "./FormInputSelect";
import FormInputSelector from "./FormInputSelector";
import { Link } from "react-router-dom";
interface FormCardProps {
  title: string;
}

const FormCard: FC<FormCardProps> = ({ title }) => {
  const [showDOBInput, setShowDOBInput] = useState(true);
  const [showInsuranceDate, setShowInsuranceDate] = useState(true);
  const [values, setValues] = useState({
    firstName: "",
    middleName: "",
    surName: "",
    dob: "",
    gender: "",
    email: "",
    phoneNumber: "",
  });
  console.log(values);
  return (
    <div className="h-[fit] w-[full] px-6 py-12">
      <div className="flex flex-col w-[100%]  h-[fit] md:h-[500px]  mt-2 px-16 bg-white rounded-lg shadow-lg ">
        <section className="bg-white mb-8 py-2 px-4">
          <div className="container mx-auto">
            <div className="flex  justify-between">
              <h1 className="lg:text-2xl md:text-lg md:font-semibold sm:text-sm sm:font-normal sm:flex-wrap">
                {title}
              </h1>
            </div>
          </div>
        </section>
        <h1 className=" text-[#900000]  mb-2 font-bold">
          Personal Information
        </h1>
        <div className="  p-2 py-2 px-2 md:flex md:gap-6 md:px-4 ">
          <FormInputSelect placeholder={"Title"} />
          <FormInput
            onClick={() => {}}
            placeholder={"FirstName"}
            type={"text"}
            required={true}
            onBlur={() => {}}
            onChange={(e) => {
              setValues({...values, firstName:e.target.value});
            }}
            name={""}
            label={"First Name"}
            errorMessage={""}
            pattern={""}
          />
          <FormInput
            onClick={() => {}}
            placeholder={"Middle Name"}
            type={"text"}
            required={true}
            onBlur={() => {}}
            onChange={(e) => {setValues({...values, middleName:e.target.value})}}
            name={""}
            label={"Middle Name"}
            errorMessage={""}
            pattern={""}
          />
        </div>
        <div className=" p-2 py-2 px-2 md:flex md:gap-6 md:px-4">
          <FormInput
            onClick={() => {}}
            placeholder={"SurName"}
            type={"text"}
            required={true}
            onBlur={() => {}}
            onChange={(e) => {setValues({...values, surName:e.target.value})}}
            name={""}
            label={"Surname"}
            errorMessage={""}
            pattern={""}
          />

          {showDOBInput ? (
            <FormInput
              onClick={() => {
                setShowDOBInput(!showDOBInput);
              }}
              placeholder={"Date Of Birth"}
              type={"text"}
              required={true}
              onBlur={() => {}}
              onChange={(e) => {setValues({...values, surName:e.target.value})}}
              name={""}
              label={""}
              errorMessage={""}
              pattern={""}
            />
          ) : (
            <FormInput
              onClick={() => {}}
              placeholder={"Date Of Birth"}
              type={"date"}
              required={true}
              onBlur={() => {
                setShowDOBInput(true);
              }}
              onChange={() => {}}
              name={""}
              label={""}
              errorMessage={""}
              pattern={""}
            />
          )}
          <FormInputSelector
            placeholder={"Gender"}
            defalt={"Select Gender"}
            firstOption={"male"}
            secondOption={"female"}
          />
        </div>
        <div className=" p-2 py-2 px-2 md:flex md:gap-6 md:px-4">
          <FormInput
            onClick={() => {}}
            placeholder={"Email"}
            type={"text"}
            required={true}
            onBlur={() => {}}
            onChange={() => {}}
            name={""}
            label={""}
            errorMessage={""}
            pattern={""}
          />
          <FormInput
            onClick={() => {}}
            placeholder={"(+234) 80x xxx xxxx"}
            type={"number"}
            required={true}
            onBlur={() => {}}
            onChange={() => {}}
            name={""}
            label={""}
            errorMessage={"Enter a valid phone number"}
            pattern={"/^\(\d{3}\) \d{3}-\d{4}$/"}
          />

          {showInsuranceDate ? (
            <FormInput
              onClick={() => {
                setShowInsuranceDate(!showInsuranceDate);
              }}
              placeholder={"Insurance Start Date"}
              type={"text"}
              required={true}
              onBlur={() => {}}
              onChange={() => {}}
              name={""}
              label={""}
              errorMessage={""}
              pattern={""}
            />
          ) : (
            <FormInput
              onClick={() => {}}
              placeholder={"Insurance Start Date"}
              type={"date"}
              required={true}
              onBlur={() => {
                setShowInsuranceDate(true);
              }}
              onChange={() => {}}
              name={""}
              label={""}
              errorMessage={""}
              pattern={""}
            />
          )}
        </div>
        <div className=" p-2 py-2 px-2 md:flex md:gap-6 md:px-4">
          <FormInputSelector
            placeholder={"Identification Type"} defalt={"National ID"} firstOption={"Driver License"} secondOption={"International Passport"}          />
          <FormInput
            onClick={() => {}}
            placeholder={"Identification Number"}
            type={"number"}
            required={true}
            onBlur={() => {}}
            onChange={() => {}}
            name={""}
            label={""}
            errorMessage={""}
            pattern={""}
          />
          <FormInput
            onClick={() => {}}
            placeholder={"Upload means of ID"}
            type={"file"}
            required={true}
            onBlur={() => {}}
            onChange={() => {}}
            name={""}
            label={""}
            errorMessage={""}
            pattern={""}
          />
        </div>
        <div className="flex gap-[40rem]  place-content-center  bottom-0 ">
          <Link to="/">
            <button className="bg-[#900000] w-20 p-1 mt-8 px-4 text-white">
              Prev
            </button>
          </Link>
          <Link to="/mor">
            <button className="bg-[#900000] w-20 p-1 mt-8 px-4 text-white">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormCard;
