CREATE PROCEDURE eliminarCurso (IN idCurso INT)
BEGIN
	DELETE FROM curso WHERE idCurso = idCurso;
END