const srcLocation = require("../../../srcLocation");
const path = require("path");
const express = require("express");
const router = express.Router();


router.get("/navFoot.js",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/controller/navFoot.js"));
})

router.get("/script.js",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/controller/script.js"));
})


module.exports = router;