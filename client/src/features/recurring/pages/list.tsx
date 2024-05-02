import { useListConfigsQuery } from "../recurringApiSlice";

export default function RecurringConfigListPage() {
  const { data, isLoading } = useListConfigsQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Recurring Configs</h1>
      <ul>
        {data?.data?.map((config) => {
          return <li key={config.id}>{config.name}</li>;
        })}
      </ul>
    </>
  );
}
