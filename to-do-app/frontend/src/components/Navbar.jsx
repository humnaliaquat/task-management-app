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

export default function Navbar({ greetings, search }) {
  const [time, setTime] = useState(new Date());
  const { toggleTheme } = useContext(ThemeContext);
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [mainMenuOpen, setMainMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null);

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
  }, []);

  const getGreeting = () => {
    const hour = time.getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full h-[62px] flex items-center justify-between px-4 z-20"
      style={{
        backgroundColor: "var(--card)",
        color: "var(--text)",
      }}
    >
      <div className="ml-0">
        {/* Greeting */}
        {greetings && (
          <h1 className="text-xl sm:text-lg md:text-xl lg:text-2xl font-medium">
            {getGreeting()} Hani!
          </h1>
        )}

        {/* Search Bar */}
        {search && (
          <div className="flex-1 flex justify-center">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border border-gray-300 dark:border-gray-600 rounded-full px-4 py-2 text-sm w-[200px] sm:w-[300px] md:w-[400px]"
              style={{
                color: "var(--text)",
                backgroundColor: "var(--card)",
              }}
            />
          </div>
        )}
      </div>

      {/* Icons + Menu */}
      <div className="flex items-center gap-5">
        {/* Notifications */}
        <button className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-2 -right-3 bg-gray-400 text-white text-xs rounded-full px-1.5">
            3
          </span>
        </button>

        {/* User Menu */}
        <div className="relative" ref={userMenuRef}>
          <button
            onClick={() => setUserMenuOpen(!isUserMenuOpen)}
            className="flex items-center cursor-pointer"
            aria-haspopup="true"
            aria-expanded={isUserMenuOpen}
          >
            <User className="w-5 h-5" />
          </button>

          {/* Dropdown */}
          {isUserMenuOpen && (
            <div className="absolute -right-2 mt-2 w-50 bg-white dark:bg-gray-800 rounded-2xl shadow-xl z-50">
              <ul className="flex flex-col p-2 m-1 ml-0 mr-0 text-sm text-black dark:text-white ">
                <li className="flex  items-center gap-2  px-4 py-1.5 hover:bg-blue-50  rounded-2xl cursor-pointer">
                  <UserCircle className="w-4 h-4" />
                  Profile
                </li>
                <li className="flex items-center gap-2 px-4 mt-2 py-1.5 hover:bg-blue-100 dark:hover:bg-blue-700 rounded-2xl cursor-pointer">
                  <Settings className="w-4 h-4" />
                  Settings
                </li>

                {/* Theme Menu */}
                <li
                  className="relative flex items-center gap-2 mt-2 px-4 py-1.5 rounded-2xl cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-700"
                  ref={menuRef}
                  onClick={() => setMainMenuOpen(!mainMenuOpen)}
                  aria-haspopup="true"
                  aria-expanded={mainMenuOpen}
                >
                  <Palette className="w-4 h-4" />
                  Themes
                  {mainMenuOpen && (
                    <div className="absolute  top-0 -left-40 mt-2 w-38 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-2 z-50">
                      <ul className="text-sm">
                        <li
                          className="px-4 py-1.5 rounded-2xl hover:bg-blue-100 dark:hover:bg-blue-700 text-left cursor-pointer"
                          onClick={() => toggleTheme("light")}
                        >
                          Light
                        </li>
                        <li
                          className="px-4 py-1.5 rounded-2xl hover:bg-blue-100 text-left dark:hover:bg-blue-700 cursor-pointer"
                          onClick={() => toggleTheme("dark")}
                        >
                          Dark
                        </li>
                      </ul>
                    </div>
                  )}
                </li>

                <li className="flex items-center gap-2 mt-2 px-4 py-1.5 hover:bg-blue-100 dark:hover:bg-blue-700 rounded-2xl cursor-pointer">
                  <Trash className="w-4 h-4" />
                  Trash
                </li>
                <li className="flex items-center gap-2 mt-2 px-4 py-1.5 hover:bg-blue-100 dark:hover:bg-blue-700 rounded-2xl cursor-pointer">
                  <LogOut className="w-4 h-4" />
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
