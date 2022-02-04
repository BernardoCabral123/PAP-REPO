CREATE PROCEDURE eliminarConta (IN idConta INT)
BEGIN
	DELETE FROM conta WHERE conta.idConta = idConta;
END