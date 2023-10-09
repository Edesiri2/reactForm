import { object, string } from "yup";

const personalInformationValidation = object({
  title: string().required("invalid title"),
  firstName: string().required(),
  middleName: string().required(),
  surname: string().required(),
  dob: string().required(),
  gender: string().required(),
  email: string().required(),
  phoneNumber: string().required(),
  insuranceStartDate: string().required(),
  IdType: string().required(),
  IdNumber: string().required(),
  file: string().required(),
});

export default personalInformationValidation;
