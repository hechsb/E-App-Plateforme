const express = require("express");
const router = express.Router();
const multer = require('multer');



const {
  getAllCoursesFromClass,
  addCourseToClass,
  updateCourseInClass,
  deleteCourseFromClass,
} = require("../controllers/course");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './files'); // Store uploaded files in the 'files' directory
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/:classId", getAllCoursesFromClass);
router.post("/:classId", upload.single('file'), addCourseToClass);
router.put("/:courseId", upload.single('file'), updateCourseInClass);
router.delete("/:courseId", deleteCourseFromClass);

module.exports = router;
