const express = require("express");
const router = express.Router();

router.use("/alunos", require("./apiRoutes/alunoRouter"));

router.use("/turmas", require("./apiRoutes/turmaRouter"));

router.use("/cursos", require("./apiRoutes/cursoRouter"));

router.use("/localizacao", require("./apiRoutes/localizacaoRouter"));

module.exports = router;