import { FC, useState } from "react";
import FormInput from "./FormInput";
import FormInputSelect from "./FormInputSelect";
import FormInputSelector from "./FormInputSelector";
import FormIdSelector from "./FormIdSelector";
import { Link, useNavigate } from "react-router-dom";
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
    identificationNumber:""
  });
  const pattern = {
    firstname: /^[a-zA-Z ,.'-]+$/,
    middlename: /^[a-zA-Z ,.'-]+$/,
    email: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/,
    phoneNumber: /^\+234\d{10}$/,
    identificationNumber: /^\d+$/,

  };
  const [errorMsg, setErrorMsg] = useState(false);
  const variantValues = { ...values };
  const navigation = useNavigate();
  const handleFunction = () => {
    if (
      variantValues.firstName.match(pattern.firstname) &&
      variantValues.middleName.match(pattern.middlename) &&
      variantValues.surName.match(pattern.middlename) &&
      variantValues.email.match(pattern.email) &&
      variantValues.phoneNumber.match(pattern.phoneNumber) &&
      variantValues.identificationNumber.match(pattern.identificationNumber)
    ) {
      setErrorMsg(false);
      navigation("/mor");
    } else {
      setErrorMsg(true);
    }
  };

  

  return (
    <div className="h-[fit] w-[full] px-6 py-12">
      <form className="">
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
          <FormInputSelect placeholder={"Title"} disabled={false} />
          <div>
            <FormInput
              onClick={() => { } }
              placeholder={"FirstName"}
              type={"text"}
              required={true}
              onBlur={() => { } }
              onChange={(e) => {
                setValues({ ...values, firstName: e.target.value });
              } }
              name={""}
              label={"First Name"}
              errorMessage={"Username should be 3-16 characters and shouldn't include any special character!"}
              pattern={"/^[a-z ,.'-]+$/i"} onKeyDown={undefined}            />
            {errorMsg && !variantValues.firstName.match(pattern.firstname) ? (
              <span className=" font-[9px] p-[3px] text-red-600 block">
                <h6 className=" text-xs">invalid firstName</h6>
              </span>
            ) : (
              <span className=" font-[12px] p-[3px] text-red-600 hidden"></span>
            )}
          </div>
          <div>
            <FormInput
              onClick={() => { } }
              placeholder={"Middle Name"}
              type={"text"}
              required={true}
              onBlur={() => { } }
              onChange={(e) => {
                setValues({ ...values, middleName: e.target.value });
              } }
              name={""}
              label={"Middle Name"}
              errorMessage={"Username should be 3-16 characters and shouldn't include any special character!"}
              pattern={"/^[a-z ,.'-]+$/i"} onKeyDown={undefined}            />
            {errorMsg && !variantValues.middleName.match(pattern.middlename) ? (
              <span className=" font-[9px] p-[3px] text-red-600 block">
                <h6 className=" text-xs">invalid middleName</h6>
              </span>
            ) : (
              <span className=" font-[12px] p-[3px] text-red-600 hidden"></span>
            )}
          </div>
        </div>
        <div className=" p-2 py-2 px-2 md:flex md:gap-6 md:px-4">
        <div>  <FormInput
            onClick={() => { } }
            placeholder={"SurName"}

            type={"text"}
            required={true}
            onBlur={() => { } }
            onChange={(e) => {
              setValues({ ...values, surName: e.target.value });
            } }
            name={""}
            label={"Surname"}
            errorMessage={"Username should be 3-16 characters and shouldn't include any special character!"}
            pattern={""} onKeyDown={undefined}          />
           {errorMsg && !variantValues.surName.match(pattern.middlename) ? (
              <span className=" font-[9px] p-[3px] text-red-600 block">
                <h6 className=" text-xs">invalid SurName</h6>
              </span>
            ) : (
              <span className=" font-[12px] p-[3px] text-red-600 hidden"></span>
            )}
          </div>

          {showDOBInput ? (
            <FormInput
              onClick={() => {
                setShowDOBInput(!showDOBInput);
              } }
              placeholder={"Date Of Birth"}
              type={"text"}
              required={true}
              onBlur={() => { } }
              onChange={(e) => {
                setValues({ ...values, surName: e.target.value });
              } }
              name={""}
              label={""}
              errorMessage={""}
              pattern={""} onKeyDown={undefined}            />
          ) : (
            <FormInput
                onClick={() => { } }
                placeholder={"Date Of Birth"}
                type={"date"}
                required={true}
                onBlur={() => {
                  setShowDOBInput(true);
                } }
                onChange={() => { } }
                name={""}
                label={""}
                errorMessage={""}
                pattern={""} onKeyDown={undefined}            />
          )}
          <FormInputSelector
            placeholder={"Gender"}
            defalt={"Select Gender"}
            firstOption={"male"}
            secondOption={"female"}
            disabled={undefined}
          />
         
        </div>
        <div className=" p-2 py-2 px-2 md:flex md:gap-6 md:px-4">
          <div>
          <FormInput
              onClick={() => { } }
              placeholder={"Email"}
              type={"text"}
              required={true}
              onBlur={() => { } }
              onChange={(e) => { setValues({ ...values, email: e.target.value }); } }
              name={""}
              label={""}
              errorMessage={"It should be a valid email address!"}
              pattern={""} onKeyDown={undefined}          />
           {errorMsg && !variantValues.email.match(pattern.email) ? (
              <span className=" font-[9px] p-[3px] text-red-600 block">
                <h6 className=" text-xs">invalid email adress</h6>
              </span>
            ) : (
              <span className=" font-[12px] p-[3px] text-red-600 hidden"></span>
            )}</div>
            <div>
          <FormInput
            onKeyDown={''}
            onClick={() => {}}
            placeholder={"(+234) 80x xxx xxxx"}
            type={"text"}
            required={true}
            onBlur={() => {}}
            onChange={(e) => {setValues({...values, phoneNumber: e.target.value})}}
            name={""}
            label={""}
            errorMessage={"Enter a valid phone number"}
            pattern={""}
          />
           {errorMsg && !variantValues.phoneNumber.match(pattern.phoneNumber) ? (
              <span className=" font-[9px] p-[3px] text-red-600 block">
                <h6 className=" text-xs">invalid phoneNumber</h6>
              </span>
            ) : (
              <span className=" font-[12px] p-[3px] text-red-600 hidden"></span>
            )}
            </div>

          {showInsuranceDate ? (
            <FormInput
              onClick={() => {
                setShowInsuranceDate(!showInsuranceDate);
              } }
              placeholder={"Insurance Start Date"}
              type={"text"}
              required={true}
              onBlur={() => { } }
              onChange={() => { } }
              name={""}
              label={""}
              errorMessage={""}
              pattern={""} onKeyDown={undefined}            />
          ) : (
            <FormInput
                onClick={() => { } }
                placeholder={"Insurance Start Date"}
                type={"date"}
                required={true}
                onBlur={() => {
                  setShowInsuranceDate(true);
                } }
                onChange={() => { } }
                name={""}
                label={""}
                errorMessage={""}
                pattern={""} onKeyDown={undefined}            />
          )}
        </div>
        <div className=" p-2 py-2 px-2 md:flex md:gap-6 md:px-4">
          <FormIdSelector
            placeholder={"Identification Type"}
            defalt={"Identification Type"}
            firstOption={"Driver License"}
            secondOption={"International Passport"}
            thirdOption={"National Id"}
          /><div>
          <FormInput
              onClick={() => { } }
              placeholder={"Identification Number"}
              type={"number"}
              required={true}
              onBlur={() => { } }
              onChange={() => { } }
              name={""}
              label={""}
              errorMessage={""}
              pattern={""} onKeyDown={undefined}          />
           {errorMsg && !variantValues.identificationNumber.match(pattern.identificationNumber) ? (
              <span className=" font-[9px] p-[3px] text-red-600 block">
                <h6 className=" text-xs">invalid id number</h6>
              </span>
            ) : (
              <span className=" font-[12px] p-[3px] text-red-600 hidden"></span>
            )}</div>
          <FormInput
            onClick={() => { } }
            placeholder={"Upload means of ID"}
            type={"file"}
            required={true}
            disabled={false}
            onBlur={() => { } }
            onChange={() => { } }
            name={""}
            label={""}
            errorMessage={""}
            pattern={""} onKeyDown={undefined}          />
        </div>
        <div className="flex gap-[4rem] justify-end w-[90%] bottom-0 mt-8">
          <Link to="/">
            <button className="bg-[gray] w-20 p-1 mt-8 px-4 text-white">
              Prev
            </button>
          </Link>

          <button
            onClick={handleFunction}
            className="bg-[#900000] w-20 p-1 mt-8 px-4 text-white"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormCard;
