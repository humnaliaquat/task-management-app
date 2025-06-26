import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { X, Calendar, Flag } from "lucide-react";
import Buttons from "../components/Buttons";
import Content from "../components/Content";
import Navbar from "../components/Navbar";

export default function Tasks() {
  const { collapsed } = useOutletContext();
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
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
              placeholder="Enter task title"
              className=" p-3 rounded w-full mb-2 pt-1 pb-1 mt-4 task-title text-black"
              autoFocus
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  // Handle task addition logic here
                  setIsAddTaskOpen(false);
                }
              }}
            />
            <textarea
              placeholder="Enter task description (optional)"
              className="p-3 rounded w-full mb-2 text-black task-description overflow-hidden"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  // Handle task addition logic here
                  setIsAddTaskOpen(false);
                }
              }}
              onChange={(e) => {
                // Handle textarea change logic here if needed
              }}
              rows="4"
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
                  // Handle task addition logic here
                  setIsAddTaskOpen(false);
                }}
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      )}
      <Content collapsed={collapsed} />
    </div>
  );
}
