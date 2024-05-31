import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { useGetLastWeekSpendQuery } from "../../api/get-last-week-spend";
import { Spinner } from "@radix-ui/themes";

export default function LastWeekSpendChart() {
  const { data, isLoading } = useGetLastWeekSpendQuery();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <LineChart width={300} height={300} data={data?.data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="txn_date_time" />
      <YAxis allowDecimals={false} />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="count"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
}
