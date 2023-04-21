import { useState } from "react";

import { useLoaderData } from "react-router-dom";
import { useFormik } from 'formik';

import BasicDateTimePicker from "../../components/BasicDateTimePicker";
import BasicSelect from "../../components/Select";
import { Alert } from "../../components/Alert";
import { fetchCategories, fetchAccounts } from "../../lib/dataFetch";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';

export default function TransactionForm() {
    const [open, setOpen] = useState(false);
    const { categories, accounts } = useLoaderData()
    const formik = useFormik({
        initialValues: {
            item: '',
            amount: '',
            transaction_date_time: null,
            category: '',
            account: '',
            label: '',
            notes: ''
        },
        onSubmit: async function (values) {
            console.log(values)

            const response = await fetch('http://127.0.0.1:8000/transactions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(values, null, 4)
            })

            if (response.ok) {
                setOpen(true);
            }
        },
    })

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Box
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' }
            }}
            display='grid'
            gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }}
            justifyItems='center'
            alignItems='center'
            gap={{ xs: '.75rem', md: '0px' }}
            gridTem
            noValidate
            autoComplete="off"
        >
            <TextField
                id="item"
                name="item"
                label="Item/Payee"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.item}
            />
            <TextField
                id="amount"
                name="amount"
                variant="outlined"
                label="Amount"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.amount}
            />
            <BasicDateTimePicker
                label={'Transaction Date'}
                formik={formik}
            />
            <BasicSelect
                id='category'
                label='Category'
                data={categories}
                value={formik.values.category}
                handleChange={formik.handleChange}
            />
            <BasicSelect
                id='account'
                label='Account'
                data={accounts}
                value={formik.values.account}
                handleChange={formik.handleChange}
            />
            <TextField
                id="label"
                name="label"
                variant="outlined"
                label="Label"
                onChange={formik.handleChange}
                value={formik.values.label}
            />
            <TextField
                id="notes"
                name="notes"
                variant="outlined"
                label="Notes"
                onChange={formik.handleChange}
                value={formik.values.notes}
            />
            <Button
                variant="contained"
                type="submit"
            >
                Create
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Transaction has been successfully created!
                </Alert>
            </Snackbar>
        </Box>
    );
}

export async function loader() {
    const [categories, accounts] = await Promise.all([
        fetchCategories(),
        fetchAccounts()
    ])
    return { categories, accounts }
}