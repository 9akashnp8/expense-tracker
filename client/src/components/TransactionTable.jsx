import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function TransactionTable({transactions}) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Item/Payee</TableCell>
                        <TableCell align="center">Amount</TableCell>
                        <TableCell align="center">Category</TableCell>
                        <TableCell align="center">Amount</TableCell>
                        <TableCell align="center">Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {transactions.map((transaction) => (
                        <TableRow
                            key={transaction.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {transaction.item}
                            </TableCell>
                            <TableCell align="center">{transaction.amount}</TableCell>
                            <TableCell align="center">{transaction.category}</TableCell>
                            <TableCell align="center">{transaction.amount}</TableCell>
                            <TableCell align="center">{transaction.transaction_date_time}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}