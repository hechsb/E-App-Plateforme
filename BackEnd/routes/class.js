const express = require("express");
const router = express.Router();
const authJwt = require("../auth/authMiddelware");


const {
  getAllClasses,
  getOneClass,
  addClass,
  updateClass,
  deleteClass,
  addUserToClass,
  acceptUserRequest,
  getAllPendingStudentClasses,
  getUserEnrolledClasses,
  getAllInactiveClasses,
  rejectUserRequest
} = require("../controllers/class");

router.get("/getAll", getAllClasses);
router.get("/getAllInactiveClasses", getAllInactiveClasses);
router.post("/", addClass);
router.post("/:classId/:userId", addUserToClass);
router.put("/:classId", updateClass);
router.delete("/:classId", deleteClass);
router.put("/accept/:classId/:userId", acceptUserRequest);
router.put("/reject/:classId/:userId", rejectUserRequest);
router.get("/getPendingStudentClasses", getAllPendingStudentClasses);
router.get("/:classId", getOneClass);
router.get("/userAcceptedClass", getUserEnrolledClasses)

module.exports = router;
