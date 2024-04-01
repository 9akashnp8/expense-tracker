import ActionButton from "../../core/components/ActionButton";
import TransactionDetailCard from "../components/TransactionDetailCard";
import { useListTransactionsQuery } from "../transactionApiSlice";

import { useNavigate } from "react-router-dom";
export default function TransactionListPage() {
  const navigate = useNavigate();
  const { data, isLoading } = useListTransactionsQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Transaction List</h1>
      <ul>
        {data?.data?.map((txn) => (
          <li key={txn.id}>
            <TransactionDetailCard transaction={txn} />
          </li>
        ))}
      </ul>
      <ActionButton content="+" onClick={() => navigate("create")} />
    </>
  );
}
