import { Box } from "@mui/material";
import { useListAccountsQuery } from "../accountApiSlice";
import AccountDetailCard from "../components/AccountDetailCard";

export default function ListAccount() {
  const { data, error } = useListAccountsQuery();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: 'row'
        },
        gap: 3,
      }}
    >
      {data?.data.map((account) => (
        <AccountDetailCard account={account} /> 
      ))}
    </Box>
  );
}
