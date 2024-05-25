import * as Dialog from "@radix-ui/react-dialog";
import { Link } from "react-router-dom";

function DrawerMenuItem({ name }: { name: string }) {
  return <div style={{ padding: "15px" }}>{name}</div>;
}
export default function Drawer() {
  return (
    <Dialog.Root open modal={false}>
      <Dialog.Content className="DialogContent">
        <Link style={{ textDecoration: "none", color: "inherit" }} to={""}>
          <DrawerMenuItem name="Home" />
        </Link>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to={"account"}
        >
          <DrawerMenuItem name="Account" />
        </Link>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to={"category"}
        >
          <DrawerMenuItem name="Category" />
        </Link>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to={"categoryGroup"}
        >
          <DrawerMenuItem name="Category Group" />
        </Link>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to={"recurring"}
        >
          <DrawerMenuItem name="Recurring" />
        </Link>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to={"credit-card-settings"}
        >
          <DrawerMenuItem name="Credit Card Settings" />
        </Link>
      </Dialog.Content>
    </Dialog.Root>
  );
}
