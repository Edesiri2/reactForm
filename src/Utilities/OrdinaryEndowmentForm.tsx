import { FC, useState } from "react";
import FormInput from "./FormInput";
import FormInputSelect from "./FormInputSelect";
import FormInputSelector from "./FormInputSelector";
import { Link } from "react-router-dom";
import FormIdSelector from "./FormIdSelector";
interface FormCardProps {
  title : string
}

const FormCard: FC<FormCardProps> = ({title}) => {
    const [showDOBInput, setShowDOBInput] = useState(true);
    const [showInsuranceDate, setShowInsuranceDate] = useState(true);
  return (
    <div className="h-[fit] w-[full] px-6 py-12">
      <div className="flex flex-col w-[100%]  h-[fit] md:h-[500px]  mt-2 px-16 bg-white rounded-lg shadow-lg ">
        <section className="bg-white mb-8 py-2 px-4">
          <div className="container mx-auto">
            <div className="flex  justify-between">
            <h1 className="lg:text-2xl md:text-lg md:font-semibold sm:text-sm sm:font-normal sm:flex-wrap">
               { title}
              </h1>
             
            </div>
          </div>
        </section>
        <h1 className=" text-[#900000]  mb-2 font-bold">
          Personal Information
        </h1>
        <div className="  p-2 py-2 px-2 md:flex md:gap-6 md:px-4 ">
          <FormInputSelect placeholder={"Title"} disabled={false} />
          <FormInput
            onClick={() => { } }
            placeholder={"FirstName"}
            type={"text"}
            required={true}
            onBlur={() => { } }
            onChange={() => { } } name={""} label={""} errorMessage={""} pattern={""}         />
          <FormInput
            onClick={() => { } }
            placeholder={"MiddleName"}
            type={"text"}
            required={true}
            onBlur={() => { } }
            onChange={() => { } } name={""} label={""} errorMessage={""} pattern={""}         />
        </div>
        <div className=" p-2 py-2 px-2 md:flex md:gap-6 md:px-4">
          <FormInput
            onClick={() => { } }
            placeholder={"SurName"}
            type={"text"}
            required={true}
            onBlur={() => { } }
            onChange={() => { } } name={""} label={""} errorMessage={""} pattern={""}         />
          {showDOBInput?(<FormInput
            onClick={() => { setShowDOBInput(!showDOBInput); } }
            placeholder={"Date Of Birth"}
            type={"text"}
            required={true}
            onBlur={() => { } }
            onChange={() => { } } name={""} label={""} errorMessage={""} pattern={""}         />):(
          <FormInput
                onClick={() => { } }
                placeholder={"Date Of Birth"}
                type={"date"}
                required={true}
                onBlur={() => { } }
                onChange={() => { } } name={""} label={""} errorMessage={""} pattern={""}         />)}
          <FormInputSelector
           
            placeholder={"Gender"}
            defalt={"Select Gender"}
            firstOption={"male"}
            secondOption={"female"} disabled={undefined}          />
        </div>
        <div className=" p-2 py-2 px-2 md:flex md:gap-6 md:px-4">
          <FormInput
            onClick={() => { } }
            placeholder={"Email"}
            type={"text"}
            required={true}
            onBlur={() => { } }
            onChange={() => { } } name={""} label={""} errorMessage={""} pattern={""}         />
          <FormInput
            onClick={() => { } }
            placeholder={"Mobile Number"}
            type={"text"}
            required={true}
            onBlur={() => { } }
            onChange={() => { } } name={""} label={""} errorMessage={""} pattern={""}         />
         
          {showInsuranceDate?(<FormInput
            onClick={() => { setShowInsuranceDate(!showInsuranceDate); } }
            placeholder={"Insurance Start Date"}
            type={"text"}
            required={true}
            onBlur={() => { } }
            onChange={() => { } } name={""} label={""} errorMessage={""} pattern={""}         />):(
          <FormInput
                onClick={() => { } }
                placeholder={"Insurance Start Date"}
                type={"date"}
                required={true}
                onBlur={() => { } }
                onChange={() => { } } name={""} label={""} errorMessage={""} pattern={""}         />)}
        </div>
        <div className=" p-2 py-2 px-2 md:flex md:gap-6 md:px-4">
        <FormIdSelector
            placeholder={"Identification Type"} defalt={"Identification Type"} firstOption={"Driver License"} secondOption={"International Passport"} thirdOption={"National Id"}          />
          <FormInput
            onClick={() => { } }
            placeholder={"Identification Number"}
            type={"number"}
            required={true}
            onBlur={() => { } }
            onChange={() => { } } name={""} label={""} errorMessage={""} pattern={""}         />
          <FormInput
            onClick={() => { } }
            placeholder={"Upload means of ID"}
            type={"file"}
            required={true}
            onBlur={() => { } }
            onChange={() => { } } name={""} label={""} errorMessage={""} pattern={""}         />
        </div>
        <div className="flex gap-[4rem] justify-end w-[90%] bottom-0 mt-8">
          <Link to="/ordinaryendowment">
            <button className="bg-[gray] w-20 p-1 mt-8 px-4 text-white">
              Prev
            </button>
          </Link>
          <Link to="/ordinaryendowmentbenefit">
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
