const srcLocation = require("../../srcLocation");
const express = require("express");
const router = express.Router();


const apiRouter = require("./apiRouter");
router.use("/api",apiRouter);

const fileRouter = require("./fileRouter");
router.use("/files",fileRouter);

router.get("/",(req,res)=>{
    res.send("root page"); 
    console.log()
})

module.exports = router;