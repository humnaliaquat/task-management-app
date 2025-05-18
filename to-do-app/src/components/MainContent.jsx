import { Key } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

export default function MainContent() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const month = new Date().toLocaleString("default", { month: "long" });
  const date = new Date().getDate();
  const day = new Date().toLocaleString("default", { weekday: "long" });
  const year = new Date().getFullYear();

  const [tasks, setTasks] = useState({
    todo: [],
    inProgress: [],
    done: [],
  });
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="main-content flex-1 p-2 fixed top-22 left-68 right-4  bg-amber-200 rounded-4xl">
      {/* Header Row */}
      <div className="header flex justify-between flex-row items-center ">
        {/* Left: Date */}
        <div className="flex flex-col justify-start items-start pl-3">
          <h1 className="text-black text-xl font-semibold">{month}</h1>
          <h2 className="text-black text-sm">
            Today is {day}, {month} {date}, {year}
          </h2>
        </div>
        <p className="text-gray-400  text-3xl"> | </p>
        {/* Center: View Mode Buttons */}
        <div className="relative " ref={dropdownRef}>
          <button className="text-black" onClick={() => setIsOpen(!isOpen)}>
            View Mode ▾
          </button>

          {isOpen && (
            <div className="absolute mt-2 z-10 bg-white rounded-xl shadow-lg">
              <ul className="text-black flex flex-col items-start w-40">
                <li className="w-full px-4 py-2 text-left hover:bg-blue-100 cursor-pointer rounded-2xl">
                  Board view
                </li>
                <li className="w-full px-4 py-2 text-left hover:bg-blue-100 cursor-pointer rounded-2xl">
                  Table view
                </li>
                <li className="w-full px-4 py-2 text-left hover:bg-blue-100 cursor-pointer rounded-2xl">
                  List view
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Right: Filter + Add */}
        <p className="text-gray-400 text-3xl"> | </p>

        <div className="flex gap-3 pr-0 mr-0">
          <button className="text-black">Filters</button>
          <button className="text-black">Add task</button>
        </div>
      </div>

      {/* Render view mode specific content here */}
    </div>
  );
}
