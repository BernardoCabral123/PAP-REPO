CREATE PROCEDURE `criarArea`(IN designacao VARCHAR(100))
BEGIN
	INSERT INTO area(designacao) VALUES (designacao);
END