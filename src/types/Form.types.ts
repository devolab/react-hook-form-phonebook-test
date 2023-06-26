// ZOD
import { z } from "zod";
import { formSchema } from "../helpers/formSchema";

// zod type
export type FormSchemaType = z.infer<typeof formSchema>;

export interface IFormData {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
}

export interface IFormErrors {
  id?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
}
