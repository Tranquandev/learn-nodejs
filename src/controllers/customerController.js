const { Customer } = require("../models/customer");
const { handleUploadFile } = require("../services/uploadServices");

const createCustomer = async (req, res) => {
  const { name, email, phone, address, description } = req.body;
  let image = req.files?.image;
  if (!req.files || Object.keys(req.files).length === 0) {
    image = "";
  } else {
    responseImg = await handleUploadFile(image);
    image = responseImg.data.imgSuccess[0].path;
  }
  const dataCustomer = {
    name: name.trim(),
    email,
    phone,
    address,
    description,
    image,
  };
  // console.log("Check data >>>>>>>>>>>", dataCustomer);
  try {
    await Customer.create(dataCustomer);
    return res.status(201).json({
      status: 201,
      message: "Create a user success",
      data: {
        name: dataCustomer.name,
        email: dataCustomer.email,
      },
    });
  } catch (error) {
    return res.status(400).json({
      status: 400,
      message: "Create a user failed",
      data: {
        error,
      },
    });
  }
};
const deleteCustomer = async (req, res) => {
  try {
    const result = await Customer.deleteOne({ _id: req.body.id });
    console.log("check result", result, req.body.id);
    if (result.deletedCount === 1) {
      return res.status(200).json({
        status: 200,
        message: "Delete a customer success",
      });
    }
    return res.status(202).json({
      status: 202,
      message: "Delete customer failed",
    });
  } catch (error) {
    return res.status(400).json({
      status: 400,
      message: "Error: " + error,
    });
  }
};
const updateCustomer = async (req, res) => {
  const { name, email, phone, address, description } = req.body;
  try {
    const result = await Customer.updateOne(
      { _id: req.body.id },
      { name, email, phone, address, description }
    );
    console.log("check result", result, req.body.id);
    if (result.matchedCount === 1) {
      return res.status(200).json({
        status: 200,
        message: "update a customer success",
      });
    }
    return res.status(202).json({
      status: 202,
      message: "Update customer failed",
    });
  } catch (error) {
    return res.status(400).json({
      status: 400,
      message: "Error: " + error,
    });
  }
};
const getAllCustomers = async (req, res) => {
  const { page, limit } = req.query;
  const offset = (page - 1) * limit;

  try {
    const result = await Customer.find({}).skip(offset).limit(limit);
    const totalPage = await Customer.countDocuments({});
    // console.log("Check get customers", result);
    if (result.length >= 1) {
      return res.status(200).json({
        status: 200,
        message: "Get all customers success",
        page,
        limit,
        totalPage,
        data: result,
      });
    }
    return res.status(200).json({
      status: 200,
      message: "Customers is empty",
      data: [],
    });
  } catch (error) {
    return res.status(400).json({
      status: 400,
      message: "Error: " + error,
    });
  }
};
const getCustomer = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Customer.findById({ _id: id });
    console.log("Check get customers", result);
    if (result) {
      return res.status(200).json({
        status: 200,
        message: "Get a customers success",
        data: result,
      });
    }
    return res.status(200).json({
      status: 200,
      message: "Customers is not exits",
      data: {},
    });
  } catch (error) {
    return res.status(400).json({
      status: 400,
      message: "Error: " + error,
    });
  }
};
module.exports = {
  createCustomer,
  deleteCustomer,
  updateCustomer,
  getAllCustomers,
  getCustomer,
};
