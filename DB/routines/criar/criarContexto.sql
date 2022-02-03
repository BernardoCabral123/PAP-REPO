CREATE PROCEDURE `criarContexto`(IN idArea INT ,IN designacao VARCHAR(100))
BEGIN
	INSERT INTO contexto(idArea, designacao) VALUES (idArea, designacao);
END