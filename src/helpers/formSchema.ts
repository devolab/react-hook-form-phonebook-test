import { z } from "zod";

// List of regex and errors
const required = {
  regex: /(^$|^.*@.*\..*$)/,
  errorMsg: "This field is required"
};
const noNumbers = {
  regex: /\d/,
  errorMsg: "No numbers allowed"
};
const noSpecialCharacters = {
  regex: /^[a-zA-Z0-9]{4,10}$/,
  errorMsg: "No special characters allowed"
};

// Zod Schema
export const formSchema = z.object({
  firstName: z
    .string()
    .min(1, required.errorMsg)
    .max(100)
    .refine((value) => !noNumbers.regex.test(value), {
      message: noNumbers.errorMsg
    })
    .refine((value) => noSpecialCharacters.regex.test(value), {
      message: noSpecialCharacters.errorMsg
    }),
  lastName: z
    .string()
    .min(1, required.errorMsg)
    .max(100)
    .refine((value) => !noNumbers.regex.test(value), {
      message: noNumbers.errorMsg
    })
    .refine((value) => noSpecialCharacters.regex.test(value), {
      message: noSpecialCharacters.errorMsg
    }),
  phone: z.string().min(1, required.errorMsg).max(20)
});
