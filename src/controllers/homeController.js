const connection = require("../config/db");

const getHomePage = async (req, res) => {
  const [rows, fields] = await connection.execute(
    "SELECT * FROM users ORDER BY id DESC"
  );

  res.render("home.ejs", {
    userList: rows,
  });
};
const getAddUserPage = async (req, res) => {
  const [rows, fields] = await connection.execute("SELECT * FROM `users`");

  res.render("addUser.ejs");
};
const getEditUserPage = async (req, res) => {
  // const [rows, fields] = await connection.execute("SELECT * FROM `users`");
  // res.render("addUser.ejs");
  const { id } = req.params;
  const [rows, fields] = await connection.execute(
    "SELECT * FROM `users` where id = ?",
    [id]
  );

  res.render("editUser.ejs", {
    user: rows[0],
  });
};

const postAddUser = async (req, res) => {
  const { fullName, email, password } = req.body;
  const resultAddNew = await connection.execute(
    "INSERT INTO users (fullName, email, password) VALUES (?,?,?)",
    [fullName, email, password]
  );

  // console.log(">>> resultAddNew: ", resultAddNew);
  res.redirect("/");
};
const postEditUser = async (req, res) => {
  const { fullName, email, password, id } = req.body;

  const updateUser = await connection.execute(
    `UPDATE users
    SET fullName = ?, email = ?, password = ?
    WHERE id = ?`,
    [fullName, email, password, id]
  );

  res.redirect("/");
};
const getRemoveUser = async (req, res) => {
  const { id } = req.params;

  const updateUser = await connection.execute(`DELETE FROM users WHERE id=?`, [
    id,
  ]);

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
