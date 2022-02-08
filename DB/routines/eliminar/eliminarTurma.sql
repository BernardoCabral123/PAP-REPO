CREATE PROCEDURE eliminarTurma (IN idTurma INT)
BEGIN
	DELETE FROM turma WHERE turma.idTurma = idTurma;
END