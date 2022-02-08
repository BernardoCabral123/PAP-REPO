CREATE VIEW `vistaDiretorTurma` AS
    SELECT 
        `conta`.`idConta` AS `idConta`,
        `conta`.`email` AS `email`
    FROM
        `conta`
    WHERE
        (`conta`.`idTipoConta` = 2)