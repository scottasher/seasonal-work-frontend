import { renderValidations } from "../../hooks/useForm";

const formConfig = [
  { id: "email", required: true },
  { id: "password", required: true },
];

export const FORM_OPTIONS = { validations: renderValidations(formConfig) };
