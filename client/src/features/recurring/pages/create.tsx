import { useListAccountsQuery } from "../../account/accountApiSlice";
import { useListCategoriesQuery } from "../../category/categoryApiSlice";
import { ChangeEvent, FormEvent, useState } from "react";

export default function CreateRecurringConfig() {
  const { data: accounts } = useListAccountsQuery();
  const { data: categories } = useListCategoriesQuery();
  const [isExpense, setIsExpense] = useState<boolean>(true);

  function handleTxnTypeChange(e: ChangeEvent<HTMLSelectElement>) {
    const transactionType = e.target.value;
    if (transactionType != "transfer") {
      setIsExpense(true);
    } else {
      setIsExpense(false);
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const body = {
      name: e.target[0].value,
      transaction_type: e.target[1].value,
      cycle: e.target[2].value,
      from_account: +e.target[3].value,
      to_account: +e.target[4].value || null,
      amount: e.target[5].value,
      category: +e.target[6].value,
      notes: e.target[7].value,
    };

    const response = await fetch("http://localhost:3000/recurring", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      for (let i = 0; i <= 6; i++) {
        e.target[i].value = null;
      }
    }
  }

  return (
    <>
      <h1>Create Recurring Config</h1>
      <form method="POST" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="transactionType">Transaction Type</label>
          <select
            name="transactionType"
            id="transactionType"
            onChange={handleTxnTypeChange}
          >
            <option value="expense">Expense</option>
            <option value="transfer">Transfer</option>
            <option value="income">Income</option>
          </select>
        </div>
        <div>
          <label htmlFor="transactionCycle">Transaction Cycle</label>
          <select name="transactionCycle" id="transactionCycle">
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
        <div>
          <label htmlFor="debitAccount">Debit Account</label>
          <select name="debitAccount" id="debitAccount">
            <option value={undefined}>Select Account</option>
            {accounts?.data?.map((account) => (
              <option key={account.id} value={account.id}>
                {account.name}
              </option>
            ))}
          </select>
        </div>
        <div hidden={isExpense}>
          <label htmlFor="creditAccount">Credit Account</label>
          <select name="creditAccount" id="creditAccount" defaultValue="">
            <option value={undefined}>Select Account</option>
            {accounts?.data?.map((account) => (
              <option key={account.id} value={account.id}>
                {account.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input type="number" name="amount" id="amount" />
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <select name="category" id="category">
            {categories?.data?.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="notes">Notes</label>
          <input type="number" name="notes" id="notes" />
        </div>
        <button>Create</button>
      </form>
    </>
  );
}
