import React from "react";

const ProjectCard = ({ title, taskCount, onView, onDelete }) => {
  return (
    <div className="bg-[#1e293b] p-4 rounded-lg shadow hover:shadow-lg transition">
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="text-gray-400 text-sm mb-2">{taskCount} Tasks</p>
      <div className="flex justify-between">
        <button className="text-blue-400 hover:underline" onClick={onView}>
          View
        </button>
        <button className="text-red-400 hover:underline" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
