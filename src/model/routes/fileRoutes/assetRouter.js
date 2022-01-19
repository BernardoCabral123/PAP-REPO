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

router.get("/profile.svg",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/profile.svg"));
})

router.get("/criarAnuncio.svg",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/criarAnuncio.svg"));
})

router.get("/criarEmpre.svg",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/criarEmpre.svg"));
})

router.get("/dados.svg",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/dados.svg"));
})

router.get("/profile.svg",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/profile.svg"));
})

module.exports = router;
