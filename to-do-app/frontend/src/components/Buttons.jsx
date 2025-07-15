import { SlidersHorizontal, Plus, X } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

export default function Buttons({ isAddTaskOpen, setIsAddTaskOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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
      className={`main-content flex-1  right-4 bg-transparent z-10 `}
      style={{ backgroundColor: "var(--card)" }}
    >
      {/* Header Row */}
      <div
        className="header flex justify-between items-center px-4 py-1 border border-gray-300 rounded-lg mb-2"
        style={{ backgroundColor: "var(--card)", color: "var(--text)" }}
      >
        {/* Left: Date */}
        <div className="flex flex-col justify-start items-center  relative">
          <span className=" text-xs mt-1">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>

        <p className=" text-2xl pb-2"> | </p>

        {/* Center: View Dropdown */}
        <div className="relative" ref={viewrRef}>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              setIsFilterOpen(false); // close filter if open
            }}
            className="flex items-center  btn1 text-sm px-2 py-1 rounded sm:text-sm md:text-sm"
          >
            <span className="text-[12px] sm:text-sm md:text-sm">View</span>
          </button>

          {isOpen && (
            <div
              className="absolute mt-2 left-0 z-50 p-2 border  rounded-xl shadow-lg"
              style={{ backgroundColor: "var(--card)", color: "var(--text)" }}
            >
              <ul className="flex flex-col text-left items-start w-48">
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

        <p
          style={{ backgroundColor: "var(--card)", color: "var(--text)" }}
          className=" text-2xl pb-2"
        >
          {" "}
          |{" "}
        </p>

        {/* Right: Filter + Add Task */}
        <div className="flex gap-3 items-center">
          {/* Filter Dropdown */}
          <div className="relative" ref={filterRef}>
            <button
              onClick={() => {
                setIsFilterOpen(!isFilterOpen);
                setIsOpen(false); // close view if open
              }}
              className="flex items-center gap-1 btn1  px-2 py-0.5 transition-all w-auto sm:w-auto md:w-auto"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 " />
              <span className="text-[12px] sm:text-sm md:text-sm">Filter</span>
            </button>

            {isFilterOpen && (
              <div
                className="absolute mt-2 left-0 z-50  rounded-xl shadow-lg p-2"
                style={{ backgroundColor: "var(--card)", color: "var(--text)" }}
              >
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
              className="flex items-center gap-1 btn1 px-3 py-1 whitespace-nowrap  w-auto sm:w-auto md:w-auto"
              onClick={() => setIsAddTaskOpen(true)}
            >
              <Plus className="w-4 h-4 " />
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
