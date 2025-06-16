import React from "react";
import TaskStatsChart from "./TaskStatsChart";
import CalendarCard from "./CalendarCard";

export default function DashboardCards({ collapsed }) {
  return (
    <div
      className={`absolute top-15 right-0 px-2 h-[calc(100vh-80px)] overflow-y-auto scroll-smooth py-5  
        ${collapsed ? "w-[calc(100%-72px)]" : "w-[calc(100%-256px)]"}`}
      style={{
        backgroundColor: "var(--card)",
        color: "var(--text)",
      }}
    >
      <div className="m-2 grid grid-cols-1 gap-2 md:grid-cols-4 items-stretch">
        {/* Left 1 Cards container */}
        <div
          className="bg-gradient-to-r from-indigo-100 to-indigo-200 dark:from-blue-800 dark:to-blue-700 p-4 rounded-2xl shadow flex flex-col justify-between h-full text-gray-800 dark:text-gray-100"
          style={{
            color: "var(--text)",
          }}
        >
          <h2 className="text-3xl font-semibold mb-2">0</h2>
          <p>All Tasks</p>
        </div>

        {/* Right 3 Cards container */}
        <div className="col-span-1 md:col-span-3">
          <div className="flex flex-wrap justify-between gap-2 md:grid md:grid-cols-3">
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
        <div className="col-span-6 top-25 dark:bg-zinc-900 mt-0 pt-0 rounded-3xl shadow text-gray-800 dark:text-gray-100 h-72 flex justify-center items-center place-content-center">
          <TaskStatsChart />
        </div>

        <div className="calandar hidden md:flex col-span-4 h-72 justify-center items-center rounded-3xl">
          <CalendarCard />
        </div>
      </div>

      {/* Today's Tasks */}
      <div className="grid grid-cols-1 md:grid-cols-10 gap-4 m-2 bg-white dark:bg-zinc-900 p-4 rounded shadow text-gray-800 dark:text-gray-100">
        Today's Tasks
      </div>
    </div>
  );
}
