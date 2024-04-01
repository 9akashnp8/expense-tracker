import type { Transaction } from "../../types";

type Props = {
  transaction: Transaction;
};

export default function TransactionDetailCard({ transaction }: Props) {
  return (
    <div>
      <h3>{transaction.amount}</h3>
      <p>{transaction.item}</p>
    </div>
  );
}
