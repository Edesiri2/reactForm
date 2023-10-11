import React, { useEffect, useRef, useState } from "react";
import { Formik, useFormik } from "formik";
import { Title } from "../data/title.data";

const PersonalInformation = ({ formik }: any) => {
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
                onChange={formik.handleChange}
                defaultValue={formik.values?.title}
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
            {formik.errors.title && (
              <p className="text-[12px] text-[#ff3333]">
                {formik.errors.title}
              </p>
            )}
          </div>
          <div className="w-full md:w-1/3 px-3 flex flex-col">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Firstname"
              name="firstName"
              onChange={formik.handleChange}
              defaultValue={formik.values.firstName}
            />
            {formik.errors.firstName && formik.touched.firstName && (
              <p className="text-[12px] text-[#ff3333]">
                {formik.errors.firstName}
              </p>
            )}
          </div>
          <div className="w-full md:w-1/3 px-3">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Middlename"
              name="middleName"
              defaultValue={formik.value?.middleName}
              onChange={formik.handleChange}
            />
            {formik.errors.middleName && (
              <p className="text-[12px] text-[#ff3333]">
                {formik.errors.middleName}
              </p>
            )}
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
              defaultValue={formik.values?.surname}
              onChange={formik.handleChange}
            />
            {formik.errors.surname && (
              <p className="text-[12px] text-[#ff3333]">
                {formik.errors.surname}
              </p>
            )}
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
              defaultValue={formik.values?.dob}
              onChange={formik.handleChange}
            />
            {formik.errors.dob && (
              <p className="text-[12px] text-[#ff3333]">{formik.errors.dob}</p>
            )}
          </div>
          <div className="w-full md:w-1/3 px-3">
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                name="gender"
                defaultValue={formik.values?.gender}
                onChange={formik.handleChange}
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
              {formik.errors.gender && (
                <p className="text-[12px] text-[#ff3333]">
                  {formik.errors.gender}
                </p>
              )}
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
              defaultValue={formik.values?.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email && (
              <p className="text-[12px] text-[#ff3333]">
                {formik.errors.email}
              </p>
            )}
          </div>
          <div className="w-full md:w-1/3 px-3">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="tel"
              placeholder="+234 80 000 0000"
              name="phoneNumber"
              defaultValue={formik.values?.phoneNumber}
              onChange={formik.handleChange}
            />
            {formik.errors.phoneNumber && (
              <p className="text-[12px] text-[#ff3333]">
                {formik.errors.phoneNumber}
              </p>
            )}
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
              defaultValue={formik.values?.insuranceStartDate}
              onChange={formik.handleChange}
            />
            {formik.errors.insuranceStartDate && (
              <p className="text-[12px] text-[#ff3333]">
                {formik.errors.insuranceStartDate}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-row gap-2 mb-4">
          <div className="w-full md:w-1/3 px-3">
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                name="IdType"
                defaultValue={formik.values?.IdType}
                onChange={formik.handleChange}
              >
                <option>--- Identification Type ---</option>
                <option value="Driver License">Driver License</option>
                <option value="National Id">National Id</option>
                <option value="International Passport">
                  International Passport
                </option>
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
            {formik.errors.IdType && (
              <p className="text-[12px] text-[#ff3333]">
                {formik.errors.IdType}
              </p>
            )}
          </div>
          <div className="w-full md:w-1/3 px-3">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="IdNumber"
              placeholder="Identification Number"
              defaultValue={formik.values?.IdNumber}
              onChange={formik.handleChange}
            />
            {formik.errors.IdNumber && (
              <p className="text-[12px] text-[#ff3333]">
                {formik.errors.IdNumber}
              </p>
            )}
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <input
              type="file"
              className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
              name="file"
              defaultValue={formik.values?.file}
              onChange={formik.handleChange}
            />
            {formik.errors.file && (
              <p className="text-[12px] text-[#ff3333]">{formik.errors.file}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
