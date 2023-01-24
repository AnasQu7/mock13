const express = require("express");
const router = express.Router();
const JobModel = require('../models/job.model')


router.post("/job", async (req, res) => {
    try{
        const {Company,Position,Contract,Location} = req.body
       
            const job = new JobModel({Company,Position,Contract,Location});
            await job.save()
            return res.status(201).send("Job added succesfully")
       
        }
        catch(err){
            res.status(404).send(err.message)
        }
});

router.delete("/job/:id", async (req, res) => {
         const {id} = req.params
    try{
            const x = await JobModel.findByIdAndDelete({_id:id})
            return res.status(201).send(x)
       
        }
        catch(err){
            res.status(404).send(err.message)
        }
});

router.patch("/job/:id", async (req, res) => {
         const {id} = req.params
    try{
            const x = await JobModel.findByIdAndUpdate({_id:id},{...req.body})
            return res.status(201).send(x)
        }
        catch(err){
            res.status(404).send(err.message)
        }
});





module.exports = router;
