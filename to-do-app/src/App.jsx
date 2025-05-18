import "./App.css";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import { useState, useEffect } from "react";

function App() {
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCollapsed(true); // Collapse sidebar on small screens
      } else {
        setCollapsed(false); // Expand on larger screens
      }
    };

    handleResize(); // Call once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <SideBar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Navbar collapsed={collapsed} />
      <MainContent />
    </div>
  );
}

export default App;
