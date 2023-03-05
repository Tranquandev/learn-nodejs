const express = require("express");
const {
  createCustomer,
  deleteCustomer,
  updateCustomer,
  getAllCustomers,
  getCustomer,
} = require("../controllers/customerController");

const customerRoutes = express.Router();

customerRoutes.get("/customers", getAllCustomers);
customerRoutes.get("/customers/:id", getCustomer);
customerRoutes.post("/customers", createCustomer);
customerRoutes.delete("/customers", deleteCustomer);
customerRoutes.put("/customers", updateCustomer);

module.exports = customerRoutes;
