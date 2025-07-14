import React from "react";
import TaskStatsChart from "./TaskStatsChart";
import CalendarCard from "./CalendarCard";

export default function DashboardCards({ collapsed }) {
  return (
    <div
      className={`absolute top-16 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-lg  right-0 px-1 overflow-y-auto scroll-smooth pt-2 pb-1 m-2 mt-0 
    ${collapsed ? "w-[calc(100%-95px)]" : "w-[calc(100%-270px)]"} `}
      style={{
        backgroundColor: "var(--card)",
        color: "var(--text)",
      }}
    >
      <div className="m-2 mt-0 grid grid-cols-1 gap-2 md:grid-cols-4 items-stretch">
        {/* Left 1 Cards container */}
        <div className="bg-gradient-to-r from-indigo-100 to-indigo-200 dark:from-blue-800 dark:to-blue-700 p-4 rounded-2xl shadow flex flex-col justify-between h-full text-gray-800 dark:text-gray-100">
          <h2 className="text-3xl font-semibold mb-2">0</h2>
          <p>All Tasks</p>
        </div>

        {/* Right 3 Cards container */}
        <div className="col-span-1 md:col-span-3">
          <div
            className="flex flex-wrap justify-between gap-2 md:grid md:grid-cols-3"
            style={{
              backgroundColor: "var(--card)",
              color: "var(--text)",
            }}
          >
            {[
              {
                item: "0",
                task: "To Do",
                bg: "from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-700",
              },
              {
                item: "0",
                task: "Ongoing",
                bg: "from-amber-100 to-amber-200 dark:from-amber-700 dark:to-amber-800",
              },
              {
                item: "0",
                task: "Completed",
                bg: "from-green-100 to-green-200 dark:from-green-800 dark:to-green-700",
              },
            ].map(({ item, task, bg }, index) => (
              <div
                key={index}
                className={`p-4 rounded-2xl shadow flex flex-col justify-between h-full w-[30%] sm:w-[30%] md:w-full bg-gradient-to-r ${bg} text-gray-800 dark:text-gray-100`}
              >
                <h3 className="text-3xl font-semibold mb-2">{item}</h3>
                <p>{task}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress + Calendar */}
      <div className="grid grid-cols-1 md:grid-cols-10 gap-2 m-2 mt-1  place-content-center">
        <div
          className="col-span-6 top-25 dark:bg-zinc-900 mt-0 pt-0 rounded-3xl shadow  dark:text-gray-100 h-72 flex justify-center items-center place-content-center"
          style={{
            backgroundColor: "var(--card)",
            color: "var(--text)",
          }}
        >
          <TaskStatsChart />
        </div>

        <div className="calendar hidden md:flex col-span-4 h-72 justify-center items-center rounded-3xl">
          <CalendarCard />
        </div>
      </div>
      {/* Today's Tasks */}
      <div
        className="grid grid-cols-1 md:grid-cols-10 gap-2 mb-1 mt-1 m-2 p-3 pb-2 dark:bg-zinc-900 dark:text-gray-100 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-lg"
        style={{
          color: "var(--text)",
        }}
      >
        <div className="col-span-10">
          <h2 className="text-base font-semibold mb-3 border-b border-gray-200 dark:border-zinc-700 pb-2">
            Today's Tasks
          </h2>

          <div className="space-y-2">
            {/* Task 1 */}
            <div className="flex items-center justify-between px-3 py-1 dark:bg-zinc-700 rounded-lg text-sm dark:text-gray-200">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:bg-zinc-800 dark:border-gray-600"
                />
                <span>Finish the dashboard layout</span>
              </label>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Today
              </span>
            </div>

            {/* Task 2 */}
            <div className="flex items-center justify-between px-3 py-2 dark:bg-zinc-700  rounded-lg text-sm dark:text-gray-200">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:bg-zinc-800 dark:border-gray-600"
                />
                <span>Test task filtering logic</span>
              </label>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Today
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
