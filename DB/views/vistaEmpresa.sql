CREATE
VIEW `vistaempresa` AS
    SELECT 
        `conta`.`idConta` AS `idConta`,
        `conta`.`idTipoConta` AS `idTipoConta`,
        `conta`.`email` AS `email`,
        `conta`.`password` AS `password`,
        `conta`.`contatoTelefonico` AS `contatoTelefonico`,
        `empresa`.`nome` AS `nome`,
        `ilha`.`nome` AS `ilha`,
        `concelho`.`nome` AS `concelho`,
        `empresa`.`rua`,
        `empresa`.`numero`
    FROM
        `conta`,`empresa`,`concelho`,`ilha`
    WHERE
        `conta`.`idTipoConta` = 4
	AND 
		`conta`.`idConta`=`empresa`.`idConta`
	AND 
		`empresa`.`idConcelho`= `concelho`.`idConcelho`
	AND
		`concelho`.`idIlha` = `ilha`.`idIlha`