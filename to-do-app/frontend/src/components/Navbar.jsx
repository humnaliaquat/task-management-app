import { useContext, useState, useRef, useEffect } from "react";
import {
  Bell,
  User,
  UserCircle,
  Settings,
  Palette,
  Trash,
  LogOut,
} from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar({ collapsed, greetings, search }) {
  const [time, setTime] = useState(new Date());
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isuserMenuOpen, setUserMenuOpen] = useState(false);
  const [mainMenuOpen, setMainMenuOpen] = useState(false);
  const userMenuRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMainMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    return () => clearInterval(interval);
  }, []);

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
      {" "}
      {greetings && (
        <h1 className="welcome text-[1.2rem] sm:text-[1.5rem] font-medium p-3">
          {getGreeting()} Hani!
        </h1>
      )}
      {search && (
        <div className="flex items-center gap-2 px-4">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border border-gray-300  search-option dark:border-gray-600 rounded-full p-2 pl-4 text-sm w-[200px] sm:w-[300px] md:w-[400px]"
            style={{
              color: "var(--text)",
              backgroundColor: "var(--card)",
            }}
          />
        </div>
      )}
      <div className="flex items-center gap-3">
        <button className="btn flex items-center relative">
          <Bell className="w-5 h-5" />
          <span className="absolute  top-1 right-1 text-xs bg-gray-400 text-white rounded-full px-1.5">
            3
          </span>
        </button>

        <div className="relative" ref={userMenuRef}>
          <button
            className="btn flex items-center"
            onClick={() => setUserMenuOpen(!isuserMenuOpen)}
            aria-haspopup="true"
            aria-expanded={isuserMenuOpen}
          >
            <User className="w-5 h-5" />
          </button>

          {isuserMenuOpen && (
            <div className="absolute right-2 p-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-50 ">
              <ul className="flex flex-col text-left w-full text-sm">
                <li className="px-4 py-1.5 hover:bg-blue-100 dark:hover:bg-blue-700 text-black dark:text-white cursor-pointer rounded-2xl mb-1 mt-1 flex items-center">
                  <UserCircle className="inline-block mr-2 w-4 h-4" />
                  Profile
                </li>
                <li className="px-4 py-1.5 hover:bg-blue-100 dark:hover:bg-blue-700 text-black dark:text-white rounded-2xl mb-1 mt-1 cursor-pointer">
                  <Settings className="inline-block mr-2 w-4 h-4" />
                  Settings
                </li>
                <div className="border-b border-gray-300 dark:border-gray-600 pb-1 mb-1">
                  <li
                    className="relative flex justify-start px-4 py-1.5 rounded-2xl mb-1 mt-1 w-full text-left text-black  bg-transparent  dark:text-white cursor-pointer "
                    ref={menuRef}
                    onClick={() => setMainMenuOpen(!mainMenuOpen)}
                    aria-haspopup="true"
                    aria-expanded={mainMenuOpen}
                  >
                    <Palette className="inline-block mr-2 w-4 h-4" />
                    Themes
                    {mainMenuOpen && (
                      <div className="absolute top-0 right-45 p-2 mt-1 w-32 bg-white dark:bg-gray-800 rounded-lg z-50 shadow-lg">
                        <ul className="text-sm text-black dark:text-white">
                          <li
                            className="px-4 py-1.5 hover:bg-blue-100 dark:hover:bg-blue-700 cursor-pointer relative rounded-2xl mb-1 mt-1"
                            onMouseEnter={() => setSubmenuOpen("light")}
                            onMouseLeave={() => setSubmenuOpen(null)}
                            onClick={() => toggleTheme("light")}
                          >
                            Light
                          </li>
                          <li
                            className="px-4 py-1.5 hover:bg-blue-100 dark:hover:bg-blue-700 cursor-pointer relative rounded-2xl mb-1 mt-1"
                            onMouseEnter={() => setSubmenuOpen("dark")}
                            onMouseLeave={() => setSubmenuOpen(null)}
                            onClick={() => toggleTheme("dark")}
                          >
                            Dark
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                </div>
                <li className="px-4 py-1.5 hover:bg-blue-100 dark:hover:bg-blue-700 text-black dark:text-white cursor-pointer rounded-2xl mb-1 mt-1">
                  <Trash className="inline-block mr-2 w-4 h-4" />
                  Trash
                </li>
                <li className="px-4 py-1.5 rounded-2xl mb-1 mt-1 hover:bg-blue-100 dark:hover:bg-blue-700 text-black dark:text-white cursor-pointer ">
                  <LogOut className="inline-block mr-2 w-4 h-4" />
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
