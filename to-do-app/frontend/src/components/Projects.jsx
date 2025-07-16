import React, { useState } from "react";
import { Plus, MoreHorizontal, ChevronDown, ChevronRight } from "lucide-react";
import CircularProgress from "./CircularProgress";

export default function Projects({ collapsed }) {
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleExpand = (index) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const items = [
    {
      projectName: "Project 1",
      task: { task1: "follow rule 1", task2: "follow rule no2" },
      status: "in progress",
      progress: 60,
    },
    {
      projectName: "Project 2",
      task: { task1: "follow rule 1", task2: "follow rule no2" },
      status: "to do",
      progress: 60,
    },
    {
      projectName: "Project 3",
      task: { task1: "follow rule 1", task2: "follow rule no2" },
      status: "completed",
      progress: 60,
    },
  ];

  return (
    <div
      className={`absolute m-2 mt-0 top-16 shadow rounded-xl border right-0 ${
        collapsed ? "w-[calc(100%-95px)]" : "w-[calc(100%-270px)]"
      }`}
      style={{
        backgroundColor: "var(--card)",
        color: "var(--text)",
        borderColor: "var(--border)",
      }}
    >
      <h1 className="p-4 pb-3 pt-3 text-left text-xl font-semibold">
        Projects
      </h1>

      <div className="flex flex-col gap-3 px-4 pb-4">
        {items.map(({ projectName, task, status, progress }, index) => {
          const isExpanded = expandedProjects[index];

          return (
            <div
              key={index}
              className={`rounded-xl border border-gray-200 shadow-sm transition-all duration-300 overflow-hidden ${
                isExpanded ? "bg-white" : "bg-[#f7f7f7]"
              }`}
            >
              {/* Project Header */}
              <div
                onClick={() => toggleExpand(index)}
                className="flex items-center justify-between cursor-pointer px-4 py-3 hover:bg-gray-100 transition"
              >
                <div className="flex items-center gap-2">
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4 text-gray-600" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-gray-600" />
                  )}
                  <span className="font-semibold text-gray-800">
                    {projectName}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-amber-400"></span>
                  <span className="text-xs text-gray-500">{status}</span>
                </div>
                <MoreHorizontal className="w-4 h-4 text-gray-500" />
              </div>

              {/* Tasks Accordion */}
              {isExpanded && (
                <div className=" pb-3 pt-2 border-t border-gray-200">
                  <h2 className="text-sm text-left pl-10 font-medium text-gray-600 mb-2">
                    All Tasks
                  </h2>
                  <ul className=" text-sm text-left m-10 mt-0 mb-0 text-gray-600 space-y-1">
                    {Object.entries(task).map(([key, value]) => (
                      <li className="border common-border-color" key={key}>
                        {value}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-end mt-4 mr-4 ">
                    <CircularProgress percentage={progress} size={30} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
