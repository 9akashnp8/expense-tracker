import { Spinner } from "@radix-ui/themes";

import { useListCCSettingsQuery } from "../api/list-credit-card-settings";
import CreditCardSettingCard from "../components/CreditCardSettingCard";

export default function CreditCardSettingListPage() {
  const { data, isLoading } = useListCCSettingsQuery();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <h2>Credit Card Manager</h2>
      <ul>
        {data?.data.map((setting) => (
          <CreditCardSettingCard
            key={setting.id}
            card={setting.card}
            desired_utilization_ratio={setting.desired_utilization_ratio}
            current_utilization_ratio={setting.current_utilization_ratio}
          />
        ))}
      </ul>
    </>
  );
}
