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
} = require("../controllers/class");

router.get("/getAll", getAllClasses);

router.post("/",authJwt.verifyToken, addClass);
router.post("/:classId/:userId",authJwt.verifyToken, addUserToClass);
router.put("/:classId",authJwt.verifyToken, updateClass);
router.delete("/:classId",authJwt.verifyToken, deleteClass);
router.put("/accept/:classId/:userId",authJwt.verifyToken, acceptUserRequest)
router.get("/getPendingStudentClasses",authJwt.verifyToken, getAllPendingStudentClasses);
router.get("/:classId", authJwt.verifyToken,getOneClass);
router.get("/userAcceptedClass/:userId",authJwt.verifyToken, getUserEnrolledClasses)

module.exports = router;
