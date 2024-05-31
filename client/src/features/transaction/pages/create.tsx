import { useListAccountsQuery } from "../../account/accountApiSlice";
import { useListLabelsQuery } from "../../label/labelApiSlice";
import { useListCategoriesQuery } from "../../category/categoryApiSlice";

import * as Form from "@radix-ui/react-form";
import { Button, Select, Text, TextArea, RadioCards } from "@radix-ui/themes";
import { FormEvent } from "react";

function AccountSelect() {
  const { data } = useListAccountsQuery();

  return (
    <Select.Root defaultValue="" name="account">
      <Select.Trigger />
      <Select.Content>
        <Select.Group>
          <Select.Label>Accounts</Select.Label>
          {data?.data.map((account) => (
            <Select.Item key={account.id} value={`${account.id}`}>
              {account.name}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
}

function CategorySelect() {
  const { data } = useListCategoriesQuery();

  return (
    <Select.Root defaultValue="" name="category">
      <Select.Trigger />
      <Select.Content>
        <Select.Group>
          <Select.Label>Category</Select.Label>
          {data?.data?.map((category) => (
            <Select.Item key={category.id} value={`${category.id}`}>
              {category.name}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
}

function LabelSelect() {
  const { data } = useListLabelsQuery();

  return (
    <Select.Root defaultValue="" name="label">
      <Select.Trigger />
      <Select.Content>
        <Select.Group>
          <Select.Label>Label</Select.Label>
          {data?.data?.map((label) => (
            <Select.Item key={label.id} value={`${label.id}`}>
              {label.name}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
}

export default function TransactionCreatePage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);

    const item = formData.get("item");
    const amount = Number(formData.get("amount"));
    const account = Number(formData.get("account"));
    const isExpense = formData.get("isExpense") == "true" ? true : false;
    const category = Number(formData.get("category"));
    const label = Number(formData.get("label"));
    const notes = formData.get("notes");
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
      <Form.Root onSubmit={handleSubmit}>
        <Form.Field className="FormField" name="item">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Form.Label className="FormLabel">Item</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
              Please name the transaction
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input className="Input" type="text" required />
          </Form.Control>
        </Form.Field>

        <Form.Field className="FormField" name="amount">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Form.Label className="FormLabel">Amount</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
              Please enter the amount
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input className="Input" type="number" required />
          </Form.Control>
        </Form.Field>

        <Form.Field className="FormField" name="account">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Form.Label className="FormLabel">Account</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
              Please select the account
            </Form.Message>
          </div>
          <Form.Control asChild>
            <AccountSelect />
          </Form.Control>
        </Form.Field>

        <Form.Field className="FormField" name="isExpense">
          <Form.Label className="FormLabel">Is Expense</Form.Label>
          <Form.Control asChild>
            <RadioCards.Root
              defaultValue="1"
              columns={{ initial: "1", sm: "3" }}
            >
              <RadioCards.Item value="true">
                <Text>Expense</Text>
              </RadioCards.Item>
              <RadioCards.Item value="false">
                <Text>Income</Text>
              </RadioCards.Item>
            </RadioCards.Root>
          </Form.Control>
        </Form.Field>

        <Form.Field className="FormField" name="category">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Form.Label className="FormLabel">Category</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
              Please select the category
            </Form.Message>
          </div>
          <Form.Control asChild>
            <CategorySelect />
          </Form.Control>
        </Form.Field>

        <Form.Field className="FormField" name="label">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Form.Label className="FormLabel">Label</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
              Please select the label
            </Form.Message>
          </div>
          <Form.Control asChild>
            <LabelSelect />
          </Form.Control>
        </Form.Field>

        <Form.Field className="FormField" name="notes">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Form.Label className="FormLabel">Notes</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
              Please enter any notes
            </Form.Message>
          </div>
          <Form.Control asChild>
            <TextArea placeholder="Notes…" />
          </Form.Control>
        </Form.Field>

        <Form.Submit asChild>
          <Button style={{ marginTop: 10 }} size={"3"}>
            Create Transaction
          </Button>
        </Form.Submit>
      </Form.Root>
    </>
  );
}
