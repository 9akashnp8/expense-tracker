import { Outlet } from "react-router-dom";

import Drawer from "../../../components/Drawer";

export default function Root() {
  return (
    <>
      <Drawer />
      <main style={{ marginLeft: "250px" }}>
        <Outlet />
      </main>
    </>
  );
}
