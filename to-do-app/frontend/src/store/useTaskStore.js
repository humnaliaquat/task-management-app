// store/useTaskStore.js
import { create } from "zustand";
import axios from "axios";

const useTaskStore = create((set, get) => ({
  tasks: [],
  projects: [],

  fetchTasks: async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/tasks");
      set({ tasks: res.data });
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  },

  addTask: async (newTask) => {
    try {
      const res = await axios.post("http://localhost:5000/api/tasks", newTask);
      set({ tasks: [res.data, ...get().tasks] });
    } catch (error) {
      console.error("Error adding task:", error);
    }
  },

  fetchProjects: async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/projects");
      set({ projects: res.data });
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  },

  addProject: async (projectName) => {
    try {
      const res = await axios.post("http://localhost:5000/api/projects", {
        name: projectName,
      });
      set({ projects: [res.data, ...get().projects] });
    } catch (error) {
      console.error("Error adding project:", error);
    }
  },
}));

export default useTaskStore;
