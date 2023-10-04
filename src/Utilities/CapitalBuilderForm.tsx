import { FC, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const CapitalBuilderForm: FC = () => {
  const values = {
    firstName: "",
    middleName: "",
    surName: "",
    dob: "",
    gender: "",
    email: "",
    phoneNumber: "",
    identificationNumber: "",
  };
  const [showDOBInput, setShowDOBInput] = useState(true);
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "firstName must be at least 3 characters")
      .required("firstName is required"),
    middleName: Yup.string()
      .min(3, "middleName must be at least 3 characters")
      .required("middleName is required"),
    surName: Yup.string()
      .min(3, "SurName must be at least 3 characters")
      .required("SurName is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    identificationNumber: Yup.string()
      .matches(/^\+234\d{10}$/, "Invalid identificationNumber format")
      .required("IdentificationNumber is required"),
    insuranceStartDate: Yup.string()
      .matches(/^\+234\d{10}$/, "Invalid insuranceStartDate format")
      .required("Insurance Start Date is required"),
    phoneNumber: Yup.string()
      .matches(/^\+234\d{10}$/, "Invalid phone number format")
      .required("Phone number is required"),
  });

  const onSubmit = (values: any) => {
    console.log("Submitted values:", values);
  };
  return (
    <div className="flex  w-[100vw]  h-[100vh]  m-10 px-16 bg-white rounded-lg shadow-lg ">
      <Formik
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        initialValues={values}
        onClick ={onclick}
      >
        {({ handleChange }) => (
          <Form>
            <div className="flex ">
              <div className="flex flex-col w-[100vw] gap-6">
                <h1 className=" text-[#900000]  mb-2 font-bold">
                  Personal Information
                </h1>
                <div className="flex  place-content-center gap-6">
                  <div className="">
                    <Field
                      className=" border border-gray-400 hover:border-red-600 w-80 p-2"
                      as="select"
                      id="Title"
                      name="Title"
                      onChange={handleChange}
                    >
                      <option value="Miss">Miss</option>
                      <option value="Master">Master</option>
                      <option value="Mr">Mr</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Dr">Dr</option>
                      <option value="Prof">Prof</option>
                      <option value="Chief">Chief</option>
                      <option value="Alhaji">Alhaji</option>
                      <option value="Pastor">Pastor</option>
                      <option value="Rev">Rev</option>
                    </Field>
                    <ErrorMessage
                      name="Title"
                      component="div"
                      className="error  text-red-600"
                    />
                  </div>
                  <div>
                    <Field
                      className=" w-80 p-2 border border-gray-400 hover:border-red-600"
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="Enter your firstName"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="error  text-red-600"
                    />
                  </div>

                  <div>
                    <Field
                      className=" w-80 p-2 border border-gray-400  hover:border-red-600"
                      type="middleName"
                      id="middleName"
                      name="middleName"
                      placeholder="Enter your middleName"
                    />
                    <ErrorMessage
                      name="middleName"
                      component="div"
                      className="error  text-red-600"
                    />
                  </div>
                </div>

                <div className="flex  place-content-center gap-6">
                  <div className="">
                    <Field
                      className=" w-80 p-2 border border-gray-400  hover:border-red-600"
                      type="surName"
                      id="surName"
                      name="surName"
                      placeholder="Enter your surName"
                    />
                    <ErrorMessage
                      name="surName"
                      component="div"
                      className="error  text-red-600"
                    />
                  </div>
                  {showDOBInput ? (
                    <div>
                      <Field
                      onClick= {()=>{setShowDOBInput(!showDOBInput)}}
                        className=" w-80 p-2 border border-gray-400 hover:border-red-600"
                        type="text"
                        id="dob"
                        name="dob"
                        placeholder="Date of Birth"
                      />
                      <ErrorMessage
                        name="dob"
                        component="div"
                        className="error  text-red-600"
                      />
                    </div>
                  ) : (
                    <div>
                      <Field
                        className=" w-80 p-2 border border-gray-400 hover:border-red-600"
                        type="date"
                        id="dob"
                        name="dob"
                        placeholder="Date of Birth"
                        onBlur={() => {
                          setShowDOBInput(true);
                        } }
                      />
                      <ErrorMessage
                        name="dob"
                        component="div"
                        className="error  text-red-600"
                      />
                    </div>
                  )}
                  <div>
                    <Field
                      className=" border border-gray-400 hover:border-red-600 w-80 p-2"
                      as="select"
                      id="gender"
                      name="gender"
                      onChange={handleChange}
                    >
                      <option value="Gender">Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </Field>
                    <ErrorMessage
                      name="gender"
                      component="div"
                      className="error  text-red-600"
                    />
                  </div>
                </div>

                <div className="flex  place-content-center gap-6">
                  <div className="">
                    <Field
                      className=" w-80 p-2 border border-gray-400  hover:border-red-600"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error  text-red-600"
                    />
                  </div>
                  <div>
                    <Field
                      className=" w-80 p-2 border border-gray-400 hover:border-red-600"
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="(+234) 80x xxx xxxx"
                    />
                    <ErrorMessage
                      name="phoneNumber"
                      component="div"
                      className="error  text-red-600"
                    />
                  </div>

                  <div>
                    <Field
                      className=" w-80 p-2 border border-gray-400  hover:border-red-600"
                      type="InsuranceStartDate"
                      id="InsuranceStartDate"
                      name="InsuranceStartDate"
                      placeholder="Insurance Start Date"
                    />
                    <ErrorMessage
                      name="InsuranceStartDate"
                      component="div"
                      className="error  text-red-600"
                    />
                  </div>
                </div>
                <div className="flex  place-content-center gap-6">
                  <div className="">
                    <Field
                      className=" border border-gray-400 hover:border-red-600 w-80 p-2"
                      as="select"
                      id="gender"
                      name="gender"
                      onChange={handleChange}
                    >
                      <option value="Identification Type">
                        Identification Type
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </Field>
                    <ErrorMessage
                      name="identificationType"
                      component="div"
                      className="error  text-red-600"
                    />
                  </div>
                  <div>
                    <Field
                      className=" w-80 p-2 border border-gray-400 hover:border-red-600"
                      type="text"
                      id="identificationNumber"
                      name="identificationNumber"
                      placeholder="Identification Number"
                    />
                    <ErrorMessage
                      name="identificationNumber"
                      component="div"
                      className="error  text-red-600"
                    />
                  </div>

                  <div>
                    <Field
                      className=" w-80 p-2 border border-gray-400 hover:border-red-600"
                      type="file"
                      id="identificationNumber"
                      name="identificationNumber"
                      placeholder="Identification Number"
                    />
                    <ErrorMessage
                      name="identificationNumber"
                      component="div"
                      className="error  text-red-600"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <button  onClick={()=>handleSubmit}>Register</button> */}
            
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CapitalBuilderForm;
