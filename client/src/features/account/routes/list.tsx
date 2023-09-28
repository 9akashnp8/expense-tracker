import { useListAccountsQuery } from "../accountApiSlice";
import AccountDetailCard from "../components/AccountDetailCard";

export default function ListAccount() {
  const { data, error } = useListAccountsQuery();

  return (
    <>
      {data?.data.map((account) => (
        <AccountDetailCard account={account} /> 
      ))}
    </>
  );
}
