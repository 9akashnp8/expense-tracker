import {
    Input,
    Typography
} from "antd";
import { useLoaderData } from "react-router-dom";

import DateTimePicker from "../../components/DateTimePicker";
import InputWrapper from "../../components/InputWrapper";
import CategorySelect from "../../components/CategorySelect";
import { fetchCategories, fetchAccounts } from "../../lib/dataFetch";

const { Title, Text } = Typography;

export default function TransactionForm() {
    const data = useLoaderData()
    console.log(data)
    return (
        <div
            style={{
                display: 'grid',
                placeItems: 'center',
                alignItems: 'center',
                gap: '1rem',
                padding: '3rem 5rem 0rem 5rem'
            }}
        >
            <form action="">
                <Title>Create Transaction</Title>
                <InputWrapper>
                    <Text>Item/Payee</Text>
                    <Input style={{width: '100%'}} placeholder="Groceries"/>
                </InputWrapper>
                <InputWrapper>
                    <Text>Amount</Text>
                    <Input style={{width: '100%'}} placeholder="300 INR"/>
                </InputWrapper>
                <InputWrapper>
                    <Text>Date & Time</Text>
                    <DateTimePicker />
                </InputWrapper>
                <InputWrapper>
                    <Text>Category</Text>
                    <CategorySelect data={data.categories} />
                </InputWrapper>
                <InputWrapper>
                    <Text>Account</Text>
                    <CategorySelect data={data.accounts} />
                </InputWrapper>
            </form>
        </div>
    )
}

export async function loader() {
    const [ categories, accounts ] = await Promise.all([
        fetchCategories(),
        fetchAccounts()
    ])
    return { categories, accounts}
}