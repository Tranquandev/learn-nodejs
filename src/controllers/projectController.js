// name: String,
// startDate: String,
// endDate: String,
// description: String,
// customer: customerSchema,
// leader: userSchema,
// users: [{ type: Schema.Types.ObjectId, ref: "User" }],

const Project = require("../models/project");
const createProject = async (req, res) => {
  // console.log(">>>> check req.body", req.body);
  const {
    name,
    startDate,
    endDate,
    description,
    customerId,
    usersId,
    leaderId,
  } = req.body;
  try {
    const result = await Project.create({
      name,
      startDate,
      endDate,
      description,
      customerId,
      usersId,
      leaderId,
    });
    console.log(">>>> Check result", result);
    res.status(200).json({
      status: 200,
      message: "Create empty project sucess",
      data: {
        name,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: "Create empty project failed",
      data: {
        name,
      },
    });
  }
};

module.exports = {
  createProject,
};
