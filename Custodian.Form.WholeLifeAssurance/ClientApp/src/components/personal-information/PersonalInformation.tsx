import React, { useState } from "react";
import { Formik } from "formik";
import { Title } from "../data/title.data";

const PersonalInformation = ({ handlePersonalData, oldData }: any) => {
  const [personalData, setPersonalData] = useState({
    title: "",
    firstName: "",
    middleName: "",
    surname: "",
    dob: "",
    gender: "",
    email: "",
    phoneNumber: "",
    insuranceStartDate: "",
    IdType: "",
    IdNumber: "",
    file: "",
  });

  const handleChange = (e: any) => {
    // e.prevent.default();
    setPersonalData({ ...personalData, [e.target.name]: e.target.value });
    handlePersonalData({ ...personalData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div>
        <div className="flex flex-row gap-2 mb-4">
          <div className="w-full md:w-1/3 px-3">
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                name="title"
                onChange={handleChange}
                defaultValue={personalData.title}
              >
                <option>--- Select Title ---</option>
                {Title.map((item, index) => (
                  <option key={index} value={item.value}>
                    {item.name}
                  </option>
                ))}
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
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Firstname"
              name="firstName"
              onChange={handleChange}
              defaultValue={personalData.firstName}
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Middlename"
              name="middleName"
              defaultValue={personalData.middleName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-row gap-2 mb-4">
          <div className="w-full md:w-1/3 px-3">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Surname"
              name="surname"
              defaultValue={personalData.surname}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              placeholder="Date of Birth"
              name="dob"
              defaultValue={personalData.dob}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                name="gender"
                defaultValue={personalData.gender}
                onChange={handleChange}
              >
                <option>--- Select Gender ---</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
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
              type="email"
              placeholder="Email"
              name="email"
              defaultValue={personalData.email}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="tel"
              placeholder="+234 80 000 0000"
              name="phoneNumber"
              defaultValue={personalData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Insurance start date"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              name="insuranceStartDate"
              defaultValue={personalData.insuranceStartDate}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-row gap-2 mb-4">
          <div className="w-full md:w-1/3 px-3">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="email"
              placeholder="Identification Type"
              name="IdType"
              defaultValue={personalData.IdType}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="IdNumber"
              placeholder="Identification Number"
              defaultValue={personalData.IdNumber}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <input
              type="file"
              className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
              name="file"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
