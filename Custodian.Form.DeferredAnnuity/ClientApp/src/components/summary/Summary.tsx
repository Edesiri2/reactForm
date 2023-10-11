import { useEffect } from "react";

const Summary = ({ personalData, benefitData }: any) => {
  useEffect(() => {
    console.log(personalData);
  });

  return (
    <div className="h-full">
      {/* <div className="px-2 mb-6 ">
        <h1 className="text-2xl uppercase font-[500]">Summary</h1>
      </div> */}

      {/* Personal Information Table */}
      <div className="mb-8">
        <h2 className="text-xl uppercase font-[500] mb-3">Personal Info</h2>
        <div className="bg-white shadow-md rounded-lg ">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left py-2 px-4">Field</th>
                <th className="text-left py-2 px-4">Value</th>
              </tr>
            </thead>
            <tbody>
              {personalData &&
                Object.keys(personalData).map((item, index) => (
                  <tr key={index}>
                    <td className="border-t py-2 px-4">{item}</td>
                    <td className="border-t py-2 px-4">{personalData[item]}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Benefit Information Table */}
      <div>
        <h2 className="text-xl uppercase font-[500] mb-3">Benefit Info</h2>
        <div className="bg-white shadow-md rounded-lg ">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left py-2 px-4">Field</th>
                <th className="text-left py-2 px-4">Value</th>
              </tr>
            </thead>
            <tbody>
              {benefitData &&
                Object.keys(benefitData).map((item, index) => (
                  <tr key={index}>
                    <td className="border-t py-2 px-4">{item}</td>
                    <td className="border-t py-2 px-4">{benefitData[item]}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Summary;
