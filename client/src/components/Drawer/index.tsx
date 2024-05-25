import * as Dialog from "@radix-ui/react-dialog";
import { Link, NavLink } from "react-router-dom";

function DrawerMenuItem({ name }: { name: string }) {
  return <div>{name}</div>;
}
export default function Drawer() {
  return (
    <Dialog.Root open modal={false}>
      <Dialog.Content className="DialogContent">
        <NavLink style={{ textDecoration: "none", color: "inherit" }} to={""}>
          <DrawerMenuItem name="Home" />
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", color: "inherit" }}
          to={"account"}
        >
          <DrawerMenuItem name="Account" />
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", color: "inherit" }}
          to={"category"}
        >
          <DrawerMenuItem name="Category" />
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", color: "inherit" }}
          to={"categoryGroup"}
        >
          <DrawerMenuItem name="Category Group" />
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", color: "inherit" }}
          to={"recurring"}
        >
          <DrawerMenuItem name="Recurring" />
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", color: "inherit" }}
          to={"credit-card-settings"}
        >
          <DrawerMenuItem name="Credit Card Settings" />
        </NavLink>
      </Dialog.Content>
    </Dialog.Root>
  );
}
