const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    password: String,
    email : String,
    name : String,
    role : {
        type : String ,
        enum : ["user","admin"],
        default : "user"
    }
})

const UserModel = mongoose.model("JobUsers",UserSchema)
 
module.exports = UserModel