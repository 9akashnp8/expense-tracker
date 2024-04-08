import ActionButton from "../components/ActionButton";
import SummaryWidget from "../components/SummaryWidget";
import {
  useGetCategoryWiseCountQuery,
  useGetDatewiseCountQuery,
  useGetMonthlyTotalQuery,
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
  const currMonth = new Date().getMonth() + 1;
  const CATEGORY_COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const { data, isLoading } = useGetCategoryWiseCountQuery();
  const { data: dateWiseData } = useGetDatewiseCountQuery();
  const { data: monthlyTotal } = useGetMonthlyTotalQuery(currMonth);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <SummaryWidget
        title="this months spend"
        summary={`₹ ${monthlyTotal?.data?.count}`}
      />
      <LineChart width={300} height={300} data={dateWiseData?.data}>
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
      <PieChart width={300} height={300}>
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
