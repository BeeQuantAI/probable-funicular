"use client";

import { Icon } from "@src/module/common";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type SidebarSubmenuProps = {
  path: string;
  icon: JSX.Element;
  pageName: string;
  submenu?: SubmenuItem[];
};

type SubmenuItem = {
  path: string;
  icon: JSX.Element;
  pageName: string;
};

function SidebarSubmenu({ submenu, pageName, icon }: SidebarSubmenuProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();

  /** Open Submenu list if path found in routes, this is for directly loading submenu routes  first time */
  useEffect(() => {
    if (submenu && submenu.some((m) => m.path === location.pathname))
      setIsExpanded(true);
  }, [submenu]);

  return (
    <div className="hover:bg-base-50 bg-base-100 flex flex-col gap-0">
      {/** Route header */}
      <div className="block w-full" onClick={() => setIsExpanded(!isExpanded)}>
        {icon} {pageName}
        <Icon
          icon="arrow-down"
          className={`delay-400 float-right mt-1 h-5 w-5 transition-all duration-500 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </div>

      {/** Submenu list */}
      <div
        className={`w-full overflow-hidden transition-all duration-200 ${isExpanded ? "max-h-56" : "max-h-0"}`}
      >
        <ul className="menu menu-compact">
          {submenu &&
            submenu.map((m, k) => (
              <li key={k}>
                <Link
                  href={m.path}
                  className={`${pathname == m.path ? "bg-base-200 font-semibold" : ""}`}
                >
                  {m.icon} {m.pageName}
                  {pathname === m.path ? (
                    <span
                      className="bg-primary absolute inset-y-0 left-0 mb-1 mt-1 w-1 rounded-br-md rounded-tr-md"
                      aria-hidden="true"
                    ></span>
                  ) : null}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default SidebarSubmenu;
