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
    if (!err) {
     
      req.userId = decoded.id;

      next();
     
    }if(err){
      console.log("jawhaaaaaaaaaaaaaaaaaaaaaar")
      return res.status(401).send({ message: "Unauthorized!" });
    }

  });
};

const authJwt = {
  verifyToken: verifyToken,
};

module.exports = authJwt;
