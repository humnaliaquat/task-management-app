import React from "react";
import { Plus, MoreHorizontal } from "lucide-react";
import CircularProgress from "./CircularProgress";

export default function Projects({ collapsed }) {
  const items = [
    {
      projectName: "Project 1",
      count: "0",
      task: { task1: "follow rule 1", task2: "follow rule no2" },
      status: "in progress",
      progress: "60",
    },
    {
      projectName: "Project 2",
      count: "0",
      status: "to do",
      task: { task1: "follow rule 1", task2: "follow rule no2" },
      progress: "60",
    },
    {
      projectName: "Project 3",
      count: "0",
      status: "completed",
      task: { task1: "follow rule 1", task2: "follow rule no2" },
      progress: "60",
    },
  ];
  return (
    <div
      className={`absolute m-2 mt-0 top-16   shadow rounded-xl  common-border-color right-0 ${
        collapsed ? " w-[calc(100%-95px)]" : " w-[calc(100%-270px)]"
      }`}
      style={{
        backgroundColor: "var(--card)",
        color: "var(--text)",
        borderColor: "var(--border)",
      }}
    >
      <h1 className="p-3 text-left text-xl font-medium">Projects</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 m-4">
        {items.map(({ projectName, count, status, task, progress }, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "var(--card-bg)",
              color: "var(--text)",
            }}
            className="p-4 rounded-xl shadow"
          >
            <div
              className="flex items-center justify-between gap-4"
              style={{
                backgroundColor: "var(--card-bg)",
                color: "var(--text)",
              }}
            >
              <div className="flex items-center gap-2">
                <span className="font-medium ">{projectName}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                <span className="text-xs text-gray-400">{status}</span>
              </div>

              <MoreHorizontal className="w-4 h-4 text-[#5a5959] cursor-pointer" />
            </div>
            <h1 className="text-left pl-5">Tasks</h1>
            <ul className=" text-left pl-5 text-sm text-gray-600 mt-2 ">
              {Object.entries(task).map(([key, value]) => (
                <li key={key}>{value}</li>
              ))}
            </ul>
            <div className="flex justify-end">
              <CircularProgress percentage={80} size={31} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
