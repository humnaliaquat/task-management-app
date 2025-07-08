import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";

export default function AppLayout() {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <SideBar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Navbar collapsed={collapsed} greetings={"Good Afternoon"} />
      <div
        className={`transition-all duration-300 ${
          collapsed ? "ml-[72px]" : "ml-[256px]"
        } mt-[64px] p-4`}
      >
        <Outlet context={{ collapsed }} />
      </div>
    </div>
  );
}
