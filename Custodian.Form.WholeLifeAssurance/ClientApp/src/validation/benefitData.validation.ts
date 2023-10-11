import { object, string } from "yup";

const benefitDataValidation = object({
  amountToSave: string().required(),
  paymentFrequency: string().required(),
  policyTerm: string().required(),
  targetAmount: string().required(),
  lifeSumAssured: string().required(),
});

export default benefitDataValidation;
