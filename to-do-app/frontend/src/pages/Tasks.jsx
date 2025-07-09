import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { X, Calendar, Flag } from "lucide-react";
import Buttons from "../components/Buttons";
import Content from "../components/Content";
import Navbar from "../components/Navbar";
import axios from "axios";

export default function Tasks() {
  const { collapsed } = useOutletContext();
  const [tasks, setTasks] = useState([]);
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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
    <div>
      <Navbar collapsed={collapsed} search={true} />
      <Buttons
        collapsed={collapsed}
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
              className=" p-3 rounded w-full mb-2 pt-1 pb-1 mt-4 task-title text-black"
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
              className="p-3 rounded w-full mb-2 text-black task-description overflow-hidden"
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
      <Content collapsed={collapsed} tasks={tasks} />
    </div>
  );
}
