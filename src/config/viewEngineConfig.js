const path = require("path");
const express = require("express");
const viewEngineConfig = (app) => {
  // config template engine
  app.set("views", path.join("./src", "views"));
  console.log(__dirname);
  app.set("view engine", "ejs");
  // config static files
  app.use(express.static(path.join("./src", "public")));
};
module.exports = viewEngineConfig;
