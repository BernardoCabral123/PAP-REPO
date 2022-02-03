CREATE PROCEDURE `criarAluno`(IN email VARCHAR(255),IN password VARCHAR(250),IN  idTurma INT,IN pNome VARCHAR(45),IN uNome VARCHAR(45))
BEGIN
	INSERT INTO conta(idTipoConta, email, password) VALUES(3, email, CONVERT(CAST( aes_encrypt(password,'chave123') AS CHAR(250)) USING UTF8MB3));
    INSERT INTO aluno(idConta, idTurma, pNome, uNome) VALUES((SELECT MAX(idConta) FROM conta),idTurma,pNome,uNome);
END