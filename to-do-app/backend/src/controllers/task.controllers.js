import Task from "../models/task.model.js";
import express from "express";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
export const createTask = async (req, res) => {
  console.log("📥 Incoming task data:", req.body);

  try {
    const { title, description, dueDate, priority, status } = req.body;
    const task = new Task({ title, description, dueDate, priority, status });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    console.error("❌ Error creating task:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.status(204).send();
};
export const toggleComplete = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (task) {
    task.completed = !task.completed;
    await task.save();
    res.json(task);
  } else {
    res.status(404).send();
  }
};
