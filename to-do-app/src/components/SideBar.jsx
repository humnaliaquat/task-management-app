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
    { icon: <Calendar size={20} />, label: "Calendar", path: "/calendar" },
    { icon: <Folder size={20} />, label: "Projects", path: "/projects" },
  ];

  // Bottom nav items
  const bottomItems = [
    { icon: <Settings size={20} />, label: "Settings", path: "/settings" },
    { icon: <LogOut size={20} />, label: "Logout", path: "/logout" },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 h-screen #f9fafb  border-r border-gray-200 flex flex-col justify-between py-6  z-10 ${
        collapsed ? "w-[72px]" : "w-[255px]"
      }`}
      style={{
        backgroundColor: "var(--card)",
        color: "var(--text)",
      }}
    >
      {/* TOP PART */}
      <div className="flex flex-col items-center gap-6 border-b border-gray-300 pb-5">
        {/* TOGGLE BUTTON */}
        <div
          className={`flex items-center justify-between   pb-2 ${
            !collapsed ? "pl-6 pr-2" : "pl-1"
          } w-full px-2`}
        >
          {!collapsed && (
            <span className="    icon  bottom text-2xl font-bold">todo</span>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="  bottom"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
          </button>
        </div>

        {/* NAV ITEMS */}
        <nav className="flex flex-col gap-4 mt-2 w-full">
          {navItems.map(({ icon, label, path }, i) => (
            <Link
              to={path}
              key={i}
              className="flex items-center gap-2 link text-[#1f2937]  w-full px-2 py-2 hover:bg-[#ececec]  transition rounded"
            >
              <span className="flex justify-center w-8 ">{icon}</span>
              {!collapsed && <span className="text-base ">{label}</span>}
            </Link>
          ))}
        </nav>
      </div>

      {/* BOTTOM PART */}
      <div className="flex flex-col gap-4 w-full justify-start ">
        {bottomItems.map(({ icon, label, path }, i) => (
          <Link to={path} key={i} className="flex flex-row gap-2 bottom link ">
            <span className="flex justify-center  w-8">{icon}</span>
            {!collapsed && <span className="text-base ">{label}</span>}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
