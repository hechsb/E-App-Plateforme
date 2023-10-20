const { Course, Class } = require("../Database");
const multer = require("multer");
const path = require("path");

const getAllCoursesFromClass = async (req, res) => {
  const classId = req.params.classId;
  try {
    const classInstance = await Class.findByPk(classId, {
      include: {
        model: Course,
        through: {
          attributes: [],
        },
      },
    });
    if (!classInstance) {
      return res.status(404).json("Class not found");
    }
    res.json(classInstance.courses);
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal server error");
  }
};

const addCourseToClass = async (req, res) => {
  const classId = req.params.classId;
  const name = req.body.name;
  const file = req.file.path;
  try {
    const newCourse = await Course.create({
      name,
      file,
    });
    const classInstance = await Class.findByPk(classId);
    if (!classInstance) {
      return res.status(404).json("Class not found");
    }
    await classInstance.addCourse(newCourse);
    res.json(newCourse);
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal server error");
  }
};
const updateCourseInClass = async (req, res) => {
  const courseId = req.params.courseId;
  const { name, file } = req.body;
  try {
    const course = await Course.findByPk(courseId);
    if (!course) {
      return res.status(404).json("Course not found");
    }
    await course.update({
      name,
      file,
    });
    res.json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal server error");
  }
};

const deleteCourseFromClass = async (req, res) => {
  const courseId = req.params.courseId;
  try {
    const course = await Course.findByPk(courseId);
    if (!course) {
      return res.status(404).json("Course not found");
    }
    await course.destroy();
    res.json("Course deleted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal server error");
  }
};
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "files");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb("Only PDF files are allowed!");
    }
  },
}).single("file");

module.exports = {
  addCourseToClass,
  getAllCoursesFromClass,
  updateCourseInClass,
  deleteCourseFromClass,
  upload,
};
