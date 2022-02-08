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

router.get("/registoEmpresa.js",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/controller/registoEmpresa.js"));
})

router.get("/criarAnuncio.js",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/controller/criarAnuncio.js"));
})

router.get("/ofertas.js",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/controller/ofertas.js"));
})




module.exports = router;