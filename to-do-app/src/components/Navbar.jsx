import { Bell, Sun, LogIn, LogOut, User, LogInIcon } from "lucide-react";
export default function Navbar({ collapsed }) {
  return (
    <nav
      className={`fixed top-0 h-[75px] flex items-center justify-between   shadow ${
        collapsed
          ? "left-18 w-[calc(100%-72px)]"
          : "left-64 w-[calc(100%-256px)]"
      }`}
    >
      <h1 className="welcome text-[1.1rem] sm:text-[1.5rem] md:text-[1.5rem] lg:text-[2rem] font-semibold p-4">
        Good afternoon James!
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
