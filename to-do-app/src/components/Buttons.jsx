import { SlidersHorizontal, Plus, X } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

export default function Buttons({
  collapsed,
  isAddTaskOpen,
  setIsAddTaskOpen,
}) {
  const [isOpen, setIsOpen] = useState(false); // view
  const [isFilterOpen, setIsFilterOpen] = useState(false); // filter

  const viewrRef = useRef(null);
  const filterRef = useRef(null);
  const addTaskRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (viewrRef.current && !viewrRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
      if (addTaskRef.current && !addTaskRef.current.contains(event.target)) {
        setIsAddTaskOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`main-content flex-1 fixed top-18 right-4 border p-2 z-10 ${
        collapsed
          ? "left-18 w-[calc(100%-72px)]"
          : "left-64 w-[calc(100%-256px)]"
      }`}
      style={{ backgroundColor: "var(--card)" }}
    >
      {/* Header Row */}
      <div
        className="header flex justify-between items-center px-4 py-1 border border-gray-300 rounded-lg m-2 mt-0"
        style={{ backgroundColor: "var(--card)", color: "var(--text)" }}
      >
        {/* Left: Date */}
        <div className="flex flex-col justify-start items-center  relative">
          <span className="text-gray-500 text-xs mt-1">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>

        <p className="text-gray-300 text-2xl pb-2"> | </p>

        {/* Center: View Dropdown */}
        <div className="relative" ref={viewrRef}>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              setIsFilterOpen(false); // close filter if open
            }}
            className="flex items-center text-black btn1 text-sm px-2 py-1 rounded sm:text-sm md:text-sm"
          >
            <span className="text-[12px] sm:text-sm md:text-sm">View</span>
          </button>

          {isOpen && (
            <div className="absolute mt-2 left-0 z-50 p-2 bg-white rounded-xl shadow-lg">
              <ul className="text-black flex flex-col text-left items-start w-48">
                <li className="w-full px-4 py-1.5 mt-1 mb-1  hover:bg-blue-100 rounded-2xl cursor-pointer">
                  Board view
                </li>
                <li className="w-full px-4 py-1.5 mt-1 mb-1  hover:bg-blue-100 rounded-2xl cursor-pointer">
                  Table view
                </li>
                <li className="w-full px-4 py-1.5 mt-1 mb-1  hover:bg-blue-100 rounded-2xl cursor-pointer">
                  List view
                </li>
              </ul>
            </div>
          )}
        </div>

        <p className="text-gray-300 text-2xl pb-2"> | </p>

        {/* Right: Filter + Add Task */}
        <div className="flex gap-3 items-center">
          {/* Filter Dropdown */}
          <div className="relative" ref={filterRef}>
            <button
              onClick={() => {
                setIsFilterOpen(!isFilterOpen);
                setIsOpen(false); // close view if open
              }}
              className="flex items-center gap-1 btn1 text-black px-2 py-0.5 transition-all w-auto sm:w-auto md:w-auto"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-black" />
              <span className="text-[12px] sm:text-sm md:text-sm">Filter</span>
            </button>

            {isFilterOpen && (
              <div className="absolute mt-2 left-0 z-50 bg-white rounded-xl shadow-lg p-2">
                <ul className="text-black flex flex-col text-left items-start w-48">
                  <li className="w-full px-4 py-1.5 mt-1 mb-1 hover:bg-blue-100 rounded-2xl cursor-pointer">
                    Filter by status
                  </li>
                  <li className="w-full px-4 py-1.5 mt-1 mb-1  hover:bg-blue-100 rounded-2xl cursor-pointer">
                    Filter by priority
                  </li>
                  <li className="w-full px-4 py-1.5 mt-1 mb-1  hover:bg-blue-100 rounded-2xl cursor-pointer">
                    Filter by due date
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Add Task */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              className="flex items-center gap-1 btn1 px-3 py-1 whitespace-nowrap text-black w-auto sm:w-auto md:w-auto"
              onClick={() => setIsAddTaskOpen(true)}
            >
              <Plus className="w-4 h-4 text-black" />
              <span className="text-[12px] sm:text-sm md:text-sm w-auto sm:w-auto">
                Add Task
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
