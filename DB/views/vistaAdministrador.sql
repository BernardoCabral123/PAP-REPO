CREATE VIEW `vistaAdministrador` AS
    SELECT 
        `conta`.`idConta` AS `idConta`,
        `conta`.`email` AS `email`
    FROM
        `conta`
    WHERE
        (`conta`.`idTipoConta` = 1)