import SummaryWidget from "../components/SummaryWidget";
import LastWeekSpendChart from "../components/LastWeekSpendChart";
import CategorySpendChart from "../components/CategorySpendChart";
import WidgetWrapper from "../components/WidgetWrapper";

import { Grid } from "@radix-ui/themes";

export default function HomePage() {
  return (
    <Grid columns={"2"} rows={"2"} gap={"5"}>
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
  );
}
