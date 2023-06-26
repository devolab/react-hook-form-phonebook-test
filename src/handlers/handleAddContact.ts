import { FormSchemaType } from "../types/Form.types";

export const handleAddContact = (
  data: FormSchemaType,
  phonebookDispatch: React.Dispatch<any>
) => {
  // adding id to new contact
  const newData = {
    ...data,
    id: Math.floor(Math.random() * 100).toString()
  };

  // Dispatch to Reducer
  phonebookDispatch({
    type: "ADD_CONTACT",
    payload: newData
  });
};
