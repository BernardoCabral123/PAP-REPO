CREATE PROCEDURE `criarTurma`(IN idCurso INT,IN ano INT,IN numeroTurma INT)
BEGIN
	DECLARE i INT DEFAULT 0;
	DECLARE MAX INT DEFAULT (SELECT COUNT(idConta) FROM administrador);

	INSERT INTO turma(idCurso, ano, numeroTurma) VALUES (idCurso, ano , numeroTurma);

	loop_admins: LOOP
		IF i >= MAX THEN LEAVE loop_admins;
        END IF;
		
        INSERT INTO turma_supervisor(idTurma,idConta) VALUES ((SELECT MAX(idTurma) FROM turma),(SELECT idConta FROM administrador ORDER BY idConta LIMIT 1 OFFSET i));
		
        SET i = i + 1;
	END LOOP;
END