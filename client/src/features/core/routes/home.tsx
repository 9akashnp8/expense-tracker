import ActionButton from "../components/ActionButton";
import { useGetCategoryWiseCountQuery } from "../../transaction/transactionApiSlice";

import { useNavigate } from "react-router-dom";
import { PieChart, Pie, Cell } from "recharts";

export default function HomePage() {
  const navigate = useNavigate();
  const CATEGORY_COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const { data, isLoading } = useGetCategoryWiseCountQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Home</h1>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="transaction_count"
          isAnimationActive={false}
          data={data?.data}
          outerRadius={80}
          fill="#8884d8"
          label={({ name }) => name}
        >
          {data?.data?.map((_, index: number) => {
            return <Cell key={index} fill={CATEGORY_COLORS[index]} />;
          })}
        </Pie>
      </PieChart>
      <ActionButton
        content="+"
        onClick={() => navigate("/transaction/create")}
      />
    </>
  );
}
