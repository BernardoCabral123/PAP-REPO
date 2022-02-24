const srcLocation = require("../../../srcLocation");
const path = require("path");
const express = require("express");
const router = express.Router();

//home

router.get("/work.svg",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/work.svg"));
})

router.get("/procurar.png",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/procurar.png"));
})

router.get("/numero-1.png",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/numero-1.png"));
})

router.get("/numero-2.png",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/numero-2.png"));
})

router.get("/numero-3.png",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/numero-3.png"));
})

router.get("/numero-1verde.png",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/numero-1verde.png"));
})

router.get("/numero-2verde.png",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/numero-2verde.png"));
})

router.get("/numero-3verde.png",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/numero-3verde.png"));
})

router.get("/userLogin.png",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/userLogin.png"));
})

router.get("/candidate.png",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/candidate.png"));
})

router.get("/check.png",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/check.png"));
})

router.get("/Estagio.svg",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/Estagio.svg"));
})

router.get("/CriarConta.png",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/CriarConta.png"));
})

//logos

router.get("/logoEnta.png",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/logoEnta.png"));
})

router.get("/logoPlataforma.png",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/logoPlataforma.png"));
})

router.get("/logoPlataformaPrincipal.png",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/logoPlataformaPrincipal.png"));
})

router.get("/MUSAMI.jpg",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/MUSAMI.jpg"));
})

//Criar Conta empresa

router.get("/criarEmpre.svg",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/criarEmpre.svg"));
})

//criar Anuncio
router.get("/criarAnuncio.svg",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/criarAnuncio.svg"));
})

//profile
router.get("/profile.svg",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/profile.svg"));
})

//dashboard

router.get("/diretorTurma.svg",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/diretorTurma.svg"));
})

router.get("/criarAluno.svg",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/criarAluno.svg"));
})

router.get("/curso.svg",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/curso.svg"));
})

router.get("/turma.svg",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/turma.svg"));
})

//duvidas
router.get("/duvidas.svg",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/duvidas.svg"));
})

module.exports = router;
