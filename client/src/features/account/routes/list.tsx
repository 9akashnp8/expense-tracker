import { Flex } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";

import { useListAccountsQuery } from "../accountApiSlice";
import AccountDetailCard from "../components/AccountDetailCard";
import ActionButton from "../../core/components/ActionButton";

export default function ListAccount() {
  const navigate = useNavigate();
  const { data } = useListAccountsQuery();

  return (
    <>
      <Flex
        direction={{
          initial: "column",
          xs: "column",
          md: "row",
        }}
        gap={"3"}
      >
        {data?.data.map((account) => (
          <AccountDetailCard key={account.id} account={account} />
        ))}
      </Flex>
      <ActionButton content="+" onClick={() => navigate("create")} />
    </>
  );
}
