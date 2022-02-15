const express = require("express");
const router = express.Router();

router.use("/alunos", require("./alunoRouter"));

router.use("/turmas", require("./turmaRouter"));

router.use("/cursos", require("./cursoRouter"));

router.use("/localizacao", require("./localizacaoRouter"));

module.exports = router;