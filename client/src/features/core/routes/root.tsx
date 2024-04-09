import { Outlet } from "react-router-dom";

import SideDrawer from "../components/SideDrawer";

export default function Root() {
  return (
    <>
      <SideDrawer window={window}>
        <Outlet />
      </SideDrawer>
    </>
  );
}
