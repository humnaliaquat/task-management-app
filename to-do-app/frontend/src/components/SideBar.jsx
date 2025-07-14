import { useState } from "react";
import { Link } from "react-router-dom";
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
    { icon: <LayoutDashboard size={20} />, label: "Dashboard", path: "/" },
    { icon: <List size={20} />, label: "Tasks", path: "/tasks" },
    { icon: <Folder size={20} />, label: "Projects", path: "/projects" },
  ];

  // Bottom nav items
  const bottomItems = [
    { icon: <Settings size={20} />, label: "Settings", path: "/settings" },
    { icon: <LogOut size={20} />, label: "Logout", path: "/logout" },
  ];

  return (
    <div className="m-2">
      <aside
        className={`fixed top-16 left-2  #f9fafb  border rounded-3xl border-gray-200 flex flex-col justify-between py-6  z-10 h-[562px] ${
          collapsed ? "w-[72px]" : "w-[246px]"
        }`}
        style={{
          backgroundColor: "var(--card)",
          color: "var(--text)",
        }}
      >
        {/* TOP PART */}
        <div className="flex flex-col items-center gap-4 border-gray-300 pb-5 m-2 mt-0">
          {/* TOGGLE BUTTON */}
          <div
            className={`flex items-center justify-between   pb-1  ${
              !collapsed ? "pl-6 pr-2" : "pr-17"
            } w-full px-2`}
          >
            {!collapsed && (
              <span className="    icon  bottom text-2xl font-extrabold ">
                todo
              </span>
            )}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="  bottom options-btn common-btn"
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
              <Link
                to={path}
                key={i}
                className={`flex items-center  gap-2 link text-[#1f2937]  w-full px-2 py-1.5 hover:bg-[#ececec]  transition rounded options-btn ${
                  collapsed ? "justify-center" : "justify-start"
                }`}
              >
                <span className="flex justify-center w-8 ">{icon}</span>
                {!collapsed && <span className="text-base ">{label}</span>}
              </Link>
            ))}
          </nav>
        </div>

        {/* BOTTOM PART */}
        <div className="flex flex-col gap-6 w-full justify-start  ">
          {bottomItems.map(({ icon, label, path }, i) => (
            <Link
              to={path}
              key={i}
              className={`flex flex-row gap-2 bottom link px-2 m-2 mb-0 mt-0 py-1 options-btn hover:bg-[#ececec] transition rounded ${
                collapsed ? "justify-center" : "justify-start"
              }`}
            >
              <span className="flex justify-center  w-8">{icon}</span>
              {!collapsed && <span className="text-base ">{label}</span>}
            </Link>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
