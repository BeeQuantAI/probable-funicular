/* eslint-disable @next/next/no-img-element */
"use client";

import { Icon } from "@src/module/common";
import { useThemeStore } from "@src/module/system/theme-store";
import Link from "next/link";
// import SidebarSubmenu from "./sidebar-submenu";
// import routes from "@/helper/sidebar-routes";
import { usePathname } from "next/navigation";
import { routes } from "../helper/sidebar-routes";
import SidebarSubmenu from "./sidebar-submenu";
import { useUser } from "@src/module/auth/user-store";

interface LeftSidebarProps {}

function LeftSidebar(props: LeftSidebarProps) {
  const pathname = usePathname();
  const theme = useThemeStore((s) => s.theme);
  const user = useUser((s) => s.user);
  const close = () => {
    const leftSidebarDrawer = document.getElementById("left-sidebar-drawer");
    if (leftSidebarDrawer) leftSidebarDrawer.click();
  };

  return (
    <div className="drawer-side z-30 overflow-hidden">
      <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label>
      <ul className="menu bg-base-100 text-base-content min-h-full w-80 pt-2">
        <button
          className="btn btn-ghost bg-base-300 btn-circle absolute right-0 top-0 z-50 mr-2 mt-4 lg:hidden"
          onClick={close}
        >
          <Icon icon="close" className="inline-block h-5 w-5" />
        </button>

        <li className="mb-2 text-xl font-semibold">
          <Link href="/welcome">
            <img
              className="mask mask-squircle w-10"
              src={
                theme === "dark"
                  ? "/image/logo_dark.png"
                  : "/image/logo_light.png"
              }
              alt="bee Logo"
            />
            AlphaQuant
          </Link>
        </li>
        <div
          className="no-scrollbar overflow-y-scroll pb-20"
          style={{ height: "85vh" }}
        >
          {routes.map((route, k: number) => (
            <li className="" key={k}>
              {route.submenu ? (
                <SidebarSubmenu {...route} />
              ) : (
                <Link
                  href={route.path}
                  className={`${pathname == route.path ? "bg-base-200 font-semibold" : "font-normal"}`}
                >
                  {route.icon} {route.pageName}
                  {pathname === route.path ? (
                    <span
                      className="bg-primary absolute inset-y-0 left-0 w-1 rounded-br-md rounded-tr-md"
                      aria-hidden="true"
                    ></span>
                  ) : null}
                </Link>
              )}
            </li>
          ))}
        </div>
      </ul>
      {/* Profile icon, opening menu on click */}
      <div className="dropdown dropdown-top absolute bottom-0 w-80">
        <div
          tabIndex={0}
          role="button"
          className="btn bg-base-100 w-full justify-start text-left"
        >
          <div className="avatar">
            <div className="w-6 rounded-full">
              <img src={"/"} alt="avatar" />
            </div>
          </div>
          {`hello ${user?.displayName}`}
          <Icon icon="arrow-down" className="w-4" />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-200 rounded-box visible z-[1] w-52 px-4 shadow"
        >
          <li className="">
            <Link href={"/settings/billing"}>
              <Icon icon="key" className="w-4" />
              Bill History
            </Link>
          </li>
          <div className="divider m-0 py-2"></div>
          <li>
            <a className=" ">
              <Icon icon="key" className="w-4" />
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeftSidebar;
