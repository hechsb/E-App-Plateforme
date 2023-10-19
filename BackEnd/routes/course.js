const express = require("express");
const router = express.Router();

const {
  getAllCoursesFromClass,
  addCourseToClass,
  updateCourseInClass,
  deleteCourseFromClass,
  upload,
} = require("../controllers/course");

router.get("/:classId", getAllCoursesFromClass);
router.post("/:classId", upload, addCourseToClass);
router.put("/:courseId", updateCourseInClass);
router.delete("/:courseId", deleteCourseFromClass);

module.exports = router;
