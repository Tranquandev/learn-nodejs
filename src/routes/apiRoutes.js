const express = require("express");
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/apiController");

const router = express.Router();

router.get("/users", getUsers);
router.post("/users", createUser);
router.put("/users", updateUser);
router.delete("/users", deleteUser);

module.exports = router;
