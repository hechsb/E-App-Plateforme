const jwt = require("jsonwebtoken");
require("dotenv").config();
const db = require("../controllers/user");
// const User = db.User;

const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, process.env.jwt_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.userId = decoded.id;

    next();
  });
};

const authJwt = {
  verifyToken: verifyToken,
};

module.exports = authJwt;
