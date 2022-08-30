import * as yup from "yup";
import format from "string-template";
import {
  EMAIL_INVALID,
  MAX_LENGTH_MESSAGE,
  REQUIRE_MESSAGE
} from "@/constants";
import { buildNameSchema } from "@/helpers";

export const initialValues = {
  email: "",
  firstName: "",
  lastName: "",
  phoneNumber: 0
};

const phoneNumberMaxLengthMessage = format(MAX_LENGTH_MESSAGE, [
  "Phone number",
  10
]);

export const FORM_FIELDS = [
  {
    id: "firstName",
    name: "firstName",
    label: "First Name",
    type: "text",
    validation: buildNameSchema("First Name")
  },
  {
    id: "lastName",
    name: "lastName",
    label: "Last Name",
    type: "text",
    validation: buildNameSchema("Last Name")
  },
  {
    id: "email",
    name: "email",
    label: "Email",
    type: "email",
    validation: yup
      .string()
      .required(format(REQUIRE_MESSAGE, ["Email"]))
      .email(EMAIL_INVALID)
  },
  {
    id: "phoneNumber",
    name: "phoneNumber",
    label: "Phone Number",
    type: "number",
    // Max 10 digits
    validation: yup
      .number()
      .required()
      .min(1000000000, phoneNumberMaxLengthMessage)
      .max(9999999999, phoneNumberMaxLengthMessage)
  }
] as const;

export const buildValidationSchema = () => {
  const schemas = FORM_FIELDS.reduce((schema, field) => {
    schema[field.name] = field.validation;
    return schema;
  }, {} as { [index: string]: any });
  return yup.object(schemas);
};
