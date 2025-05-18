import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Clock,
  List,
  Settings,
  LogOut,
} from "lucide-react";

const Sidebar = ({ collapsed, setCollapsed }) => {
  // Main nav items (top)
  const navItems = [
    { icon: <List size={20} />, label: "All Tasks" },
    { icon: <Clock size={20} />, label: "Pending" },
    { icon: <CheckCircle size={20} />, label: "Completed" },
  ];

  // Bottom nav items
  const bottomItems = [
    { icon: <Settings size={20} />, label: "Settings" },
    { icon: <LogOut size={20} />, label: "Logout" },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 h-screen border-none bg-[#1C6E8C] flex flex-col justify-between py-6   ${
        collapsed ? "w-[72px]" : "w-[255px]"
      }`}
    >
      {/* TOP PART */}
      <div className="flex flex-col items-center gap-6">
        {/* TOGGLE BUTTON */}
        <div
          className={`flex items-center justify-between ${
            !collapsed ? "pl-6 pr-2" : "pl-1"
          } w-full px-2`}
        >
          {!collapsed && (
            <span className=" text-[#ffffff]   icon  bottom text-2xl font-bold">
              todo
            </span>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-[#FCFCFC]   bottom"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
          </button>
        </div>
        <br className="border-b-amber-200" />
        {/* NAV ITEMS */}
        <nav className="flex flex-col gap-4 mt-6 w-full">
          {navItems.map(({ icon, label }, i) => (
            <button
              key={i}
              className="flex items-center gap-2 text-[#FCFCFC]   bottom  w-full justify-start"
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
          <button className="flex flex-row gap-2 bottom text-[#FCFCFC]">
            <span className="flex justify-center w-8">{icon}</span>
            {!collapsed && <span className="text-base">{label}</span>}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
