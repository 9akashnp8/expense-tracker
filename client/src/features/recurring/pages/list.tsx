import { useListConfigsQuery, useGetStatsQuery } from "../recurringApiSlice";
import CountCard from "../components/CountCard";

import { Heading, Table, Spinner, Flex, Button } from "@radix-ui/themes";
import { PlusIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

export default function RecurringConfigListPage() {
  const { data: configs, isLoading } = useListConfigsQuery();
  const { data: stats } = useGetStatsQuery();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Flex justify={"between"} align="center">
        <Heading as="h1" size="7">
          Recurring Configs
        </Heading>
        <Link to="create">
          <Button size="3">
            <PlusIcon /> New Config
          </Button>
        </Link>
      </Flex>
      {/* <Separator my={"5"} style={{ width: "100%" }}/> */}
      <Heading size="4" my="4" weight="medium">
        Monthly Overview
      </Heading>
      <Flex align="stretch" gap="5">
        <CountCard
          name="Expense"
          value={
            Number(
              stats?.data?.find((item) => item.transaction_type == "expense")
                ?.total_amount,
            ) || 0
          }
        />
        <CountCard
          name="Transfer"
          value={
            Number(
              stats?.data?.find((item) => item.transaction_type == "transfer")
                ?.total_amount,
            ) || 0
          }
        />
        <CountCard
          name="Income"
          value={
            Number(
              stats?.data?.find((item) => item.transaction_type == "income")
                ?.total_amount,
            ) || 0
          }
        />
      </Flex>
      <Heading size="4" my="4" weight="medium">
        Configs
      </Heading>
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
