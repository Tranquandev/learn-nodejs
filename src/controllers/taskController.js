const Task = require("../models/task");
// name: String,
// desc: String,
// usersId: { type: Schema.Types.ObjectId, ref: "user" },
// projectId: { type: Schema.Types.ObjectId, ref: "project" },
// status: String,
// startDate: String,
// endDate: String,
const getTasks = async (req, res) => {
  const data = await Task.find({}).populate("userId").populate("projectId");
  res.status(200).json({
    status: "get task success",
    data: data,
  });
};
const createTask = async (req, res) => {
  const { name, description, status, startDate, endDate, userId, projectId } =
    req.body;
  const data = await Task.create({
    name,
    description,
    status,
    startDate,
    endDate,
    userId,
    projectId,
  });
  res.status(201).json({
    status: "create task success",
    data: data,
  });
};
const updateTask = async (req, res) => {
  const { name, desc, status, startDate, endDate, usersId, projectId, id } =
    req.body;
  const data = await Task.updateOne(
    { _id: id },
    { name, desc, status, startDate, endDate, usersId, projectId }
  );
  res.status(200).json({
    status: "update task success",
    data: data,
  });
};
const deleteTask = async (req, res) => {
  const { id } = req.body;
  const data = await Task.deleteOne({ _id: id });
  res.status(200).json({
    status: "delete task success",
    data: data,
  });
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};
