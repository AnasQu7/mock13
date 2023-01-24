// "o32Rt3XTzkw4cHPb"
const express = require("express")
const mongoose = require("mongoose")
const signupRoute = require("../routes/signup")
const loginRoute = require('../routes/login')
const getUserRoute = require('../routes/getUser')
const checkRoleRoute = require('../routes/checkRole')
const adminRoute = require('../routes/admin')
const JobRoute = require('../routes/job')
const cors = require('cors')
const verifyAdmin = require("../middlewares/verifyadmin")
const app = express()
app.use(cors())

mongoose.set("strictQuery", false);

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use("/signup",signupRoute)
app.use('/login',loginRoute)
app.use('/getuser',getUserRoute)
app.use("/jobs",JobRoute)
app.use(verifyAdmin)
app.use("/checkrole",checkRoleRoute)
app.use('/admin',adminRoute)

mongoose.connect("mongodb+srv://An:o32Rt3XTzkw4cHPb@cluster0.hjklaur.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    app.listen(8000 , ()=>{
        console.log("running on http://localhost:8000")
    })
})