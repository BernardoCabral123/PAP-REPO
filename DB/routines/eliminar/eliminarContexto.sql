CREATE PROCEDURE eliminarContexto (IN idContexto INT)
BEGIN
	DELETE FROM contexto WHERE conta.idContexto = idContexto;
END