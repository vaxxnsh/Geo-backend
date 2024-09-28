import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  office: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Office", // Reference to Office Schema
  },
});

const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;
