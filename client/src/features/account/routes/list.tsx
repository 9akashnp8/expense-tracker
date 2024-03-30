import { Box } from "@mui/material";
import { useListAccountsQuery } from "../accountApiSlice";
import AccountDetailCard from "../components/AccountDetailCard";
import ActionButton from "../../core/components/ActionButton";
import { useNavigate } from "react-router-dom";

export default function ListAccount() {
  const navigate = useNavigate();
  const { data } = useListAccountsQuery();

  return (
    <>
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
      <ActionButton content="+" onClick={() => navigate("create")} />
    </>
  );
}
