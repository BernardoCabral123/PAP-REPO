const srcLocation = require("../../../srcLocation");
const path = require("path");
const express = require("express");
const router = express.Router();


router.get("/style.css",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/CSS/style.css"));
})

router.get("/login.css",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/CSS/login.css"));
})

router.get("/gerirRecursos.css",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/CSS/gerirRecursos.css"));
})

router.get("/ofertas.css",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/CSS/ofertas.css"));
})

router.get("/main.css",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/CSS/main.css"));
})

router.get("/minhaArea.css",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/CSS/minhaArea.css"));
})

module.exports = router;
