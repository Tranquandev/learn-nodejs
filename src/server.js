const express = require("express");
const viewEngineConfig = require("./config/viewEngineConfig");
const webRoutes = require("./routes/webRoutes");
const apiRoutes = require("./routes/apiRoutes");
const bodyParser = require("body-parser");

const connection = require("./config/db");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8081;

//config req.body
app.use(bodyParser.urlencoded({ extended: true }));

// config view
viewEngineConfig(app);

// routes
app.use("/", webRoutes);
app.use("/api/", apiRoutes);

// run
(async () => {
  try {
    await connection();
    app.listen(port, () => {
      console.log(`BE listening on port ${port}`);
    });
  } catch (error) {
    console.log(">>>>> check error connect db:", error);
  }
})();
