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

router.get("/criarRecursos.js",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/controller/criarRecursos.js"));
})

router.get("/criarAdmins.js",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/controller/criarAdmins.js"));
})

router.get("/registoEmpresav2.js",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/controller/registoEmpresav2.js"));
})

router.get("/criarAnuncio.js",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/controller/criarAnuncio.js"));
})

router.get("/ofertas.js",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/controller/ofertas.js"));
})

router.get("/gerirRecursos.js",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/controller/gerirRecursos.js"));
})

router.get("/recursos.js",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/controller/recursos.js"));
})

router.get("/login.js",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/controller/login.js"));
})


module.exports = router;