import React from "react";
import { Plus, MoreHorizontal } from "lucide-react";

export default function Content({ collapsed }) {
  return (
    <div
      className={`absolute top-32 right-0 px-2 py-5 text-gray-900 
      ${collapsed ? "w-[calc(100%-72px)]" : "w-[calc(100%-256px)]"} 
       overflow-y-auto`}
    >
      {/* Responsive Horizontal Scroll Container */}
      <div className="flex flex-col sm:flex-row gap-4 h-full w-full ">
        {/* TO DO */}
        <div
          className="min-w-[300px] flex-1 h-auto rounded-lg shadow-md border-l-4 border-indigo-600 bg-[#f9fafb]"
          style={{
            backgroundColor: "var(--card)",
            color: "var(--text)",
          }}
        >
          <div className="flex justify-between items-center gap-2 p-2 rounded pb-0 pt-0">
            <div className="flex items-center gap-2 p-1 text-gray-700 font-medium">
              <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
              TO DO
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
          <div className="bg-white m-2 rounded shadow p-2">hello</div>
        </div>

        {/* IN PROGRESS */}
        <div className="min-w-[300px] flex-1 h-auto rounded-lg shadow-md border-l-4 border-yellow-500 bg-[#f9fafb]">
          <div className="flex justify-between items-center gap-2 p-2 rounded pb-0 pt-0">
            <div className="flex items-center gap-2 p-1 text-gray-700 font-medium">
              <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
              IN PROGRESS
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
          <div className="bg-white m-2 rounded shadow p-2">hello</div>
        </div>

        {/* DONE */}
        <div className="min-w-[300px] flex-1 h-auto rounded-lg shadow-md border-l-4 border-emerald-500 bg-[#f9fafb]">
          <div className="flex justify-between items-center gap-2 p-2 rounded pb-0 pt-0">
            <div className="flex items-center gap-2 p-1 font-medium text-gray-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500 "></span>
              DONE
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
          <div className="bg-white m-2 p-2 rounded shadow">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            reiciendis, dolore ex at, debitis sequi, perspiciatis accusamus
            provident a aliquid molestiae aut obcaecati neque minus ad
            inventore... Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Laborum similique illo sunt atque adipisci dolorum dolore,
            itaque, voluptatibus quas, esse quam! Officia est quisquam at saepe
            deleniti autem quam porro. lo
          </div>
        </div>
      </div>
    </div>
  );
}
