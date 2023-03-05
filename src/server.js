const express = require("express");

const uploadRoutes = require("./routes/uploadRoutes");
const bodyParser = require("body-parser");

const connection = require("./config/db");
const fileUpload = require("express-fileupload");
const customerRoutes = require("./routes/customerRoutes");
const userRoutes = require("./routes/userRoutes");
const projectRoutes = require("./routes/projectRoutes");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8081;

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config uppload file
app.use(fileUpload());
// routes
app.use("/api/", uploadRoutes, customerRoutes, userRoutes, projectRoutes);

// run
(async () => {
  try {
    await connection();
    app.listen(port, () => {
      console.log(`Server run on port ${port}`);
    });
  } catch (error) {
    console.log(">>>>> check error connect db:", error);
  }
})();
