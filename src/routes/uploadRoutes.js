const express = require("express");
const { uploadFile } = require("../controllers/uploadController");

const router = express.Router();

router.post("/file", uploadFile);

module.exports = router;
