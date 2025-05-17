import "./App.css";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import { useState } from "react";

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <SideBar collapsed={collapsed} setCollapsed={setCollapsed} />

      <Navbar collapsed={collapsed} />

      {/* Main content */}
      <div
        className={`transition-all duration-300 pt-[64px] ${
          collapsed ? "ml-[72px]" : "ml-[220px]"
        }`}
      >
        <main className="p-4">Main Content</main>
      </div>
    </div>
  );
}

export default App;
