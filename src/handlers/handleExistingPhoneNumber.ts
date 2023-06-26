import { IFormData } from "../types/Form.types";

export const handleExistingPhoneNumber = (
  phonebook: IFormData[],
  newContact: IFormData
) => {
  // Stops from adding users with the same tel number
  const isPhoneNumberExisting = phonebook.some(
    (existingContact) => existingContact.phone === newContact.phone
  );

  if (isPhoneNumberExisting) return true;

  return false;
};
