CREATE PROCEDURE `mudarPassword`(IN idConta INT, IN password VARCHAR(500))
BEGIN
	UPDATE conta
	SET conta.password = CONVERT(CAST( aes_encrypt(password,'chave123') AS CHAR(500)) USING UTF8MB3)
	WHERE conta.idConta = idConta;
END