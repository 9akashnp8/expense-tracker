import { Card } from "@radix-ui/themes";
import { Text } from "@radix-ui/themes";
import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TriangleDownIcon } from "@radix-ui/react-icons";

type Base = {
  name: string;
  value: number;
};

type WithDeltaInfo = Base & {
  delta: number;
  deltaOver: string;
};

type WithoutDeltaInfo = Base & {
  delta?: null;
  deltaOver?: string;
};

type Props = WithDeltaInfo | WithoutDeltaInfo;

export default function CountCard({ name, value, delta, deltaOver }: Props) {
  /** Wrapper to neatly format delta and deltaOver */
  function DeltaComponent() {
    const deltaValue =
      delta && delta > 0 ? (
        <span>
          <TriangleUpIcon color="green" />
          <Text color="green" size="3">
            {delta}%
          </Text>
        </span>
      ) : (
        <span>
          <TriangleDownIcon color="red" />
          <Text color="red" size="3">
            {delta}%
          </Text>
        </span>
      );
    return (
      <Text size="3">
        {deltaValue} vs {deltaOver}
      </Text>
    );
  }

  return (
    <Card size="3" variant="surface">
      <Text size="3">{name}</Text>
      <Text as="div" size="6" weight="bold">
        {value.toLocaleString("en-IN", { style: "currency", currency: "INR" })}
      </Text>
      {delta ? <DeltaComponent /> : null}
    </Card>
  );
}
