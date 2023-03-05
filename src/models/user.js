const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
});
const User = mongoose.model("user", userSchema);

module.exports = {
  userSchema,
  User,
};
