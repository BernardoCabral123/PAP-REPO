const express = require("express");
const router = express.Router();

const alunoRouter = require("./apiRoutes/alunoRouter");
router.use("/alunos",alunoRouter);

const turmaRouter = require("./apiRoutes/turmaRouter");
router.use("/turmas",turmaRouter);

const cursoRouter = require("./apiRoutes/cursoRouter");
router.use("/cursos",cursoRouter);

module.exports = router;
