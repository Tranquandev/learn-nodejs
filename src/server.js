const express = require("express");
const viewEngineConfig = require("./config/viewEngineConfig");
const webRoutes = require("./routes/webRoutes");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8081;

//config req.body
app.use(bodyParser.urlencoded({ extended: true }));

// config view
viewEngineConfig(app);

// routes
app.use("/", webRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
