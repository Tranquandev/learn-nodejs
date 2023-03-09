const express = require("express");
const {
  createProject,
  updateProject,
  getProject,
  deleteProject,
} = require("../controllers/projectController");

const projectRoutes = express.Router();

projectRoutes.post("/projects", createProject);
projectRoutes.put("/projects", updateProject);
projectRoutes.delete("/projects", deleteProject);
projectRoutes.get("/projects", getProject);

module.exports = projectRoutes;
