const { default: mongoose, Schema } = require("mongoose");

const taksSchema = new mongoose.Schema({
  name: String,
  description: String,
  userId: { type: Schema.Types.ObjectId, ref: "user" },
  projectId: { type: Schema.Types.ObjectId, ref: "project" },
  status: String,
  startDate: String,
  endDate: String,
});
const Task = mongoose.model("task", taksSchema);

module.exports = Task;
