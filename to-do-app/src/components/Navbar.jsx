import { Bell, Sun, User } from "lucide-react";
export default function Navbar({ collapsed }) {
  return (
    <nav
      className={`fixed top-0 h-[75px] flex items-center justify-between  z-20 px-1 bg-[#f9fafb] ${
        collapsed
          ? "left-18 w-[calc(100%-72px)]"
          : "left-64 w-[calc(100%-256px)]"
      }`}
    >
      <h1 className="welcome text-[1.1rem] sm:text-[1.5rem] md:text-[1.5rem] lg:text-[1.6rem] font-semibold p-2 text-gray-500">
        Good afternoon Hani!
      </h1>
      <div className="flex items-center gap-3">
        <button className="btn flex items-center   text-black ">
          <Bell className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>
        <button className="btn flex items-center    text-black  ">
          <Sun className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>
        <button className="btn flex items-center    text-black ">
          <User className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </nav>
  );
}
