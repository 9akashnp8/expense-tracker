import { Card, Flex, Text } from "@radix-ui/themes";

import { Account } from "../../types";

type Props = {
  account: Account;
};

export default function AccountDetailCard({ account }: Props) {
  const balanceColor =
    Math.sign(account.latest_balance) === 1 ? "green" : "red";

  return (
    <Card style={{ flexGrow: 1 }}>
      <Flex align={"center"} justify={"between"}>
        <Text as="div">{account.name}</Text>
        <Text color={balanceColor}>
          {`${account.default_currency} ${account.latest_balance}`}
        </Text>
      </Flex>
    </Card>
  );
}
