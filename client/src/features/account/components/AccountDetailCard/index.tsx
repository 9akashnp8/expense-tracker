import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { Account } from "../../types";

type Props = {
    account: Account
}

export default function ({ account }: Props) {
  const balanceColor = Math.sign(account.latest_balance) === 1 ? "green" : "red";

  return (
    <Card sx={{ flexGrow: 1 }}>
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography component="div">{account.name}</Typography>
        <Typography sx={{ color: balanceColor }}>
          {account.default_currency + " " + account.latest_balance}
        </Typography>
      </CardContent>
    </Card>
  );
}
