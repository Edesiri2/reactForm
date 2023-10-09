// import { object, string } from "yup";
import Joi from "joi";

const validator = (schema: any) => (payload: any) =>
  schema.validate(payload, { abortEarly: false });

const personalInformation = Joi.object({
  title: Joi.string().required(),
  firstName: Joi.string().required(),
  middleName: Joi.string().required(),
  surname: Joi.string().required(),
  dob: Joi.string().required(),
  gender: Joi.string().required(),
  email: Joi.string().required(),
  phoneNumber: Joi.string().required(),
  insuranceStartDate: Joi.string().required(),
  IdType: Joi.string().required(),
  IdNumber: Joi.string().required(),
  file: Joi.string().required(),
});

const personalInformationValidation = validator(personalInformation);

export default personalInformationValidation;
