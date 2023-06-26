import { useReducer } from "react";
import { PhoneBookForm } from "./PhoneBookForm";
import {
  phonebookReducer,
  PhonebookState
} from "../../reducer/phoneBookReducer";
import { PhoneBookTable } from "./PhoneBookTable";

export const PhoneBook = () => {
  // Reducer Call
  const [phonebook, phonebookDispatch] = useReducer<
    React.Reducer<PhonebookState, any>
  >(phonebookReducer, []);

  return (
    <>
      <h1>My React-Hook-Form PhoneBook</h1>
      <PhoneBookForm phonebookDispatch={phonebookDispatch} />
      <hr />
      <PhoneBookTable
        phonebook={phonebook}
        phonebookDispatch={phonebookDispatch}
      />
    </>
  );
};
