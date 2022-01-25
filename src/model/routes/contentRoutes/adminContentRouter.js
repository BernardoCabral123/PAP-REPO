const srcLocation = require("../../../srcLocation");
const path = require("path");
const express = require("express");
const router = express.Router();

//Criar Recursos
router.get("/admin/criarAdmins",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/model/content/admin/criarAdmins.html"));
})

router.get("/admin/criarDTs",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/model/content/admin/criarDTs.html"));
})

router.get("/admin/criarAlunos",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/model/content/admin/criarAlunos.html"));
})

//Gerir Recursos

module.exports = router;