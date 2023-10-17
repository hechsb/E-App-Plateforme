const { Sequelize, DataTypes, INTEGER } = require("sequelize");
const config = require("./config/config.json");

const sequelize = new Sequelize(config.database, config.User, config.password, {
  host: config.host,
  dialect: "mysql",
});
const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./models/user")(sequelize, DataTypes);
db.Class = require("./models/class")(sequelize, DataTypes);
db.Course = require("./models/course")(sequelize, DataTypes);

db.User.belongsToMany(db.Class, {
  through: "StudentClasses",
  foreignKey: "studentId",
});
db.Class.belongsToMany(db.User, {
  through: "StudentClasses",
  foreignKey: "classId",
});

db.Class.belongsToMany(db.Course, {
  through: "ClassCourses",
  foreignKey: "classId",
});
db.Course.belongsToMany(db.Class, {
  through: "ClassCourses",
  foreignKey: "courseId",
});

const StudentClasses = sequelize.define("StudentClasses", {
  status: {
    type: DataTypes.ENUM("pending", "accepted", "rejected"),
    defaultValue: "pending",
  },
  studentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  classId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

db.StudentClasses = StudentClasses;

const connect = async () => {
  try {
    await db.sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

// db.sequelize.sync({ force: true });

connect();
module.exports = db;
