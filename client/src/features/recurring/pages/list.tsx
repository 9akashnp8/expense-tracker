import { useListConfigsQuery, useGetStatsQuery } from "../recurringApiSlice";
import CountCard from "../components/CountCard";

import { Table } from "@radix-ui/themes";
import { Spinner } from "@radix-ui/themes";
import { Flex } from "@radix-ui/themes";

export default function RecurringConfigListPage() {
  const { data: configs, isLoading } = useListConfigsQuery();
  const { data: stats } = useGetStatsQuery();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <h1>Recurring Configs</h1>
      <Flex align="stretch" gap="5">
        <CountCard name="Subscriptions" value={12000} />
        <CountCard name="Transfers" value={10500} />
        <CountCard name="Others" value={500} />
      </Flex>
      <Table.Root size="3" variant="surface" mt="5">
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
