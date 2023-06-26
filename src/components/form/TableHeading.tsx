import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const headings: string[] = [
  "First Name",
  "Last Name",
  "Phone Number",
  "actions"
];

const TableHeading = () => {
  return (
    <TableHead>
      <TableRow>
        {headings.map((head, idx) => (
          <TableCell key={idx}>{head}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeading;
