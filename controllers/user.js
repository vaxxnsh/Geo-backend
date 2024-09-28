import Employee from "../models/employee.js";
import jwt from "jsonwebtoken";
import { userSigninSchema, userSignupSchema } from "../validation/schema.js";
import Attendance from "../models/attendance.js";

export const signinHandler = async (req, res) => {
  const userPayload = req.body;
  const isValid = userSigninSchema.safeParse(userPayload);

  if (!isValid.success) {
    res.json({ message: "Invalid Information" });
    return;
  }
  console.log(userPayload)
  const employee = await Employee.findOne({
    email: userPayload.email,
    password: userPayload.password,
  });

  if (employee) {
    const token = await jwt.sign({ employee }, process.env.JWT_SECRET);

    res.status(200).json({
      message: "Employee signed in.",
      employee: employee,
      token: token,
    });
  } else {
    res.status(200).json({
      message: "Employee does not exist.",
      employee: null,
      token: null,
    });
  }
};

export const signupHandler = async (req, res) => {
  const userPayload = req.body;
  const isValid = userSignupSchema.safeParse(userPayload);

  if (!isValid.success) {
    res.json({ message: "Invalid Information" });
    return;
  }

  const employeeExists = await Employee.findOne({
    email: userPayload.email,
  });

  if (!employeeExists) {
    const employee = await Employee.create({
      name: userPayload.name,
      email: userPayload.email,
      phone: userPayload.phone,
      password: userPayload.password,
    });

    res.status(200).json({
      message: "Employee created.",
      employee: employee,
    });
  } else {
    res.status(200).json({
      message: "Employee exists.",
      employee: null,
    });
  }
};

export const joinOfficeHandler = async (req, res) => {
  const { empId, officeId } = req.body;

  try {
    const employee = await Employee.updateOne(
      { _id: empId },
      {
        office: officeId,
      }
    );
    res.status(200).json(employee);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getAttendanceByEmpIdHandler = async (req, res) => {
  const empId = req.params.empId;
  try {
    const attendance = await Attendance.find({ employeeID: empId });
    res.status(200).json(attendance);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getManualAttendanceByEmpIdHandler = async (req, res) => {
  const empId = req.params.empId;
  try {
    const manualAttendance = await ManualAttendance.find({ employeeID: empId });
    res.status(200).json(manualAttendance);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const markAttendanceHandler = async (req, res) => {
  const {
    employeeID,
    checkin_time,
    checkout_time,
    latitude,
    longitude,
    total_hours,
  } = req.body;

  try {
    const attendance = await Attendance.create({
      employeeID,
      checkin_time,
      checkout_time,
      latitude,
      longitude,
      total_hours
    });

    res
      .status(200)
      .json({
        attendance: attendance,
        message: "Attendance marked successfully.",
      });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const markManualAttendanceHandler = async (req, res) => {
  const {
    employeeID,
    checkin_time,
    checkout_time,
    latitude,
    longitude,
    total_hours,
    isManual,
    suggested_location,
  } = req.body;

  try {
    const attendance = await Attendance.create({
      employeeID,
      checkin_time,
      checkout_time,
      latitude,
      longitude,
      total_hours,
      isManual,
      suggested_location,
    });

    res
      .status(200)
      .json({
        attendance: attendance,
        message: "Attendance marked successfully.",
      });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
