const express = require("express");
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const userRoutes = express.Router();

userRoutes.get("/users", getUsers);
userRoutes.post("/users", createUser);
userRoutes.put("/users", updateUser);
userRoutes.delete("/users", deleteUser);

module.exports = userRoutes;
