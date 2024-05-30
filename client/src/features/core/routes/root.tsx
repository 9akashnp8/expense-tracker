import { Outlet } from "react-router-dom";

import NavMenu from "../../../components/NavMenu";

export default function Root() {
  return (
    <div className="centerContainer">
      <NavMenu />
      <Outlet />
    </div>
  );
}
