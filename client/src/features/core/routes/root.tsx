import { Outlet } from "react-router-dom";

import Drawer from "../../../components/Drawer";

export default function Root() {
  return (
    <>
      <Drawer />
      <main
        style={{
          padding: "40px 40px 40px 330px",
          flexGrow: 1,
        }}
      >
        <Outlet />
      </main>
    </>
  );
}
