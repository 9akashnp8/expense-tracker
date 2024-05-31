import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function WidgetWrapper({ children }: Props) {
  return <div id="widgetWrapper">{children}</div>;
}
