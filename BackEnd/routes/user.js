const express = require("express");
const router = express.Router();
const authJwt = require("../auth/authMiddelware");

const {
  getAllUsers,
  addUser,
  logUser,
  getAllClasses,
  getUser,
} = require("../controllers/user");

router.post("/addUser", addUser);
router.post("/logUser", logUser);
// router.use(authJwt.verifyToken);
router.get("/getOneUser/:Userid", getUser)
router.get("/getAllUsers", authJwt.verifyToken, getAllUsers);

router.get("/classes/",authJwt.verifyToken, getAllClasses);

module.exports = router;
