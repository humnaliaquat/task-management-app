import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronRight, MoreHorizontal, Check } from "lucide-react";
import CircularProgress from "./CircularProgress";
import useTaskStore from "../store/useTaskStore";

export default function Projects({ collapsed }) {
  const [expandedProjects, setExpandedProjects] = useState({});
  const [checkedTasks, setCheckedTasks] = useState({});
  const { tasks, projects, fetchTasks, fetchProjects } = useTaskStore();

  useEffect(() => {
    fetchTasks();
    fetchProjects();
  }, []);

  const toggleExpand = (projectId) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  return (
    <div
      className={`absolute m-2 mt-0 top-16 shadow rounded-xl right-0 ${
        collapsed ? "w-[calc(100%-95px)]" : "w-[calc(100%-270px)]"
      }`}
      style={{
        backgroundColor: "var(--card)",
        color: "var(--text)",
        borderColor: "var(--border)",
      }}
    >
      <div className="flex justify-between items-center px-4 pb-3 pt-3">
        <h1 className="text-xl font-semibold">Projects</h1>
        <button className="px-3 py-1 text-sm rounded bg-[#4eb6a1] text-white hover:bg-emerald-700">
          + Add Project
        </button>
      </div>

      <div className="flex flex-col gap-3 px-4 pb-4">
        {projects.map((project) => {
          const isExpanded = expandedProjects[project._id];
          const projectTasks = tasks.filter(
            (task) => task.projectId === project._id
          );

          return (
            <div
              key={project._id}
              className="rounded-xl border common-border-color shadow-sm transition-all duration-300 overflow-hidden"
            >
              {/* Project Header */}
              <div
                className="flex items-center justify-between px-4 py-3 transition"
                style={{
                  backgroundColor: "var(--card-bg)",
                  color: "var(--text)",
                }}
              >
                <div className="flex items-center gap-2">
                  <button onClick={() => toggleExpand(project._id)}>
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4 cursor-pointer" />
                    ) : (
                      <ChevronRight className="w-4 h-4 cursor-pointer" />
                    )}
                  </button>
                  <span className="font-semibold">{project.name}</span>
                </div>
                <div className="flex justify-end gap-4 items-center">
                  <CircularProgress
                    percentage={Math.floor(
                      (projectTasks.filter((task) => task.status === "done")
                        .length /
                        projectTasks.length) *
                        100 || 0
                    )}
                    size={30}
                  />
                  <MoreHorizontal className="w-4 h-4 text-gray-500" />
                </div>
              </div>

              {/* Project Tasks Accordion */}
              {isExpanded && (
                <div className="pt-3 border-top">
                  <ul className="text-sm text-left m-3.5 mt-0 mb-0 space-y-1">
                    {projectTasks.length > 0 ? (
                      projectTasks.map((task) => (
                        <li
                          key={task._id}
                          className="p-2 pl-4 mb-3 rounded gap-2 flex items-center"
                          style={{
                            backgroundColor: "var(--card-bg)",
                            color: "var(--text)",
                            borderColor: "var(--border)",
                          }}
                        >
                          <span
                            onClick={() =>
                              setCheckedTasks((prev) => ({
                                ...prev,
                                [task._id]: !prev[task._id],
                              }))
                            }
                            className={`w-4.5 h-4.5 rounded cursor-pointer border border-gray-300 flex items-center justify-center transition ${
                              checkedTasks[task._id]
                                ? "bg-[#68aa9d] border-[#68aa9d]"
                                : ""
                            }`}
                          >
                            {checkedTasks[task._id] && (
                              <Check
                                size={14}
                                strokeWidth={3}
                                className="text-white"
                              />
                            )}
                          </span>
                          {task.title}
                        </li>
                      ))
                    ) : (
                      <li className="text-gray-500 text-sm italic">
                        No tasks for this project.
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
