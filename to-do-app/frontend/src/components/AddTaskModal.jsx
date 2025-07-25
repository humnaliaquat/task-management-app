import React, { useState, useEffect } from "react";
import { X, Calendar, Flag } from "lucide-react";
import useTaskStore from "../store/useTaskStore";

export default function AddTaskModal({ isOpen, setIsOpen }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedProjectId, setSelectedProjectId] = useState("");
  const { addTask, fetchProjects, projects } = useTaskStore();

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleAdd = () => {
    if (!title.trim()) return;
    addTask({
      title,
      description,
      projectId: selectedProjectId,
      status: "todo",
    });
    setTitle("");
    setDescription("");
    setSelectedProjectId("");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-container z-10">
      <div
        className="modal-content relative common-border-color p-4 rounded shadow-lg mx-auto"
        style={{
          backgroundColor: "var(--card-bg)",
          color: "var(--text)",
          borderColor: "var(--border)",
        }}
      >
        <button
          className="absolute top-1 right-1"
          onClick={() => setIsOpen(false)}
        >
          <X className="w-4 h-4" />
        </button>

        {/* Project Selector */}
        <select
          className="task-buttons mt-5 w-full p-2 rounded text-sm"
          value={selectedProjectId}
          onChange={(e) => setSelectedProjectId(e.target.value)}
        >
          <option value="">Select Project</option>
          {projects.map((project) => (
            <option key={project._id} value={project._id}>
              {project.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          className="p-3 rounded w-full mb-2 pt-1 pb-1 mt-4 task-title"
          autoFocus
          onKeyDown={(e) => {
            if (e.key === "Enter") handleAdd();
          }}
        />

        <textarea
          placeholder="Enter task description (optional)"
          className="p-3 rounded w-full mb-2 task-description"
          onChange={(e) => setDescription(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleAdd();
            }
          }}
          rows={4}
        ></textarea>
        <div className="flex gap-3 mb-2  pb-6 border-under-buttons">
          <button className="task-buttons">to do</button>
          <button className="task-buttons flex items-center gap-1">
            <Calendar className="w-4 h-4" /> due date
          </button>
          <button className="task-buttons flex items-center gap-1">
            <Flag className="w-4 h-4" /> priority
          </button>
        </div>
        <div className="flex justify-end relative">
          <button
            className="px-4 py-2 rounded items-center add-task-button absolute top-2 w-auto transition-colors"
            onClick={handleAdd}
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}
