import { useContext, useState } from "react";
import { Bell, Sun, Moon, User } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar({ collapsed }) {
  const [time, setTime] = useState(new Date());
  const { theme, toggleTheme } = useContext(ThemeContext);

  const getGreeting = () => {
    const hour = time.getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <nav
      className={`fixed top-0 h-[75px] flex items-center justify-between z-20 px-1 
      
      border-b border-gray-200 dark:border-gray-700
      ${
        collapsed
          ? "left-18 w-[calc(100%-72px)]"
          : "left-64 w-[calc(100%-256px)]"
      }`}
      style={{
        backgroundColor: "var(--card)",
        color: "var(--text)",
      }}
    >
      <h1 className="welcome text-[1.1rem] sm:text-[1.5rem] font-semibold p-2">
        {getGreeting()} Hani!
      </h1>
      <div className="flex items-center gap-3">
        <button className="btn flex items-center">
          <Bell className="w-5 h-5" />
        </button>
        <button
          className="btn flex items-center"
          style={{
            backgroundColor: "var(--card)",
            color: "var(--text)",
          }}
          onClick={toggleTheme}
        >
          {theme === "light" ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-5 h-5" />
          )}
        </button>
        <select
          onChange={(e) => toggleTheme(e.target.value)}
          value={theme}
          style={{
            backgroundColor: "var(--card)",
            color: "var(--text)",
          }}
          className="bg-transparent text-sm p-1 border rounded"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="blue">Blue</option>
          <option value="retro">Retro</option>
        </select>
        <button className="btn flex items-center">
          <User className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
}
