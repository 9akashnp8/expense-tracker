import { Spinner } from "@radix-ui/themes";
import { useGetMonthlySpendQuery } from "../../api/get-monthly-spend";

export default function MonthlySpendWidget() {
  const { data, isLoading } = useGetMonthlySpendQuery();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="SummaryWidget-wrapper">
      <p className="SummaryWidget-title">This months spend</p>
      <h1 className="SummaryWidget-summary">
        {new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "INR",
        }).format(data?.data?.sum ? +data.data.sum : 0)}
      </h1>
    </div>
  );
}
