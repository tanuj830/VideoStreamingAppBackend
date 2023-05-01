const express = require("express")
const router = express.Router()
const VideoModel = require("../models/VideoSchema")


// Getting video by id
router.get("/:id", async (req,res)=>{

    await VideoModel.findById({_id: req.params.id}).then(data=>res.send(data)).catch(err=>console.log(err))
    
})


// Searching video
router.get("/", async (req,res)=>{
try{
    const query = req.query.search
    await VideoModel.find({tags: {$in : query}}).then(data=>res.send(data)).catch(err=>console.log(err))
    
   }catch(err){ res.status(401).json("Server Error")}
})

module.exports = router