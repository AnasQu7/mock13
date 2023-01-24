const express = require("express");
const router = express.Router();
const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
router.get("/", async (req, res) => {
    const token = req.headers["authorization"]
  try {
    const decoded = jwt.decode(token);
    console.log(decoded)
    let user = await UserModel.findOne({email:decoded.email, _id : decoded.id })
      return res.status(201).send({email:user.email ,name : user.name, _id : user.id });
    
    
  } catch (err) {
    res.status(404).send({message:err.message});
  }
});
module.exports = router;
