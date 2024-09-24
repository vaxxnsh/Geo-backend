import express from "express";
const router = express.Router();
import {
  signinHandler,
  signupHandler,
  joinOfficeHandler,
  getAttendanceByEmpIdHandler,
  getManualAttendanceByEmpIdHandler,
  markAttendanceHandler,
  markManualAttendanceHandler
} from "../../controllers/User.js";

router.post("/signin", signinHandler);
router.post("/signup", signupHandler);
router.post("/joinOffice", joinOfficeHandler);
router.get("/getAttendanceByEmpId/:empId", getAttendanceByEmpIdHandler);
router.get("/getManualAttendanceByEmpId/:empId", getManualAttendanceByEmpIdHandler);
router.post("/markAttendance", markAttendanceHandler)
router.post("/markManualAttendance", markManualAttendanceHandler)

export default router;
