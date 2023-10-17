const express = require("express");
const router = express.Router();

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
} = require("../controllers/class");

router.get("/getAll", getAllClasses); 

router.post("/", addClass);
router.post("/:classId/:userId", addUserToClass);
router.put("/:classId", updateClass);
router.delete("/:classId", deleteClass);
router.put("/accept/:classId/:userId",acceptUserRequest)
router.get("/getPendingStudentClasses", getAllPendingStudentClasses);
router.get("/:classId", getOneClass);
router.get("/userAcceptedClass/:userId",getUserEnrolledClasses)

module.exports = router;
