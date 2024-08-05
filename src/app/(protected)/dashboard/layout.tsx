import React, { ReactNode } from "react";
import Header from "@src/module/dashboard/components/header";
import LeftSidebar from "@src/module/dashboard/components/left-sidebar";
// import LeftSidebar from "@/containers/left-sidebar";
// import RightSidebar from "@/containers/right-sidebar";
// import ModalLayout from "@/containers/modal-layout";

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input
          id="left-sidebar-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col">
          <Header />
          <main className="bg-base-200 flex-1 overflow-y-auto px-6 pt-4 md:pt-4">
            {children}
            <div className="h-16"></div>
          </main>
        </div>
        <LeftSidebar />
      </div>

      {/* Right drawer - containing secondary content like notifications list etc.. */}
      {/* <RightSidebar /> */}

      {/* Modal layout container */}
      {/* <ModalLayout /> */}
    </>
  );
}
