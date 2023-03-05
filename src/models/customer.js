const { default: mongoose } = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    address: String,
    description: String,
    image: String,
  },
  { timestamps: true }
);
const Customer = mongoose.model("customer", customerSchema);

module.exports = { customerSchema, Customer };
