import { CreditCardSetting } from "../../types";

type Props = Pick<
  CreditCardSetting,
  "card" | "desired_utilization_ratio" | "current_utilization_ratio"
>;

export default function CreditCardSettingCard({
  card,
  desired_utilization_ratio,
  current_utilization_ratio,
}: Props) {
  return (
    <>
      <h4>{card.name}</h4>
      <p>Desired Utilization: {desired_utilization_ratio}%</p>
      <p>Current Utilization: {current_utilization_ratio}%</p>
    </>
  );
}
