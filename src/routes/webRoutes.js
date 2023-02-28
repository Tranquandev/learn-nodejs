const express = require("express");
const {
  getHomePage,
  getAddUserPage,
  postAddUser,
  getEditUserPage,
  postEditUser,
  getRemoveUser,
} = require("../controllers/homeController");
const router = express.Router();

// routes get page
router.get("/", getHomePage);
router.get("/add-user", getAddUserPage);
router.get("/edit-user/:id", getEditUserPage);

// routes process
router.post("/add-user", postAddUser);
router.post("/edit-user", postEditUser);
router.get("/remove-user/:id", getRemoveUser);

module.exports = router;
