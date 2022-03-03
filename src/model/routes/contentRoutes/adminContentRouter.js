const srcLocation = require("../../../srcLocation");
const path = require("path");
const express = require("express");
const router = express.Router();

//Criar Recursos
router.get("/criarAdmins",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/model/content/admin/criarRecursos/criarAdmins.html"));
})

router.get("/criarDTs",(req,res)=>{
   res.sendFile(path.join(srcLocation,"/model/content/admin/criarRecursos/criarDTs.html"));
})

router.get("/criarAlunos",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/model/content/admin/criarRecursos/criarAlunos.html"));
})

router.get("/criarCursos",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/model/content/admin/criarRecursos/criarCursos.html"));
})

router.get("/criarTurmas",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/model/content/admin/criarRecursos/criarTurmas.html"));
})

//Gerir Recursos
router.get("/gerirAdmins",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/model/content/admin/gerirRecursos/gerirAdmins.html"));
})

router.get("/gerirDTs",(req,res)=>{
   res.sendFile(path.join(srcLocation,"/model/content/admin/gerirRecursos/gerirDTs.html"));
})

router.get("/gerirAlunos",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/model/content/admin/gerirRecursos/gerirAlunos.html"));
})

router.get("/gerirEmpresas",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/model/content/admin/gerirRecursos/gerirEmpresas.html"));
})

router.get("/gerirTurmas",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/model/content/admin/gerirRecursos/gerirTurmas.html"));
})

router.get("/pedidosAlunos",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/model/content/admin/gerirRecursos/pedidosAlunos.html"));
})

module.exports = router;