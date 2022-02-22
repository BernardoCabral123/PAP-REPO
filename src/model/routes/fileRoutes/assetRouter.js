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

router.get("/logoPlataformaPrincipal.png",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/logoPlataformaPrincipal.png"));
})

router.get("/criarAluno.svg",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/criarAluno.svg"));
})

router.get("/dados.png",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/dados.png"));
})

router.get("/MUSAMI.jpg",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/MUSAMI.jpg"));
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

router.get("/principal.png",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/principal.png"));
})

router.get("/work.svg",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/work.svg"));
})

router.get("/Estagio.svg",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/Estagio.svg"));
})

router.get("/principal.jpg",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/principal.jpg"));
})

router.get("/curso.svg",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/curso.svg"));
})

router.get("/turma.svg",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/turma.svg"));
})

router.get("/CriarConta.png",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/CriarConta.png"));
})

router.get("/procurar.png",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/procurar.png"));
})

router.get("/Empresa.png",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/Empresa.png"));
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

router.get("/duvidas.svg",(req,res)=>{
    res.sendFile(path.join(srcLocation,"/view/Assets/duvidas.svg"));
})

module.exports = router;
