import { IFormData } from "../types/Form.types";
import { handleExistingPhoneNumber } from "../handlers/handleExistingPhoneNumber";

export type PhonebookState = IFormData[];
export const updatedContactList: IFormData[] = [];

// Add Contact Action
type AddContactAction = {
  type: "ADD_CONTACT";
  payload: IFormData;
};

// Delete Contact Action
type DeleteContactAction = {
  type: "DELETE_CONTACT";
  payload: { id: string };
};

export type PhonebookAction = AddContactAction | DeleteContactAction;

export function phonebookReducer(
  state: IFormData[],
  action: PhonebookAction
): PhonebookState {
  switch (action.type) {
    // ADD
    case "ADD_CONTACT": {
      // handle existing tel number
      const isNewContactNumberActive = handleExistingPhoneNumber(
        state,
        action.payload
      );
      if (isNewContactNumberActive) {
        alert("THis number already exist. Please change the number");
        return [...state];
      }

      // Add new contact to the list
      return [...state, action.payload];
    }

    // DELETE
    case "DELETE_CONTACT":
      return state.filter((contact) => contact.id !== action.payload.id);

    default:
      return state;
  }
}
