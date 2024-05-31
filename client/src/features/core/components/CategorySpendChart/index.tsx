import { PieChart, Pie, Cell } from "recharts";

import { useGetCateorySpendQuery } from "../../api/get-category-spend";
import { Spinner } from "@radix-ui/themes";

export default function CategorySpendChart() {
  const { data, isLoading } = useGetCateorySpendQuery();
  const CATEGORY_COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <PieChart width={300} height={300}>
      <Pie
        isAnimationActive={false}
        data={data?.data}
        dataKey="sum"
        outerRadius={80}
        fill="#8884d8"
        label={({ name }) => name}
      >
        {data?.data?.map((_: Record<string, string>, index: number) => {
          return <Cell key={index} fill={CATEGORY_COLORS[index]} />;
        })}
      </Pie>
    </PieChart>
  );
}
