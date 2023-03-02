const User = require("../models/user");

const getHomePage = async (req, res) => {
  const rows = await User.find({});

  res.render("home.ejs", {
    userList: rows,
  });
};
const getAddUserPage = async (req, res) => {
  res.render("addUser.ejs");
};
const getEditUserPage = async (req, res) => {
  const { id } = req.params;

  const data = await User.findById(id).exec();
  res.render("editUser.ejs", {
    user: data,
  });
};

const postAddUser = async (req, res) => {
  const { fullName, email, password } = req.body;
  await User.create({
    fullName,
    email,
    password,
  });

  res.redirect("/");
};
const postEditUser = async (req, res) => {
  const { fullName, email, password, id } = req.body;
  await User.updateOne(
    { _id: id },
    { fullName: fullName, email: email, password: password }
  );

  res.redirect("/");
};
const getRemoveUser = async (req, res) => {
  const { id } = req.params;
  await User.deleteOne({ _id: id });
  //

  res.redirect("/");
};

module.exports = {
  getHomePage,
  getAddUserPage,
  postAddUser,
  getEditUserPage,
  postEditUser,
  getRemoveUser,
};
