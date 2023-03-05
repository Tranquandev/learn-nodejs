const { default: mongoose } = require("mongoose");
const User = mongoose.model("User", userSchema);
const Project = mongoose.model("Project", projectSchema);
const taksSchema = new mongoose.Schema({
  name: String,
  desc: String,
  users: [User],
  project: Project,
  status: String,
  startDate: String,
  endDate: String,
});
const Task = mongoose.model("task", taksSchema);

module.exports = Task;
