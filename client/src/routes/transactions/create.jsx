import {
    Input,
    Typography
} from "antd";
import { useLoaderData } from "react-router-dom";

import BasicDateTimePicker from "../../components/BasicDateTimePicker";
import GroupedSelect from "../../components/Select";
import InputWrapper from "../../components/InputWrapper";
import { fetchCategories, fetchAccounts } from "../../lib/dataFetch";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function TransactionForm() {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' }
            }}
            display='grid'
            gridTemplateColumns={{xs: '1fr', md: '1fr 1fr'}}
            justifyItems='center'
            alignItems='center'
            gap={{xs: '.75rem', md: '0px'}}
            gridTem
            noValidate
            autoComplete="off"
        >
            <TextField
                id="item"
                name="item"
                label="Item/Payee"
                variant="outlined"
            />
            <TextField
                id="amount"
                name="amount"
                variant="outlined"
                label="Amount"
                type="number"
            />
            <BasicDateTimePicker />
            <GroupedSelect
                label='Category'
            />
            <GroupedSelect
                label='Account'
            />
            <TextField
                id="label"
                name="label"
                variant="outlined"
                label="Label"
            />
            <TextField
                id="notes"
                name="notes"
                variant="outlined"
                label="Notes"
            />
            <Button
                variant="contained"
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