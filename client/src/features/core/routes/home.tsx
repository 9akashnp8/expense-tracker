import ActionButton from "../components/ActionButton";
import SummaryWidget from "../components/SummaryWidget";
import { useGetChartDataQuery } from "../../transaction/transactionApiSlice";
import WidgetWrapper from "../components/WidgetWrapper";

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
import { Grid, Spinner } from "@radix-ui/themes";

export default function HomePage() {
  const navigate = useNavigate();
  const currMonth = new Date().getMonth() + 1;
  const CATEGORY_COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const charts = [
    { chart: "monthlySummary", data: currMonth },
    { chart: "weeklySplit", data: null },
    { chart: "categorySplit", data: null },
  ];
  const { data: chartData, isLoading } = useGetChartDataQuery(
    JSON.stringify(charts),
  );

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Grid columns={"2"} rows={"2"} gap={"5"}>
      <WidgetWrapper>
        <SummaryWidget
          title="this months spend"
          summary={`₹ ${chartData?.data["monthlySummary"]}`}
        />
      </WidgetWrapper>
      <WidgetWrapper>
        <LineChart
          width={300}
          height={300}
          data={chartData?.data["weeklySplit"]}
        >
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
      </WidgetWrapper>
      <WidgetWrapper>
        <PieChart width={300} height={300}>
          <Pie
            dataKey="transaction_count"
            isAnimationActive={false}
            data={chartData?.data["categorySplit"]}
            outerRadius={80}
            fill="#8884d8"
            label={({ name }) => name}
          >
            {chartData?.data["categorySplit"]?.map(
              (_: Array<Record<string, string | number>>, index: number) => {
                return <Cell key={index} fill={CATEGORY_COLORS[index]} />;
              },
            )}
          </Pie>
        </PieChart>
      </WidgetWrapper>
    </Grid>
  );
}
