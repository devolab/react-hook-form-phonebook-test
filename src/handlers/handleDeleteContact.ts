export const handleDeleteContact = (
  id: string,
  phonebookDispatch: React.Dispatch<any>
) => {
  phonebookDispatch({
    type: "DELETE_CONTACT",
    payload: { id }
  });
};
