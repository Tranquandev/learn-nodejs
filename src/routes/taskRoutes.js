const express = require("express");
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const taskRoutes = express.Router();

taskRoutes.get("/tasks", getTasks);
taskRoutes.post("/tasks", createTask);
taskRoutes.put("/tasks", updateTask);
taskRoutes.delete("/tasks", deleteTask);

module.exports = taskRoutes;
