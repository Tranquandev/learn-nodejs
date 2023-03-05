const { default: mongoose, Schema } = require("mongoose");
const { customerSchema } = require("./customer");
const { userSchema } = require("./user");

const projectSchema = new mongoose.Schema(
  {
    name: String,
    startDate: String,
    endDate: String,
    description: String,
    customerId: { type: Schema.Types.ObjectId, ref: "Customer" },
    leaderId: { type: Schema.Types.ObjectId, ref: "User" },
    usersId: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);
const Project = mongoose.model("project", projectSchema);
module.exports = Project;
