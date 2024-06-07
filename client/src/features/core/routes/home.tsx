import SummaryWidget from "../components/SummaryWidget";
import LastWeekSpendChart from "../components/LastWeekSpendChart";
import CategorySpendChart from "../components/CategorySpendChart";
import WidgetWrapper from "../components/WidgetWrapper";
import GenAIInsight from "../components/GenAIInsight";

import { Grid } from "@radix-ui/themes";

export default function HomePage() {
  return (
    <>
      <GenAIInsight insight="Your Transactions have increased by 10% with changes in most spend in X category" />
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
