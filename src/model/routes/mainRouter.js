const srcLocation = require("../../srcLocation");
const path = require("path");
const express = require("express");
const router = express.Router();


const apiRouter = require("./apiRouter");
router.use("/api",apiRouter);

const fileRouter = require("./fileRouter");
router.use("/files",fileRouter);

router.use("/content", require("./contentRouter"));

//todos
router.get("/",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/HTML/home.html"));
})

router.get("/login",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/HTML/login.html"));
})

router.get("/perfil",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/HTML/perfil.html"));
})


//Alunos
router.get("/ofertas",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/HTML/ofertas.html"));
})


//empresa
router.get("/registo",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/HTML/registoEmpresa.html"));
})

router.get("/minha-area",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/HTML/minhaArea.html"));
})

router.get("/minha-area/gerir-anuncio",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/HTML/gerirAnuncio.html"));
})

router.get("/minha-area/criar-anuncio",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/HTML/criarAnuncio.html"));
})


//ADMIN e DIRETOR
router.get("/gerir-recursos",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/HTML/gerirRecursos.html"));
})


//ADMIN
router.get("/criar-recursos",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/HTML/gestao.html"));
})
module.exports = router;