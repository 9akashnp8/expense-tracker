import { useListAccountsQuery } from "../../account/accountApiSlice";
import { useListLabelsQuery } from "../../label/labelApiSlice";
import { useListCategoriesQuery } from "../../category/categoryApiSlice";

import * as Switch from "@radix-ui/react-switch";

function AccountSelect() {
  const { data } = useListAccountsQuery();

  return (
    <select name="account" id="account">
      {data?.data?.map((account) => (
        <option key={account.id} value={account.id}>
          {account.name}
        </option>
      ))}
    </select>
  );
}

function CategorySelect() {
  const { data } = useListCategoriesQuery();

  return (
    <select name="category" id="category">
      {data?.data?.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
}

function LabelSelect() {
  const { data } = useListLabelsQuery();

  return (
    <select name="label" id="label">
      {data?.data?.map((label) => (
        <option key={label.id} value={label.id}>
          {label.name}
        </option>
      ))}
    </select>
  );
}

export default function TransactionCreatePage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function handleSubmit(e: any) {
    e.preventDefault();
    const item = e.target["item"].value;
    const amount = +e.target["amount"].value;
    const account = +e.target["account"].value;
    const isExpenseEl = document.getElementsByName(
      "isExpense",
    )[0] as HTMLInputElement;
    const isExpense = isExpenseEl.checked;
    const category = +e.target["category"].value;
    const label = +e.target["label"].value;
    const notes = e.target["notes"].value;
    const body = {
      item,
      amount,
      account,
      is_expense: isExpense,
      category,
      label,
      notes,
    };

    const response = await fetch("http://localhost:3000/transactions", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      window.location.href = "";
    }
  }

  return (
    <>
      <h1>Add Expense</h1>
      <form method="POST" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="item">Name</label>
          <input type="text" name="item" id="item" required />
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input type="number" name="amount" id="amount" required />
        </div>
        <div>
          <label htmlFor="account">Amount</label>
          <AccountSelect />
        </div>
        <div>
          <label htmlFor="isExpense" style={{ paddingRight: 15 }}>
            Is Expense
          </label>
          <Switch.Root className="SwitchRoot" id="isExpense" name="isExpense">
            <Switch.Thumb className="SwitchThumb" />
          </Switch.Root>
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <CategorySelect />
        </div>
        <div>
          <label htmlFor="label">Label</label>
          <LabelSelect />
        </div>
        <div>
          <label htmlFor="notes">Notes</label>
          <textarea id="notes" name="notes" rows={3} cols={10}></textarea>
        </div>
        <button>Add</button>
      </form>
    </>
  );
}
