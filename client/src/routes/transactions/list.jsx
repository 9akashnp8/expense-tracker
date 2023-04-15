import { useLoaderData } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css"

import TransactionTable from "../../components/TransactionTable";
import { fetchTransactions } from "../../lib/dataFetch";

export default function ListTransactions() {
    const transactions = useLoaderData();
    return <TransactionTable transactions={transactions}/>
}

export async function loader() {
    NProgress.start()
    const transactions = await fetchTransactions();
    NProgress.done()
    return transactions
}