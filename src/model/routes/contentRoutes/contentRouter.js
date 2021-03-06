const srcLocation = require("../../../srcLocation");
const path = require("path");
const express = require("express");
const router = express.Router();



router.get("/navbar",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/model/content/navsFooter/nav.html"));
})

router.get("/footer",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/model/content/navsFooter/footer.html"));
})


router.use("/admin", require("./adminContentRouter"));

module.exports = router;