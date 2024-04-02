import ActionButton from "../components/ActionButton";
import { useGetCategoryWiseCountQuery } from "../../transaction/transactionApiSlice";

import { useNavigate } from "react-router-dom";
import { PieChart, Pie } from "recharts";

export default function HomePage() {
  const navigate = useNavigate();
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
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
      </PieChart>
      <ActionButton
        content="+"
        onClick={() => navigate("/transaction/create")}
      />
    </>
  );
}
