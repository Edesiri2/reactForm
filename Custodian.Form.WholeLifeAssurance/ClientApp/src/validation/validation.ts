import { object, string } from "yup";

// export const personalInformationValidation = object({
//   title: string().required(),
//   firstName: string().required(),
//   middleName: string().required(),
//   surname: string().required(),
//   dob: string().required(),
//   gender: string().required(),
//   email: string().required().email(),
//   phoneNumber: string().required(),
//   insuranceStartDate: string().required(),
//   IdType: string().required(),
//   IdNumber: string().required(),
//   file: string().required(),
// });

export const benefitDataValidation = object({
  amountToSave: string().required(),
  paymentFrequency: string().required(),
  policyTerm: string().required(),
  targetAmount: string().required(),
  lifeSumAssured: string().required(),
});
