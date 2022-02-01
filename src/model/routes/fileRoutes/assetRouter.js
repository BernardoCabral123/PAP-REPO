const srcLocation = require("../../../srcLocation");
const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/logoEnta.png",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/logoEnta.png"));
})

router.get("/pessoa.svg",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/pessoa.svg"));
})

router.get("/diretorTurma.svg",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/diretorTurma.svg"));
})

router.get("/edificio.png",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/edificio.png"));
})

router.get("/profile.svg",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/profile.svg"));
})

router.get("/criarAnuncio.svg",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/criarAnuncio.svg"));
})

router.get("/criarEmpre.svg",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/criarEmpre.svg"));
})

router.get("/logoPlataforma.png",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/logoPlataforma.png"));
})

router.get("/criarAluno.svg",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/criarAluno.svg"));
})

router.get("/dados.png",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/dados.png"));
})

router.get("/profile.svg",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/profile.svg"));
})

router.get("/lab.jpg",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/lab.jpg"));
})

router.get("/reuniao.jpg",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/reuniao.jpg"));
})

router.get("/servidores.jpg",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/servidores.jpg"));
})

module.exports = router;
