import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, default: "" },
    dueDate: { type: Date, default: null },
    priority: { type: String, enum: ["low", "medium", "high"], default: "low" },
    status: {
      type: String,
      enum: ["todo", "in-progress", "done"],
      default: "todo",
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);
export default Task;
