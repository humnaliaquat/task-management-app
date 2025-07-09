import React from "react";
import { Plus, MoreHorizontal } from "lucide-react";

export default function Content({ collapsed, tasks }) {
  const todoTasks = tasks?.filter((task) => task.status === "todo") || [];
  const inProgressTasks =
    tasks?.filter((task) => task.status === "in-progress") || [];
  const doneTasks = tasks?.filter((task) => task.status === "done") || [];

  const renderTasks = (taskList) =>
    taskList.map((task) => (
      <div key={task._id} className="bg-white m-2 rounded shadow p-2">
        <h3 className="font-semibold">{task.title}</h3>
        <p className="text-sm text-gray-700">
          {task.description || "No description"}
        </p>
      </div>
    ));

  return (
    <div
      className={`absolute top-32 right-0 px-4 py-5 text-gray-900 
        ${collapsed ? "w-[calc(100%-72px)]" : "w-[calc(100%-256px)]"} 
        overflow-y-auto`}
    >
      <div className="flex flex-col sm:flex-row gap-4 h-full w-full">
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
      className={`min-w-[300px] flex-1 h-auto rounded-lg shadow-md border-l-4 border-${border} bg-[#f9fafb]`}
    >
      <div className="flex justify-between items-center gap-2 p-2 rounded pb-0 pt-0">
        <div className="flex items-center gap-2 p-1 text-gray-700 font-medium">
          <span className={`h-2 w-2 rounded-full bg-${color}`}></span>
          {title}
        </div>
        <div className="flex gap-2">
          <MoreHorizontal className="w-4 h-4 text-[#5a5959] cursor-pointer" />
          <Plus className="w-4 h-4 text-[#5a5959] cursor-pointer" />
        </div>
      </div>

      <button className="w-[96%] m-2 pl-0 flex justify-start items-center border border-black gap-1 text-sm add-task">
        <Plus className="w-4 h-4 text-[#707070]" />
        Add Task
      </button>

      {tasks.length > 0 ? (
        tasks
      ) : (
        <div className="text-sm m-2 text-gray-500">No tasks yet</div>
      )}
    </div>
  );
}
