import { useLoaderData } from "react-router-dom";
import { useFormik } from 'formik';

import BasicDateTimePicker from "../../components/BasicDateTimePicker";
import BasicSelect from "../../components/Select";
import { fetchCategories, fetchAccounts } from "../../lib/dataFetch";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function TransactionForm() {
    const { categories, accounts } = useLoaderData()
    const formik = useFormik({
        initialValues: {
            item: '',
            amount: '',
            transactionDate: null,
            category: '',
            account: '',
            label: '',
            notes: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    })

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