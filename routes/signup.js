const express=require('express')
const router=express.Router()
const UserModel = require('../models/user.model')

router.post("/",async(req,res)=>{
    try{
    const {email, name , password } = req.body
    const found = await UserModel.findOne({email})
    if(found){
        return res.status(401).send("User Already Exist")
    }
    if(email.includes("@masaischool.com")){
        const user = new UserModel({email,name,password,role : "admin"});
        await user.save()
        return res.status(201).send("User created succesfully")
    }
    const user = new UserModel({email,name,password});
    await user.save()
    return res.status(201).send("User created succesfully")
    }
    catch(err){
        res.status(404).send(err.message)
    }
})
module.exports=router;