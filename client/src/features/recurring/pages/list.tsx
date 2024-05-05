import { useListConfigsQuery } from "../recurringApiSlice";

import { Table } from "@radix-ui/themes";

export default function RecurringConfigListPage() {
  const { data: configs, isLoading } = useListConfigsQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Recurring Configs</h1>
      <Table.Root size="3" variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Type</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Cycle</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Amount</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {configs?.data?.map((config) => (
            <Table.Row key={config.id}>
              <Table.RowHeaderCell>{config.name}</Table.RowHeaderCell>
              <Table.Cell>{config.transaction_type}</Table.Cell>
              <Table.Cell>{config.cycle}</Table.Cell>
              <Table.Cell>{config.amount}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
}
