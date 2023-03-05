const express = require("express");
const { createProject } = require("../controllers/projectController");

const projectRoutes = express.Router();

projectRoutes.post("/projects", createProject);

module.exports = projectRoutes;
