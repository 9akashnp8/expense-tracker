import { Box } from "@mui/material";
import { useListAccountsQuery } from "../accountApiSlice";
import AccountDetailCard from "../components/AccountDetailCard";

export default function ListAccount() {
  const { data } = useListAccountsQuery();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        gap: 3,
      }}
    >
      {data?.data.map((account) => (
        <AccountDetailCard key={account.id} account={account} />
      ))}
    </Box>
  );
}
