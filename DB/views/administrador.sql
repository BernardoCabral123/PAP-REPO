CREATE VIEW `administrador` AS
    SELECT 
        `conta`.`idConta` AS `idConta`,
        `conta`.`idTipoConta` AS `idTipoConta`,
        `conta`.`email` AS `email`,
        `conta`.`password` AS `password`,
        `conta`.`contatoTelefonico` AS `contatoTelefonico`
    FROM
        `conta`
    WHERE
        (`conta`.`idTipoConta` = 1)