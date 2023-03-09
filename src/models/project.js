const { default: mongoose, Schema } = require("mongoose");
const { customerSchema } = require("./customer");
const { userSchema } = require("./user");

const projectSchema = new mongoose.Schema(
  {
    name: String,
    startDate: String,
    endDate: String,
    description: String,
    customerId: { type: Schema.Types.ObjectId, ref: "customer" },
    leaderId: { type: Schema.Types.ObjectId, ref: "user" },
    usersId: [{ type: Schema.Types.ObjectId, ref: "user" }],
    tasksId: [{ type: Schema.Types.ObjectId, ref: "task" }],
  },
  { timestamps: true }
);
const Project = mongoose.model("project", projectSchema);
module.exports = Project;
