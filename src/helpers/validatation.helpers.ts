import * as yup from "yup";
import { FORM_FIELDS } from "@/components/TableOrder/constants";
import format from "string-template";
import { MAX_LENGTH_MESSAGE, REQUIRE_MESSAGE } from "@/constants";

export const buildNameSchema = (fieldName: string) => {
  return yup
    .string()
    .required(format(REQUIRE_MESSAGE, [fieldName]))
    .min(4, format(MAX_LENGTH_MESSAGE, [fieldName, 4]))
    .max(20, format(MAX_LENGTH_MESSAGE, [fieldName, 20]));
};
