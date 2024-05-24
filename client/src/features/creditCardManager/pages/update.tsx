import { useParams, useNavigate } from "react-router-dom";

import { useGetCCSettingQuery } from "../api/get-credit-card-setting";
import { useListAccountsQuery } from "../../account/accountApiSlice";
import { FormEvent } from "react";

export default function UpdateCreditCardSettingPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: ccSetting } = useGetCCSettingQuery(id!);
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
      `http://localhost:3000/management/credit-card-settings/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
    );

    if (response.ok) {
      navigate("/credit-card-settings");
    }
  }

  return (
    <>
      <h1>Update Credit Card Setting</h1>
      <form method="POST" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="card">Card</label>
          <select name="card" id="card">
            <option value="">Select Card</option>
            {ccSetting?.data ? (
              <option value={ccSetting.data.card.id} selected>
                {ccSetting.data.card.name}
              </option>
            ) : (
              accounts?.data
                .filter((account) => account.type.name == "Credit Card")
                .map((account) => (
                  <option key={account.id} value={account.id}>
                    {account.name}
                  </option>
                ))
            )}
          </select>
        </div>
        <div>
          <label htmlFor="creditLimit">Credit Limit</label>
          <input
            type="number"
            name="creditLimit"
            id="creditLimit"
            defaultValue={ccSetting?.data.credit_limit}
          />
        </div>
        <div>
          <label htmlFor="desiredUtilization">Desired Utilization</label>
          <input
            type="number"
            name="desiredUtilization"
            id="desiredUtilization"
            defaultValue={ccSetting?.data.desired_utilization_ratio}
          />
        </div>
        <div>
          <label htmlFor="reminderDate">Reminder Date</label>
          <input
            type="date"
            name="reminderDate"
            id="reminderDate"
            defaultValue={ccSetting?.data.reminder_date?.toString()}
          />
        </div>
        <button>Update</button>
      </form>
    </>
  );
}
