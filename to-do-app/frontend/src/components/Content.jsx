import React, { useState, useEffect } from "react";
import { Plus, MoreHorizontal } from "lucide-react";
import { X, Calendar, Flag } from "lucide-react";
import Buttons from "./Buttons";
import axios from "axios";

export default function Content({ collapsed, tasks, setTasks }) {
  const todoTasks = tasks?.filter((task) => task.status === "todo") || [];
  const inProgressTasks =
    tasks?.filter((task) => task.status === "in-progress") || [];
  const doneTasks = tasks?.filter((task) => task.status === "done") || [];
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const renderTasks = (taskList) =>
    taskList.map((task) => (
      <div
        key={task._id}
        style={{
          backgroundColor: "var(--card-bg)",
          color: "var(--text)",
          borderColor: "var(--border)",
        }}
        className="   shadow-lg m-2 rounded  p-2"
      >
        <h3 className="font-semibold">{task.title}</h3>
        <p className="text-sm ">{task.description || "No description"}</p>
      </div>
    ));
  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/tasks");
        setTasks(res.data);
      } catch (err) {
        console.error("Error while fatching data", err);
      }
    };
    fetchTask();
  }, []);
  const addTask = async () => {
    if (!title.trim()) return;
    try {
      const res = await axios.post("http://localhost:5000/api/tasks", {
        description,
        title,
        status: "todo",
      });
      setTasks((prev) => [res.data, ...prev]);
      setDescription("");
      setTitle("");
      setIsAddTaskOpen(false);
    } catch (err) {
      console.error("Error adding task", err);
    }
  };

  return (
    <div
      className={`absolute top-15 rounded-2xl common-border-color right-0 px-4 py-5  m-2 
        ${collapsed ? "w-[calc(100%-95px)]" : "w-[calc(100%-270px)]"} 
        overflow-y-auto`}
    >
      <Buttons
        isAddTaskOpen={isAddTaskOpen}
        setIsAddTaskOpen={setIsAddTaskOpen}
      />
      {isAddTaskOpen && (
        <div className=" modal-container z-10">
          <div className="modal-content relative bg-white p-4 rounded shadow-lg  mx-auto ">
            <button
              className="absolute top-1 right-0  text-black"
              onClick={() => setIsAddTaskOpen(false)}
            >
              <X className="w-4 h-4 " />
            </button>
            <button className="task-buttons mt-5">Project</button>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter task title"
              className=" p-3 rounded w-full mb-2 pt-1 pb-1 mt-4 task-title "
              autoFocus
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addTask();
                  setIsAddTaskOpen(false);
                }
              }}
            />
            <textarea
              placeholder="Enter task description (optional)"
              className="p-3 rounded w-full mb-2  task-description overflow-hidden"
              onChange={(e) => setDescription(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();

                  setIsAddTaskOpen(false);
                }
              }}
              rows={4}
            ></textarea>
            <div className="flex gap-3  mb-2 border-b-1 pb-6 border-gray-300 border-solid ">
              <button className="task-buttons ">to do</button>
              <button className="task-buttons gap-1 align-items-center flex justify-center ">
                <Calendar className="w-4 h-4 " /> due date
              </button>
              <button className="task-buttons align-items-center flex justify-center gap-1">
                <Flag className="w-4 h-4" />
                priority
              </button>
            </div>
            <div className="flex justify-end relative">
              <button
                className=" px-4 py-2 text-black rounded items-center add-task-button 	absolute top-2 w-auto transition-colors "
                onClick={() => {
                  addTask();
                  setIsAddTaskOpen(false);
                }}
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col sm:flex-row gap-4 h-full w-full ">
        {/* TO DO */}
        <Column
          title="TO DO"
          color="indigo-500"
          border="indigo-600"
          tasks={renderTasks(todoTasks)}
        />

        {/* IN PROGRESS */}
        <Column
          title="IN PROGRESS"
          color="yellow-500"
          border="yellow-500"
          tasks={renderTasks(inProgressTasks)}
        />

        {/* DONE */}
        <Column
          title="DONE"
          color="emerald-500"
          border="emerald-500"
          tasks={renderTasks(doneTasks)}
        />
      </div>
    </div>
  );
}

// 👇 Reusable Column Component
function Column({ title, color, border, tasks }) {
  return (
    <div
      style={{
        backgroundColor: "var(--card)",
        color: "var(--text)",
      }}
      className={`min-w-[300px] flex-1 h-auto rounded-lg shadow-md border-l-4 border-${border}  `}
    >
      <div className="flex justify-between items-center gap-2 p-2 rounded pb-0 pt-0">
        <div className="flex items-center gap-2 p-1   font-medium">
          <span className={`h-2 w-2 rounded-full bg-${color}`}></span>
          {title}
        </div>
        <div className="flex gap-2">
          <MoreHorizontal className="w-4 h-4 cursor-pointer" />
          <Plus className="w-4 h-4  cursor-pointer" />
        </div>
      </div>

      <button className="w-[96%] m-2 pl-0 flex justify-start items-center border border-black gap-1 text-sm add-task">
        <Plus className="w-4 h-4 " />
        Add Task
      </button>

      {tasks.length > 0 ? (
        tasks
      ) : (
        <div className="text-sm m-2 ">No tasks yet</div>
      )}
    </div>
  );
}
