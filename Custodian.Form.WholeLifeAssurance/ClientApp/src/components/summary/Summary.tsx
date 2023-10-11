import { useEffect } from "react";

const Summary = ({ personalData, benefitData }: any) => {
  useEffect(() => {
    console.log(personalData);
  });
  return (
    <div>
      <div className="flex px-2 mb-3">
        <h1 className="text-2xl uppercase font-[500]">Personal Info</h1>
      </div>
      <div className="flex mb-4 flex-wrap">
        {personalData &&
          Object.keys(personalData).map((item, index) => (
            <div className="w-full md:w-1/3 px-2 mb-3" key={index}>
              <div className="capitalize font-[600] mb-1">{item}</div>
              <div className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                {personalData[item]}
              </div>
            </div>
          ))}
      </div>
      <div className="flex px-2 mb-3">
        <h1 className="text-2xl uppercase font-[500]">Benefit Info</h1>
      </div>
      <div className="w-full flex mb-4 flex-wrap">
        {personalData &&
          Object.keys(benefitData).map((item, index) => (
            <div className="w-full md:w-1/3 px-2 mb-3" key={index}>
              <div className="capitalize font-[600] mb-1">{item}</div>
              <div className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                {benefitData[item]}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Summary;
