import { SlidersHorizontal, Plus } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

export default function Buttons({ collapsed }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

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
    <div
      className={`main-content flex-1  fixed top-18 right-4  bg-[#f9fafb] border p-2 z-10 ${
        collapsed
          ? "left-18 w-[calc(100%-72px)]"
          : "left-64 w-[calc(100%-256px)]"
      }`}
      style={{
        backgroundColor: "var(--card)",
        color: "var(--text)",
      }}
    >
      {/* Header Row */}
      <div className="header flex justify-between items-center px-3 py-1 border border-gray-300 rounded-lg  ">
        {/* Left: Date */}
        <div className="flex flex-col justify-start items-start ">
          {/* Short text for small screens */}
          <button className="flex items-center  btn1 border border-gray-300 rounded-lg   px-2 py-2">
            <span className="text-[12px] sm:text-sm md:text-sm">Today</span>
          </button>
        </div>

        <p className="text-gray-300  text-2xl pb-2"> | </p>
        {/* Center: View Mode Buttons */}
        <div className="relative " ref={dropdownRef}>
          <button
            className="flex items-center text-black btn1 text-sm px-2 py-1 rounded  transition sm:text-sm md:text-sm"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-[12px] sm:text-sm md:text-sm">View</span>
          </button>

          {isOpen && (
            <div className="absolute mt-2 z-10 bg-white rounded-xl ">
              <ul className="text-black flex flex-col items-start w-45 shadow-sm">
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
        <p className="text-gray-300  text-2xl pb-2"> | </p>

        <div className="flex gap-3 p-0 ">
          {/* Filter Button */}
          <button className="flex items-center gap-2 btn1 text-black px-2 py-0.5  transition-all">
            <SlidersHorizontal className="w-4 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 text-black" />
            <span className="text-[12px] sm:text-sm md:text-sm">Filter</span>
          </button>

          {/* Add Task Button */}
          <button className="flex items-center gap-2 btn1 px-3 py-1 whitespace-nowrap text-black">
            <Plus className="w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 text-black" />
            <span className="text-[12px] sm:text-sm md:text-sm">Add Task</span>
          </button>
        </div>
      </div>

      {/* Render view mode specific content here */}
    </div>
  );
}
