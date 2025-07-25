import React, { useEffect } from "react";
import { Plus, MoreHorizontal } from "lucide-react";
import Buttons from "./Buttons";
import AddTaskModal from "./AddTaskModal";
import useTaskStore from "../store/useTaskStore";

export default function Content({ collapsed }) {
  const { tasks, fetchTasks, addTask } = useTaskStore();

  const [isAddTaskOpen, setIsAddTaskOpen] = React.useState(false);
  const openAddModal = () => setIsAddTaskOpen(true);

  const todoTasks = tasks?.filter((task) => task.status === "todo") || [];
  const inProgressTasks =
    tasks?.filter((task) => task.status === "in-progress") || [];
  const doneTasks = tasks?.filter((task) => task.status === "done") || [];

  useEffect(() => {
    fetchTasks();
  }, []);

  const renderTasks = (taskList) =>
    taskList.map((task) => (
      <div
        key={task._id}
        style={{
          backgroundColor: "var(--card-bg)",
          color: "var(--text)",
          borderColor: "var(--border)",
        }}
        className="shadow-lg rounded p-2 mb-2 common-border-color"
      >
        <h3 className="font-semibold">{task.title}</h3>
        <p className="text-sm">{task.description || "No description"}</p>
      </div>
    ));

  return (
    <div
      className={`absolute top-15 right-0 px-4 py-1.5 m-2 rounded-2xl common-border-color overflow-hidden
        ${collapsed ? "w-[calc(100%-95px)]" : "w-[calc(100%-270px)]"}`}
      style={{ height: "calc(100vh - 76px)" }}
    >
      <Buttons
        isAddTaskOpen={isAddTaskOpen}
        setIsAddTaskOpen={setIsAddTaskOpen}
      />
      <AddTaskModal isOpen={isAddTaskOpen} setIsOpen={setIsAddTaskOpen} />

      <div className="flex flex-col sm:flex-row gap-4 h-full w-full items-start">
        <Column
          title="TO DO"
          color="indigo-500"
          border="indigo-600"
          tasks={renderTasks(todoTasks)}
          onAddClick={openAddModal}
        />
        <Column
          title="IN PROGRESS"
          color="yellow-500"
          border="yellow-500"
          tasks={renderTasks(inProgressTasks)}
          onAddClick={openAddModal}
        />
        <Column
          title="DONE"
          color="emerald-500"
          border="emerald-500"
          tasks={renderTasks(doneTasks)}
          onAddClick={openAddModal}
        />
      </div>
    </div>
  );
}

function Column({ title, color, border, tasks, onAddClick }) {
  const borderClasses = {
    "indigo-600": "border-indigo-600",
    "yellow-500": "border-yellow-500",
    "emerald-500": "border-emerald-500",
  };

  const dotColorClasses = {
    "indigo-500": "bg-indigo-500",
    "yellow-500": "bg-yellow-500",
    "emerald-500": "bg-emerald-500",
  };

  return (
    <div
      style={{ backgroundColor: "var(--card)", color: "var(--text)" }}
      className={`min-w-[300px] flex-1 max-h-full rounded-lg shadow-md border-l-4 ${borderClasses[border]} flex flex-col`}
    >
      <div className="sticky top-0 bg-inherit z-10 flex justify-between items-center gap-2 p-2 pb-0 pt-0">
        <div className="flex items-center gap-2 font-medium">
          <span
            className={`h-2 w-2 rounded-full ${dotColorClasses[color]}`}
          ></span>
          {title}
        </div>
        <div className="flex gap-2">
          <MoreHorizontal className="w-4 h-4 cursor-pointer" />
          <Plus className="w-4 h-4 cursor-pointer" onClick={onAddClick} />
        </div>
      </div>

      <button
        className="w-[94%] mx-2 mt-2 mb-2 flex justify-start items-center gap-1 text-sm add-task cursor-pointer"
        onClick={onAddClick}
      >
        <Plus className="w-4 h-4" />
        Add Task
      </button>

      <div
        className="overflow-y-auto scroll-smooth px-2 pb-2 custom-scrollbar"
        style={{ maxHeight: "calc(100vh - 224px)" }}
      >
        {tasks.length > 0 ? (
          tasks
        ) : (
          <div className="text-sm text-center py-2">No tasks yet</div>
        )}
      </div>
    </div>
  );
}
