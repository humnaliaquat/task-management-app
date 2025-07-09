import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import taskRoutes from "./routes/task.routes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/tasks", taskRoutes);

mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
