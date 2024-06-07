import SummaryWidget from "../components/SummaryWidget";
import LastWeekSpendChart from "../components/LastWeekSpendChart";
import CategorySpendChart from "../components/CategorySpendChart";
import WidgetWrapper from "../components/WidgetWrapper";
import GenAIInsight from "../components/GenAIInsight";
import { useGetInsightsQuery } from "../api/get-dashboard-genai-insights";

import { Grid, Spinner } from "@radix-ui/themes";

export default function HomePage() {
  const { data, isLoading } = useGetInsightsQuery();

  return (
    <>
      <GenAIInsight insight={isLoading ? <Spinner /> : data?.data || ""} />
      <Grid columns={{ xs: "1", md: "2" }} rows={"1fr 1fr"} gap={"5"}>
        <WidgetWrapper>
          <SummaryWidget />
        </WidgetWrapper>
        <WidgetWrapper>
          <LastWeekSpendChart />
        </WidgetWrapper>
        <WidgetWrapper>
          <CategorySpendChart />
        </WidgetWrapper>
      </Grid>
    </>
  );
}
