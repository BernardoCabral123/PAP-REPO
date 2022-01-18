const srcLocation = require("../../../srcLocation");
const express = require("express");
const router = express.Router();

var bodyParser = require('body-parser')

const dbConnection = require("../../dbConnection");

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get(`/`,(req,res)=>{
    dbConnection.query("SELECT * FROM Alunos;",(err,result)=>{
        if(err){
            console.log("falha na execucao do query")
        }
        else{
            res.json(result);
        }
    })
});

router.post(`/`,(req,res)=>{

    let newArea = req.body;

    dbConnection.query(`CALL criarArea('${newArea.designacao}')`,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send("deu certo");
        }
  });
});

module.exports = router;