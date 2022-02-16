const srcLocation = require("../../../srcLocation");
const fs = require("fs");
const path = require("path");
const express = require("express");
const router = express.Router();

const dbConnection = require("../../dbConnection");

router.get(`/`,(req,res)=>{
    dbConnection.query("SELECT * FROM vistaempresa;",(err,result)=>{
        if(err){
            console.log("falha na execucao do query")
        }
        else{
            res.json(result);
        }
    })
});

router.post(`/`,(req,res)=>{

    dbConnection.query(`SELECT COUNT(conta.idConta) AS contagem FROM conta WHERE conta.email = '${req.body.email}';`,(err,result)=>{
        if(err){
            console.log(err)
        }else
            if(result[0].contagem == 0){
            dbConnection.query(`CALL criarEmpresa('${req.body.email}','${req.body.password}','${req.body.contactoTelefonico}','${req.body.nome}',${req.body.idConcelho},'${req.body.rua}','${req.body.numero}')`,(err,result)=>{
                if(err){
                    console.log(err);
                    res.send("Erro na introdução");
                }
                else{
                    dbConnection.query("SELECT MAX(vistaempresa.idConta) AS max FROM vistaempresa;",(err,result)=>{
                        if(err){
                            console.log(err);
                            res.send("Erro na criação da pasta");
                        }else{
                            fs.mkdir(path.join(srcLocation,`/users/${result[0].max}`), (error) => {
                                if (error) {
                                  console.log(error);
                                } else {
                                  console.log("New Directory created successfully !!");
                                }
                              });
                            res.send("deu certo");
                        }
                    })
                    
                }
          });
        }
        else{
            res.send("Já existe uma conta com esse email")
        }
    })

});

module.exports = router;