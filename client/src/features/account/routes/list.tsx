import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useListAccountsQuery } from "../accountApiSlice";

export default function ListAccount() {
  const { data, error } = useListAccountsQuery();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="account list table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Latest Balance</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="center">Currency</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {data?.data.map((account) => (
                <TableRow
                    key={account.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        {account.name}
                    </TableCell>
                    <TableCell align="center">{account.latest_balance}</TableCell>
                    <TableCell align="center">{account.type}</TableCell>
                    <TableCell align="center">{account.default_currency}</TableCell>
                </TableRow> 
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
