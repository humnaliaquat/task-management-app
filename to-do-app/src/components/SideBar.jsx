import { useState } from "react";
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
    { icon: <LayoutDashboard size={20} />, label: "Dashboard" },
    { icon: <List size={20} />, label: "Tasks" },
    { icon: <Calendar size={20} />, label: "Calendar" },
    { icon: <Folder size={20} />, label: "Projects" },
  ];

  // Bottom nav items
  const bottomItems = [
    { icon: <Settings size={20} />, label: "Settings" },
    { icon: <LogOut size={20} />, label: "Logout" },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 h-screen #f9fafb text-gray-700  border-r border-gray-200 flex flex-col justify-between py-6  z-10 ${
        collapsed ? "w-[72px]" : "w-[255px]"
      }`}
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
            <span className=" text-[#1f2937]   icon  bottom text-2xl font-bold">
              todo
            </span>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-[#1f2937]   bottom"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
          </button>
        </div>

        {/* NAV ITEMS */}
        <nav className="flex flex-col gap-4 mt-2 w-full ">
          {navItems.map(({ icon, label }, i) => (
            <button
              key={i}
              className="flex items-center gap-2 text-[#1f2937]  bottom  w-full justify-start mb-1"
            >
              <span className="flex justify-center w-8">{icon}</span>
              {!collapsed && <span className="text-base">{label}</span>}
            </button>
          ))}
        </nav>
      </div>

      {/* BOTTOM PART */}
      <div className="flex flex-col gap-4 w-full justify-start ">
        {bottomItems.map(({ icon, label }, i) => (
          <button className="flex flex-row gap-2 bottom text-[#1f2937]">
            <span className="flex justify-center w-8">{icon}</span>
            {!collapsed && <span className="text-base">{label}</span>}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
