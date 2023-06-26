import { IFormData } from "../../types/Form.types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableHeading } from "../../components/form";
import { handleDeleteContact } from "../../handlers/handleDeleteContact";
import { DeleteContactBtn } from "../../components/buttons/DeleteContactBtn";

interface IPhoneBookTableProps {
  phonebook: IFormData[];
  phonebookDispatch: React.Dispatch<any>;
}

export const PhoneBookTable = (props: IPhoneBookTableProps): JSX.Element => {
  const { phonebook, phonebookDispatch } = props;

  return (
    <>
      {phonebook.length ? (
        <TableContainer component={Paper}>
          {/** Table */}
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            {/** Table Headings */}
            <TableHeading />

            {/** Table Body */}
            <TableBody>
              {phonebook.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell>{contact.firstName}</TableCell>
                  <TableCell>{contact.lastName}</TableCell>
                  <TableCell>{contact.phone}</TableCell>
                  <TableCell>
                    <DeleteContactBtn
                      label="Delete"
                      onClick={() =>
                        handleDeleteContact(contact.id, phonebookDispatch)
                      }
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <p>There are no contacts in your Phonebook. Please add one</p>
      )}
    </>
  );
};
