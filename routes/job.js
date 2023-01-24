const { query } = require("express");
const express = require("express");
const router = express.Router();
const JobModel = require('../models/job.model')


router.get("/", async (req, res) => {
    const {contract,q,location} = req.query
   
    try{
            
            let jobs = await JobModel.find({});
            
            if(contract){
              jobs = jobs.filter((e)=>e.Contract===contract)
            }
            if(location){
                jobs = jobs.filter((e)=>e.Location === location)
            }
            if(q){
                jobs = await JobModel.find(
                    { "Company": { "$regex": q } })
            }
            return res.status(201).send(jobs)
       
        }
        catch(err){
            res.status(404).send(err.message)
        }
});






module.exports = router;
