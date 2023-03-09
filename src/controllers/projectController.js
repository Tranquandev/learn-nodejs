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
    tasksId,
  } = req.body;
  try {
    const result = await Project.create({
      name,
      startDate,
      endDate,
      description,
      customerId,
      leaderId,
      usersId,
      tasksId,
    });
    console.log(">>>> Check result", result);
    res.status(200).json({
      status: 200,
      message: "Create project sucess",
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
const updateProject = async (req, res) => {
  const {
    id,
    name,
    startDate,
    endDate,
    description,
    customerId,
    usersId,
    leaderId,
    tasksId,
  } = req.body;
  try {
    const data = await Project.updateOne(
      { _id: id },
      {
        name,
        startDate,
        endDate,
        description,
        customerId,
        usersId,
        leaderId,
        tasksId,
      }
    );
    res.status(200).json({
      status: 200,
      message: "Update project success",
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: "Update project failed",
      error,
      data: {},
    });
  }
};
const deleteProject = async (req, res) => {
  try {
    const result = await Project.deleteOne({ _id: req.body.id });
    // console.log("check result delte", result, req.body.id);
    if (result.deletedCount === 1) {
      return res.status(200).json({
        status: 200,
        message: "Delete a project success",
      });
    }
    return res.status(202).json({
      status: 202,
      message: "Delete a project failed",
    });
  } catch (error) {
    return res.status(400).json({
      status: 400,
      message: "Error: " + error,
    });
  }
};
const getProject = async (req, res) => {
  const { page, limit } = req.body;
  let offset = (page - 1) * limit;
  const result = await Project.find({})
    .skip(offset)
    .limit(limit)
    .populate("customerId")
    .populate("usersId")
    .populate("leaderId");
  console.log("Check result", result);
  res.status(200).json({
    status: 200,
    message: "get project success",
    data: result,
  });
};
module.exports = {
  createProject,
  updateProject,
  deleteProject,
  getProject,
};
