const User = require("../models/user");

const getUsers = async (req, res) => {
  const data = await User.find({});

  res.status(200).json({
    status: "success",
    data: data,
  });
};
const createUser = async (req, res) => {
  const { fullName, email, password } = req.body;
  const data = await User.create({
    fullName,
    email,
    password,
  });
  res.status(201).json({
    status: "create user success",
    data: data,
  });
};
const updateUser = async (req, res) => {
  const { fullName, email, password, id } = req.body;
  const data = await User.updateOne(
    { _id: id },
    { fullName: fullName, email: email, password: password }
  );
  res.status(200).json({
    status: "update user success",
    data: data,
  });
};
const deleteUser = async (req, res) => {
  const { id } = req.body;
  const data = await User.deleteOne({ _id: id });
  res.status(200).json({
    status: "delete user success",
    data: data,
  });
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
