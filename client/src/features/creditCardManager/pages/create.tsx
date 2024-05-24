import { FormEvent } from "react";
import { useListAccountsQuery } from "../../account/accountApiSlice";

export default function CreditCardManagerCreatePage() {
  const { data: accounts } = useListAccountsQuery();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);

    const body = {
      card: formData.get("card"),
      credit_limit: formData.get("creditLimit"),
      desired_utilization_ratio: formData.get("desiredUtilization"),
      reminder_date: formData.get("reminderDate"),
    };

    const response = await fetch(
      "http://localhost:3000/management/credit-card-settings",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
    );

    if (response.ok) {
      target.reset();
    } else {
      console.error(`Error when created credit card setting: ${response.text}`);
    }
  }
  return (
    <>
      <h2>Create Credit Card Setting</h2>
      <form method="POST" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="card">Card</label>
          <select name="card" id="card">
            <option value="">Select Card</option>
            {accounts?.data
              .filter((account) => account.type.name == "Credit Card")
              .map((account) => (
                <option key={account.id} value={account.id}>
                  {account.name}
                </option>
              ))}
          </select>
        </div>
        <div>
          <label htmlFor="creditLimit">Credit Limit</label>
          <input type="number" name="creditLimit" id="creditLimit" />
        </div>
        <div>
          <label htmlFor="desiredUtilization">Desired Utilization</label>
          <input
            type="number"
            name="desiredUtilization"
            id="desiredUtilization"
            value={20}
          />
        </div>
        <div>
          <label htmlFor="reminderDate">Reminder Date</label>
          <input type="date" name="reminderDate" id="reminderDate" />
        </div>
        <button>Create</button>
      </form>
    </>
  );
}
