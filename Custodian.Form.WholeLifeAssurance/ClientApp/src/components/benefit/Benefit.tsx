import { Formik } from "formik";
import { Title } from "../data/title.data";
import { useState } from "react";

const Benefit = ({ handleBenefitData, oldData }: any) => {
  const [benefitData, setBenefitData] = useState({
    amountToSave: oldData&& oldData.amountToSave,
    paymentFrequency: oldData&& oldData.paymentFrequency,
    policyTerm: oldData&& oldData.policyTerm,
    targetAmount: oldData&& oldData.targetAmount,
    lifeSumAssured: oldData&& oldData.lifeSumAssured,
  });

  const handleChange = (e: any) => {
    setBenefitData({ ...benefitData, [e.target.name]: e.target.value });
    handleBenefitData({ ...benefitData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div>
        <div className="flex flex-row gap-2 mb-4">
          <div className="w-full md:w-1/3 px-3">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Amount To Save"
              name="amountToSave"
              onChange={handleChange}
              defaultValue={benefitData?.amountToSave}
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                name="paymentFrequency"
                onChange={handleChange}
                defaultValue={benefitData?.paymentFrequency}
              >
                <option>--- Select Payment Frequency ---</option>
                <option value="annualy">Annualy</option>
                <option value="single premium">Single Premium</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3">
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                name="policyTerm"
                onChange={handleChange}
                defaultValue={benefitData?.policyTerm}
              >
                <option>--- Select Policy Term ---</option>
                <option value="45">45</option>
                <option value="50">50</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-2 mb-4">
          <div className="w-full md:w-1/3 px-3">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Target Amount"
              name="targetAmount"
              onChange={handleChange}
              defaultValue={benefitData?.targetAmount}
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Life Sum Assured"
              name="lifeSumAssured"
              onChange={handleChange}
              defaultValue={benefitData?.lifeSumAssured}
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <button className="w-full bg-[#A73439] px-[2rem] py-3 rounded-lg text-[#fff] hover:bg-[#A73439]/90">
              Calculate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
