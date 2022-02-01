CREATE PROCEDURE `criarEmpresa`(IN email VARCHAR(255),IN password VARCHAR(500),IN contatoTelefonico VARCHAR(9),IN nome VARCHAR(50),IN concelho INT,IN rua VARCHAR(100),IN numero VARCHAR(10))
BEGIN
	INSERT INTO conta(idTipoConta, email, password, contatoTelefonico) VALUES(4, email, CONVERT(CAST(aes_encrypt(password,'ci8nq3890j') AS CHAR(500)) USING UTF8MB3), contatoTelefonico);
    INSERT INTO empresa(idConta, nome, idConcelho, rua, numero) VALUES((SELECT MAX(idConta) FROM conta), nome, idConcelho, rua, numero);
END