import { useListAccountTypesQuery } from "../accountApiSlice";
import ActionButton from "../../core/components/ActionButton";

import * as Label from "@radix-ui/react-label";
import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";

function AccountTypeSelection() {
  const { data: accountTypes } = useListAccountTypesQuery();
  return (
    <Select.Root name="accountType">
      <Select.Trigger className="SelectTrigger" aria-label="Food">
        <Select.Value placeholder="Select a fruit…" />
        <Select.Icon className="SelectIcon">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="SelectContent">
          <Select.ScrollUpButton className="SelectScrollButton">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="SelectViewport">
            {accountTypes?.data?.map((accountType) => (
              <Select.Item value={`${accountType.id}`} key={accountType.id}>
                <Select.ItemText>{accountType.name}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton className="SelectScrollButton">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
export default function CreateAccount() {
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function handleSubmit(e: any) {
    e.preventDefault();
    const accountName = e.target["accountName"].value;
    const accountType = +e.target["accountType"].value;
    const openingDate = e.target["openingDate"].value;
    const latestBalance = +e.target["latestBalance"].value;
    const defaultCurrency = e.target["defaultCurrency"].value;

    const body = {
      name: accountName,
      type: accountType,
      opening_date: openingDate,
      latest_balance: latestBalance,
      default_currency: defaultCurrency,
    };

    const response = await fetch("http://localhost:3000/accounts", {
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
      <h1>Create Account</h1>
      <form method="POST" onSubmit={handleSubmit}>
        <div>
          <Label.Root htmlFor="accountName">Account Name</Label.Root>
          <input type="text" id="accountName" name="accountName" required />
        </div>
        <div>
          <Label.Root htmlFor="accountType">Account Type</Label.Root>
          <AccountTypeSelection />
        </div>
        <div>
          <Label.Root htmlFor="openingDate">Opening Date</Label.Root>
          <input type="date" id="openingDate" name="openingDate" required />
        </div>
        <div>
          <Label.Root htmlFor="latestBalance">Latest Balance</Label.Root>
          <input
            type="number"
            id="latestBalance"
            name="latestBalance"
            required
          />
        </div>
        <div>
          <Label.Root htmlFor="defaultCurrency">Default Currency</Label.Root>
          <input
            type="text"
            id="defaultCurrency"
            name="defaultCurrency"
            required
          />
        </div>
        <button>Submit</button>
      </form>
      <ActionButton content="Back" onClick={() => navigate("/account")} />
    </>
  );
}
