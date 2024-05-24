import { useParams } from "react-router-dom";
import { Spinner } from "@radix-ui/themes";

import { useGetCCSettingQuery } from "../api/get-credit-card-setting";

export default function CreditCardManagerDetailPage() {
  const { id } = useParams();
  const { data, isLoading } = useGetCCSettingQuery(id!);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <h2>Credit Card: {data?.data.card.name}</h2>
      <p>Desired Utilization Raio: {data?.data.desired_utilization_ratio}</p>
      <p>Desired Utilization Raio: {data?.data.current_utilization_ratio}</p>
    </>
  );
}
