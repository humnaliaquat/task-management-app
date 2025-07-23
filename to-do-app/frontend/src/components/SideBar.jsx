import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  List,
  LayoutDashboard,
  Settings,
  Folder,
  LogOut,
} from "lucide-react";

const Sidebar = ({ collapsed, setCollapsed }) => {
  // Main nav items (top)
  const navItems = [
    {
      icon: <LayoutDashboard size={20} />,
      label: "Dashboard",
      path: "/dashboard",
    },
    { icon: <List size={20} />, label: "Tasks", path: "/dashboard/tasks" },
    {
      icon: <Folder size={20} />,
      label: "Projects",
      path: "/dashboard/projects",
    },
  ];

  // Bottom nav items
  const bottomItems = [
    {
      icon: <Settings size={20} />,
      label: "Settings",
      path: "/dashboard/settings",
    },
    { icon: <LogOut size={20} />, label: "Logout", path: "/logout" },
  ];

  return (
    <div className="m-2 ">
      <aside
        className={`fixed top-16 left-2  #f9fafb  rounded-2xl  flex flex-col justify-between py-6 	bg-[#21534c]  z-10 h-[569px] ${
          collapsed ? "w-[72px]" : "w-[246px]"
        }`}
      >
        {/* TOP PART */}
        <div className="flex flex-col items-center gap-4  pb-5 m-2 mt-0">
          {/* TOGGLE BUTTON */}
          <div
            className={`flex items-center justify-between   pb-1  ${
              !collapsed ? "pl-6 pr-2" : "pr-17"
            } w-full px-2`}
          >
            {!collapsed && (
              <span className="    icon  bottom text-2xl font-extrabold ">
                FlowDay
              </span>
            )}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="  bottom common-hover options-btn common-btn"
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {collapsed ? (
                <ChevronRight size={24} />
              ) : (
                <ChevronLeft size={24} />
              )}
            </button>
          </div>

          {/* NAV ITEMS */}
          <nav className="flex flex-col gap-6 m-2 mt-2 w-full justify-center items-center">
            {navItems.map(({ icon, label, path }, i) => (
              <NavLink
                to={path}
                key={i}
                className={({ isActive }) => {
                  const baseClasses =
                    "flex items-center gap-2 w-full px-5 py-1 transition options-btn rounded";
                  const activeClasses = "bg-[#d5d8d8] font-semibold";
                  const inactiveClasses = "common-hover";

                  return `${baseClasses} ${
                    collapsed ? "justify-center" : "justify-start"
                  } ${isActive ? activeClasses : inactiveClasses}`;
                }}
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`flex justify-center w-8 ${
                        isActive ? "text-[#429189]" : ""
                      }`}
                    >
                      {icon}
                    </span>
                    {!collapsed && (
                      <span
                        className={`text-base ${isActive ? "text-black" : ""}`}
                      >
                        {label}
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* BOTTOM PART */}
        {/* BOTTOM PART */}
        <div className="flex flex-col gap-6 w-full justify-start">
          {bottomItems.map(({ icon, label, path }, i) => (
            <NavLink
              to={path}
              key={i}
              className={({ isActive }) =>
                `flex items-center gap-2 px-5 py-1 transition rounded m-2 mt-0 mb-0 options-btn ${
                  collapsed ? "justify-center" : "justify-start"
                } ${
                  isActive
                    ? "bg-[#d5d8d8] text-[#21534c] font-semibold"
                    : "common-hover text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`flex justify-center w-8 ${
                      isActive ? "text-[#429189]" : ""
                    }`}
                  >
                    {icon}
                  </span>
                  {!collapsed && (
                    <span
                      className={`text-base ${
                        isActive ? "text-black" : "text-white"
                      }`}
                    >
                      {label}
                    </span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
