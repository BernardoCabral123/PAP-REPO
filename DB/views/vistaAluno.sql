CREATE 
VIEW `vistaAluno` AS
    SELECT 
        `conta`.`idConta` AS `idConta`,
        `conta`.`email` AS `email`,
        `conta`.`contatoTelefonico` AS `contatoTelefonico`,
        `aluno`.`pNome` AS `pNome`,
        `aluno`.`uNome` AS `uNome`
    FROM
        (`conta`
        JOIN `aluno`)
    WHERE
        ((`conta`.`idTipoConta` = 3)
            AND (`conta`.`idConta` = `aluno`.`idConta`))