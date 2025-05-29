import React from "react";

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
      {/* Outer wrapper: Responsive grid */}
      <div className="m-2 grid grid-cols-1 gap-6 md:grid-cols-4 items-stretch">
        {/* Left Card (All Tasks) */}
        <div className="bg-white p-4 rounded shadow flex flex-col justify-between h-full">
          <h2 className="text-xl font-semibold mb-2">All Tasks</h2>
          <p>Task Overview</p>
        </div>

        {/* Right 3 Cards container */}
        <div className="col-span-1 md:col-span-3">
          {/* Use flex on small, grid on medium+ */}
          <div className="flex flex-wrap justify-between gap-4 md:grid md:grid-cols-3">
            {["Completed", "Ongoing", "Overdue"].map((item) => (
              <div
                key={item}
                className="bg-white p-4 rounded shadow flex flex-col justify-between h-full w-[30%] sm:w-[30%] md:w-full"
              >
                <h3 className="text-lg font-semibold mb-2">{item}</h3>
                <p>Task info here</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-10 gap-4 m-2">
        <div className="progress-tracker col-span-7 bg-white p-4 rounded shadow">
          Progress
        </div>
        <div className="calandar col-span-3 bg-white p-4 rounded shadow">
          Calandar
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-10 gap-4 m-2 bg-white p-4 rounded shadow">
        Today's Tasks
      </div>
    </div>
  );
}
