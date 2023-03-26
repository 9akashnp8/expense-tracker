import { useLoaderData } from "react-router-dom";

import TransactionTable from "../components/TransactionTable";
import { fetchTransactions } from "../lib/dataFetch";

export default function Transactions() {
    const transactions = useLoaderData();
    return (
        <TransactionTable transactions={transactions}/>
    )
}

export async function loader() {
    const transactions = await fetchTransactions();
    return transactions
}