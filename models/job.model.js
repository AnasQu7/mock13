const mongoose = require("mongoose")

const JobSchema = new mongoose.Schema({
    Company  : String,
    Position : String,
    Contract : String,
    Location : String
})

const JobModel = mongoose.model("Jobs",JobSchema)
 
module.exports = JobModel