const srcLocation = require("../../../srcLocation");
const express = require("express");
const router = express.Router();

var bodyParser = require('body-parser')

const dbConnection = require("../../dbConnection");

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get(`/`,(req,res)=>{
    dbConnection.query("SELECT * FROM curso;",(err,result)=>{
        if(err){
            console.log("falha na execucao do query")
        }
        else{
            res.json(result);
        }
    })
});

router.post(`/`,(req,res)=>{
    let newCurso = req.body;
    dbConnection.query(`CALL criarCurso('${newCurso.sigla}','${newCurso.designacao}','${newCurso.nivel}','${newCurso.idArea}')`,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send("deu certo\n");
        }
  });
});



module.exports = router;