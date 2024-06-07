import { ReactNode } from "react";
import { Callout, Flex, Text, Box } from "@radix-ui/themes";
import { Link } from "react-router-dom";

type Props = {
  insight: string | ReactNode;
};

export default function GenAIInsight({ insight }: Props) {
  return (
    <Box mb={"5"}>
      <Callout.Root>
        <Flex direction={"column"}>
          <Flex gap={"2"} mb={"2"}>
            <Callout.Icon>✨</Callout.Icon>
            <Text weight="medium">
              <Link
                to={"/ai-insights"}
                style={{ textDecoration: "underline", color: "inherit" }}
              >
                AI Insights
              </Link>
            </Text>
          </Flex>
          <Text as="p">{insight}</Text>
        </Flex>
      </Callout.Root>
    </Box>
  );
}
