import express from "express";
const router = express.Router();
import {
  signinHandler,
  signupHandler,
  addOfficeHandler,
  getOfficesByAdminIdHandler,
  getEmployeesByOfficeIdHandler,
  getAttendanceByEmpIdHandler,
  getManualAttendanceByEmpIdHandler,
} from "../../controllers/admin.js";

router.post("/signin", signinHandler);
router.post("/signup", signupHandler);
router.post("/addOffice", addOfficeHandler);
router.get("/getOfficesByAdminId/:adminId", getOfficesByAdminIdHandler);
router.get("/getEmployeesByOfficeId/:officeId", getEmployeesByOfficeIdHandler);
router.get("/getAttendanceByEmpId/:empId", getAttendanceByEmpIdHandler);
router.get("/getManualAttendanceByEmpId/:empId", getManualAttendanceByEmpIdHandler);

export default router;
