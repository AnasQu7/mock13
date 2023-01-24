const express = require("express");
const router = express.Router();
const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
   
    const user = await UserModel.findOne({ email , password });

    if(user){
      const token = jwt.sign(
        { id: user._id, email: user.email , role : user.role},
        "secret1234",
        {
          expiresIn: "7 days",
        }
      );
      return res.status(201).send({ message: "Login Success", token});
    }
    else {
           return res.status(401).send({message:"incorrect credentials"});
    }
  } catch (err) {
    res.status(404).send({message:err.message});
  }
});
module.exports = router;
