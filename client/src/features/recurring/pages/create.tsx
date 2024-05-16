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

    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);

    const body = {
      name: formData.get("name"),
      transaction_type: formData.get("transactionType"),
      cycle: formData.get("transactionCycle"),
      from_account: formData.get("debitAccount") || null,
      to_account: formData.get("creditAccount") || null,
      amount: formData.get("amount"),
      category: formData.get("category") || null,
      notes: formData.get("notes"),
    };

    const response = await fetch("http://localhost:3000/recurring", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      target.reset();
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
            <option value={""}>Select Account</option>
            {accounts?.data?.map((account) => (
              <option key={account.id} value={account.id}>
                {account.name}
              </option>
            ))}
          </select>
        </div>
        <div hidden={isExpense}>
          <label htmlFor="creditAccount">Credit Account</label>
          <select name="creditAccount" id="creditAccount">
            <option value={""}>Select Account</option>
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
            <option value={""}>Select Category</option>
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
