import ActionButton from "../components/ActionButton";
import {
  useGetCategoryWiseCountQuery,
  useGetDatewiseCountQuery,
} from "../../transaction/transactionApiSlice";

import { useNavigate } from "react-router-dom";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function HomePage() {
  const navigate = useNavigate();
  const CATEGORY_COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const { data, isLoading } = useGetCategoryWiseCountQuery();
  const { data: dateWiseData } = useGetDatewiseCountQuery();

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
      <LineChart
        width={500}
        height={300}
        data={dateWiseData?.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="txn_date_time" label="Date" />
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
      <ActionButton
        content="+"
        onClick={() => navigate("/transaction/create")}
      />
    </>
  );
}
