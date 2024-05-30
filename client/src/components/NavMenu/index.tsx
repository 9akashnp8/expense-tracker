import { NavLink } from "react-router-dom";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export default function NavMenu() {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild className="NavigationMenuLink">
            <NavLink to={""}>Home</NavLink>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild className="NavigationMenuLink">
            <NavLink to={"/credit-card-settings"}>Settings</NavLink>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  );
}
