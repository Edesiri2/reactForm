import {FC, useState} from 'react'
import FormInput from '../Utilities/FormInput';
import FormInputSelect from '../Utilities/FormInputSelect';
import FormInputSelector from '../Utilities/FormInputSelector';
import { Link } from 'react-router-dom';


const SummaryPage:FC = () => {
    const [showDOBInput, setShowDOBInput] = useState(true);
    const [showInsuranceDate, setShowInsuranceDate] = useState(true);
  return (
    <div className="h-[fit] w-[full] flex flex-col px-6 py-12 place-content-center">
       <h1 className=" text-[#900000]  mb-4 font-bold">
         SUMMARY
        </h1>
        <h1 className=" text-[gray]  mb-2 font-bold">
         Personal Information
        </h1>
    <div className="flex flex-col w-[100%]  h-[fit] md:h-[700px]  mt-2 px-8 bg-white rounded-lg shadow-lg ">
  
        <div className=" place-content-center  p-2 py-2 px-2 md:flex md:gap-6 md:px-4 ">
          <FormInputSelect placeholder={"Title"} />
          <FormInput
            onClick={() => { } }
            placeholder={"FirstName"}
            type={"text"}
            required={true}
            name={''}
            onBlur={() => { } }
            onChange={() => { } } label={""} pattern={""} errorMessage={""}          />
          <FormInput
            onClick={() => { } }
            placeholder={"MiddleName"}
            type={"text"}
            required={true}
            name={''}
            onBlur={() => { } }
            onChange={() => { } } label={""} pattern={""} errorMessage={""}          />
        </div>
        <div className=" place-content-center p-2 py-2 px-2 md:flex md:gap-6 md:px-4">
          <FormInput
            onClick={() => { } }
            placeholder={"SurName"}
            type={"text"}
            required={true}
            name={''}
            onBlur={() => { } }
            onChange={() => { } } label={""} pattern={""} errorMessage={""}          />
          {showDOBInput?(<FormInput
            onClick={() => { setShowDOBInput(!showDOBInput); } }
            placeholder={"Date Of Birth"}
            type={"text"}
            required={true}
            name={''}
            onBlur={() => { } }
            onChange={() => { } } label={""} pattern={""} errorMessage={""}          />):(
          <FormInput
                onClick={() => { } }
                placeholder={"Date Of Birth"}
                type={"date"}
                required={true}
                name={''}
                onBlur={() => { } }
                onChange={() => { } } label={""} pattern={""} errorMessage={""}          />)}
          <FormInputSelector
           
            placeholder={"Gender"}
            defalt={"Select Gender"}
            firstOption={"male"}
            secondOption={"female"}
          />
        </div>
        <div className=" place-content-center p-2 py-2 px-2 md:flex md:gap-6 md:px-4">
          <FormInput
            onClick={() => { } }
            placeholder={"Email"}
            type={"text"}
            required={true}
            name={''}
            onBlur={() => { } }
            onChange={() => { } } label={""} pattern={""} errorMessage={""}          />
          <FormInput
            onClick={() => { } }
            placeholder={"Mobile Number"}
            type={"text"}
            required={true}
            name={''}
            onBlur={() => { } }
            onChange={() => { } } label={""} pattern={""} errorMessage={""}          />
         
          {showInsuranceDate?(<FormInput
            onClick={() => { setShowInsuranceDate(!showInsuranceDate); } }
            placeholder={"Insurance Start Date"}
            type={"text"}
            required={true}
            name={''}
            onBlur={() => { } }
            onChange={() => { } } label={""} pattern={""} errorMessage={""}          />):(
          <FormInput
                onClick={() => { } }
                placeholder={"Insurance Start Date"}
                type={"date"}
                required={true}
                name={''}
                onBlur={() => { } }
                onChange={() => { } } label={""} pattern={""} errorMessage={""}          />)}
        </div>
        <div className=" place-content-center p-2 py-2 px-2 md:flex md:gap-6 md:px-4">
          <FormInput
            onClick={() => { } }
            placeholder={"Identification Type"}
            type={"text"}
            required={true}
            name={''}
            onBlur={() => { } }
            onChange={() => { } } label={""} pattern={""} errorMessage={""}          />
          <FormInput
            onClick={() => { } }
            placeholder={"Identification Number"}
            type={"number"}
            required={true}
            name={''}
            onBlur={() => { } }
            onChange={() => { } } label={""} pattern={""} errorMessage={""}          />
          <FormInput
            onClick={() => { } }
            placeholder={"Upload means of ID"}
            type={"file"}
            required={true}
            name={''}
            onBlur={() => { } }
            onChange={() => { } } label={""} pattern={""} errorMessage={""}          />
        </div>
        <div className=' '> <h1 className=" place-content-center text-[gray] flex  mb-2 font-bold">Benefits</h1>
        <div className=" place-content-center p-2 py-2 px-2 md:flex md:gap-6 md:px-4">
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
            secondOption={"Single Premium"}
          />
          <FormInputSelector
            placeholder={"Policy Term"}
            defalt={"Policy Term"}
            firstOption={"45"}
            secondOption={"50"}
          />
        </div>
        <div className=" place-content-center p-2 py-2 px-2 md:flex md:gap-6 md:px-4">
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
       
        <div className="flex gap-[40rem]  place-content-center  bottom-0 mt-16">
          <Link to="">
            <button className="bg-[#900000] w-20 p-1 mt-8 px-4 text-white">
              Prev
            </button>
          </Link>
          <Link to="">
            <button className="bg-[#900000] w-20 p-1 mt-8 px-4 text-white">
             Finish
            </button>
          </Link></div>
    </div>
    </div> </div>
  )
}

export default SummaryPage
