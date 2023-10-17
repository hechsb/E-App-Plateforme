const express = require("express");
const passport =require("passport")
const router = express.Router();

router.get("/testAuth", passport.authenticate("jwt",{session:false}) , 
(req,res)=>{
    res.send("you have 400£");
}
)

module.exports=router