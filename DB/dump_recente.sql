CREATE DATABASE  IF NOT EXISTS `pap-plataformaestagios` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `pap-plataformaestagios`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 204.2.63.42    Database: pap-plataformaestagios
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `aluno`
--

DROP TABLE IF EXISTS `aluno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `aluno` (
  `idConta` int NOT NULL,
  `idTurma` int NOT NULL,
  `pNome` varchar(50) NOT NULL,
  `uNome` varchar(50) NOT NULL,
  PRIMARY KEY (`idConta`),
  KEY `fk_aluno_turma1_idx` (`idTurma`),
  CONSTRAINT `fk_aluno_turma1` FOREIGN KEY (`idTurma`) REFERENCES `turma` (`idTurma`),
  CONSTRAINT `fk_table1_conta1` FOREIGN KEY (`idConta`) REFERENCES `conta` (`idConta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aluno`
--

LOCK TABLES `aluno` WRITE;
/*!40000 ALTER TABLE `aluno` DISABLE KEYS */;
/*!40000 ALTER TABLE `aluno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `area`
--

DROP TABLE IF EXISTS `area`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `area` (
  `idArea` int NOT NULL AUTO_INCREMENT,
  `designacao` varchar(100) NOT NULL,
  PRIMARY KEY (`idArea`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `area`
--

LOCK TABLES `area` WRITE;
/*!40000 ALTER TABLE `area` DISABLE KEYS */;
/*!40000 ALTER TABLE `area` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `concelho`
--

DROP TABLE IF EXISTS `concelho`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `concelho` (
  `idConcelho` int NOT NULL AUTO_INCREMENT,
  `idIlha` int NOT NULL,
  `nome` varchar(50) NOT NULL,
  PRIMARY KEY (`idConcelho`),
  KEY `fk_concelho_ilha_idx` (`idIlha`),
  CONSTRAINT `fk_concelho_ilha` FOREIGN KEY (`idIlha`) REFERENCES `ilha` (`idIlha`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `concelho`
--

LOCK TABLES `concelho` WRITE;
/*!40000 ALTER TABLE `concelho` DISABLE KEYS */;
INSERT INTO `concelho` VALUES (1,1,'Ponta Delgada'),(2,1,'Ribeira Grande'),(3,1,'Lagoa'),(4,1,'Vila Franca do Campo'),(5,1,'Nordeste'),(6,1,'Povoação'),(7,2,'Vila do Porto'),(8,3,'Angra do Heroísmo'),(9,3,'Praia da Vitória'),(10,4,'Velas'),(11,4,'Calheta'),(12,5,'S. Cruz da Graciosa'),(13,6,'S. Roque do Pico'),(14,6,'Madalena'),(15,6,'Lajes do Pico'),(16,7,'Horta'),(17,8,'S. Cruz das Flores'),(18,8,'Lajes das Flores'),(19,9,'Corvo');
/*!40000 ALTER TABLE `concelho` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `conta`
--

DROP TABLE IF EXISTS `conta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `conta` (
  `idConta` int NOT NULL AUTO_INCREMENT,
  `idTipoConta` int NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(500) NOT NULL,
  `contactoTelefonico` varchar(9) DEFAULT NULL,
  PRIMARY KEY (`idConta`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `fk_conta_tipoConta1_idx` (`idTipoConta`),
  CONSTRAINT `fk_conta_tipoConta1` FOREIGN KEY (`idTipoConta`) REFERENCES `tipoConta` (`idTipoConta`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conta`
--

LOCK TABLES `conta` WRITE;
/*!40000 ALTER TABLE `conta` DISABLE KEYS */;
INSERT INTO `conta` VALUES (69,1,'programercomputador@gmail.com','?S\n??3?`9??.',NULL),(70,1,'bernardo.cabral@outlook.com','?<p?	eJ?????',NULL),(72,1,'programercomputadooooor@gmail.com','??P9|?h??????',NULL);
/*!40000 ALTER TABLE `conta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contexto`
--

DROP TABLE IF EXISTS `contexto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contexto` (
  `idContexto` int NOT NULL AUTO_INCREMENT,
  `idArea` int NOT NULL,
  `designacao` varchar(100) NOT NULL,
  PRIMARY KEY (`idContexto`),
  KEY `fk_contexto_area1_idx` (`idArea`),
  CONSTRAINT `fk_contexto_area1` FOREIGN KEY (`idArea`) REFERENCES `area` (`idArea`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contexto`
--

LOCK TABLES `contexto` WRITE;
/*!40000 ALTER TABLE `contexto` DISABLE KEYS */;
/*!40000 ALTER TABLE `contexto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `curso`
--

DROP TABLE IF EXISTS `curso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `curso` (
  `idCurso` int NOT NULL AUTO_INCREMENT,
  `sigla` varchar(10) NOT NULL,
  `designacao` varchar(100) NOT NULL,
  `idArea` int NOT NULL,
  PRIMARY KEY (`idCurso`),
  KEY `fk_curso_area1_idx` (`idArea`),
  CONSTRAINT `fk_curso_area1` FOREIGN KEY (`idArea`) REFERENCES `area` (`idArea`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `curso`
--

LOCK TABLES `curso` WRITE;
/*!40000 ALTER TABLE `curso` DISABLE KEYS */;
/*!40000 ALTER TABLE `curso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empresa`
--

DROP TABLE IF EXISTS `empresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empresa` (
  `idConta` int NOT NULL,
  `nome` varchar(50) NOT NULL,
  `idConcelho` int NOT NULL,
  `rua` varchar(100) NOT NULL,
  `numero` varchar(10) NOT NULL,
  PRIMARY KEY (`idConta`),
  KEY `fk_empresa_concelho1_idx` (`idConcelho`),
  CONSTRAINT `fk_empresa_concelho1` FOREIGN KEY (`idConcelho`) REFERENCES `concelho` (`idConcelho`),
  CONSTRAINT `fk_table1_conta10` FOREIGN KEY (`idConta`) REFERENCES `conta` (`idConta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresa`
--

LOCK TABLES `empresa` WRITE;
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
INSERT INTO `empresa` VALUES (5,'y',0,'y','y'),(6,'y',2,'y','y'),(7,'empresa X',7,'aaaa','bbb'),(8,'r',7,'1','1'),(10,'r',7,'1','1'),(12,'a',5,'1','1'),(13,'da',1,'a','a'),(14,'da',1,'a','a'),(15,'a',2,'1','1'),(16,'a',2,'1','1'),(17,'a',2,'1','1'),(18,'aa',3,'11','11'),(19,'sda',12,'aa','aa'),(20,'aaa',16,'11','11'),(21,'aa',1,'1','1'),(22,'aa',1,'1','1'),(23,'aa',1,'1','1'),(24,'aa',1,'1','1'),(25,'aa',1,'1','1'),(26,'aa',1,'1','1');
/*!40000 ALTER TABLE `empresa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ilha`
--

DROP TABLE IF EXISTS `ilha`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ilha` (
  `idIlha` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  PRIMARY KEY (`idIlha`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ilha`
--

LOCK TABLES `ilha` WRITE;
/*!40000 ALTER TABLE `ilha` DISABLE KEYS */;
INSERT INTO `ilha` VALUES (1,'São Miguel'),(2,'Santa Maria'),(3,'Terceira'),(4,'São Jorge'),(5,'Graciosa'),(6,'Pico'),(7,'Faial'),(8,'Flores'),(9,'Corvo');
/*!40000 ALTER TABLE `ilha` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oferta`
--

DROP TABLE IF EXISTS `oferta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oferta` (
  `idOferta` int NOT NULL AUTO_INCREMENT,
  `idConta` int NOT NULL,
  `idContexto` int NOT NULL,
  `descricao` varchar(300) NOT NULL,
  `vagas` int NOT NULL,
  `idConcelho` int NOT NULL,
  `rua` varchar(100) NOT NULL,
  `numero` varchar(5) NOT NULL,
  `escolhaPersonalizada` tinyint NOT NULL,
  `finalizado` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`idOferta`),
  KEY `fk_oferta_empresa1_idx` (`idConta`),
  KEY `fk_oferta_concelho1_idx` (`idConcelho`),
  KEY `fk_oferta_contexto1_idx` (`idContexto`),
  CONSTRAINT `fk_oferta_concelho1` FOREIGN KEY (`idConcelho`) REFERENCES `concelho` (`idConcelho`),
  CONSTRAINT `fk_oferta_contexto1` FOREIGN KEY (`idContexto`) REFERENCES `contexto` (`idContexto`),
  CONSTRAINT `fk_oferta_empresa1` FOREIGN KEY (`idConta`) REFERENCES `empresa` (`idConta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oferta`
--

LOCK TABLES `oferta` WRITE;
/*!40000 ALTER TABLE `oferta` DISABLE KEYS */;
/*!40000 ALTER TABLE `oferta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oferta_aluno`
--

DROP TABLE IF EXISTS `oferta_aluno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oferta_aluno` (
  `idOferta` int NOT NULL,
  `aluno_idConta` int NOT NULL,
  `deferido` tinyint NOT NULL DEFAULT '0',
  `confirmado` tinyint NOT NULL DEFAULT '0',
  `aprovado` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`idOferta`,`aluno_idConta`),
  KEY `fk_oferta_has_aluno_aluno1_idx` (`aluno_idConta`),
  KEY `fk_oferta_has_aluno_oferta1_idx` (`idOferta`),
  CONSTRAINT `fk_oferta_has_aluno_aluno1` FOREIGN KEY (`aluno_idConta`) REFERENCES `aluno` (`idConta`),
  CONSTRAINT `fk_oferta_has_aluno_oferta1` FOREIGN KEY (`idOferta`) REFERENCES `oferta` (`idOferta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oferta_aluno`
--

LOCK TABLES `oferta_aluno` WRITE;
/*!40000 ALTER TABLE `oferta_aluno` DISABLE KEYS */;
/*!40000 ALTER TABLE `oferta_aluno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipoConta`
--

DROP TABLE IF EXISTS `tipoConta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipoConta` (
  `idTipoConta` int NOT NULL,
  `designacao` varchar(50) NOT NULL,
  PRIMARY KEY (`idTipoConta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipoConta`
--

LOCK TABLES `tipoConta` WRITE;
/*!40000 ALTER TABLE `tipoConta` DISABLE KEYS */;
INSERT INTO `tipoConta` VALUES (1,'Admin'),(2,'Diretor de turma'),(3,'Aluno'),(4,'Empresa');
/*!40000 ALTER TABLE `tipoConta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `turma`
--

DROP TABLE IF EXISTS `turma`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `turma` (
  `idTurma` int NOT NULL AUTO_INCREMENT,
  `idCurso` int NOT NULL,
  `numero` int DEFAULT NULL,
  PRIMARY KEY (`idTurma`),
  KEY `fk_turma_curso1_idx` (`idCurso`),
  CONSTRAINT `fk_turma_curso1` FOREIGN KEY (`idCurso`) REFERENCES `curso` (`idCurso`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `turma`
--

LOCK TABLES `turma` WRITE;
/*!40000 ALTER TABLE `turma` DISABLE KEYS */;
/*!40000 ALTER TABLE `turma` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `turma_supervisor`
--

DROP TABLE IF EXISTS `turma_supervisor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `turma_supervisor` (
  `idTurma` int NOT NULL,
  `conta_idConta` int NOT NULL,
  PRIMARY KEY (`idTurma`,`conta_idConta`),
  KEY `fk_turma_has_conta_conta1_idx` (`conta_idConta`),
  KEY `fk_turma_has_conta_turma1_idx` (`idTurma`),
  CONSTRAINT `fk_turma_has_conta_conta1` FOREIGN KEY (`conta_idConta`) REFERENCES `conta` (`idConta`),
  CONSTRAINT `fk_turma_has_conta_turma1` FOREIGN KEY (`idTurma`) REFERENCES `turma` (`idTurma`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `turma_supervisor`
--

LOCK TABLES `turma_supervisor` WRITE;
/*!40000 ALTER TABLE `turma_supervisor` DISABLE KEYS */;
/*!40000 ALTER TABLE `turma_supervisor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `vistaAdministrador`
--

DROP TABLE IF EXISTS `vistaAdministrador`;
/*!50001 DROP VIEW IF EXISTS `vistaAdministrador`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vistaAdministrador` AS SELECT 
 1 AS `idConta`,
 1 AS `email`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vistaAluno`
--

DROP TABLE IF EXISTS `vistaAluno`;
/*!50001 DROP VIEW IF EXISTS `vistaAluno`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vistaAluno` AS SELECT 
 1 AS `idConta`,
 1 AS `email`,
 1 AS `contatoTelefonico`,
 1 AS `pNome`,
 1 AS `uNome`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vistaCurso`
--

DROP TABLE IF EXISTS `vistaCurso`;
/*!50001 DROP VIEW IF EXISTS `vistaCurso`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vistaCurso` AS SELECT 
 1 AS `idCurso`,
 1 AS `sigla`,
 1 AS `designacao`,
 1 AS `idArea`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vistaDiretorTurma`
--

DROP TABLE IF EXISTS `vistaDiretorTurma`;
/*!50001 DROP VIEW IF EXISTS `vistaDiretorTurma`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vistaDiretorTurma` AS SELECT 
 1 AS `idConta`,
 1 AS `email`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vistaEmpresa`
--

DROP TABLE IF EXISTS `vistaEmpresa`;
/*!50001 DROP VIEW IF EXISTS `vistaEmpresa`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vistaEmpresa` AS SELECT 
 1 AS `idConta`,
 1 AS `idTipoConta`,
 1 AS `email`,
 1 AS `password`,
 1 AS `contatoTelefonico`,
 1 AS `nome`,
 1 AS `ilha`,
 1 AS `concelho`,
 1 AS `rua`,
 1 AS `numero`*/;
SET character_set_client = @saved_cs_client;

--
-- Dumping events for database 'pap-plataformaestagios'
--

--
-- Dumping routines for database 'pap-plataformaestagios'
--
/*!50003 DROP PROCEDURE IF EXISTS `criarAdmin` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `criarAdmin`(IN email VARCHAR(255),IN password VARCHAR(500))
BEGIN
	DECLARE i INT  DEFAULT 0;
	DECLARE MAX INT DEFAULT (SELECT COUNT(turma.idTurma) FROM turma);

	INSERT INTO conta(idTipoConta, email, password) VALUES (1,email,CONVERT(CAST( aes_encrypt(password,'ci8nq3890j') AS CHAR(500)) USING UTF8MB3));

	loop_turmas: LOOP
		IF i >= MAX THEN LEAVE loop_turmas;
        END IF;
		
        INSERT INTO supervisor_turma(idConta, idTurma) VALUES ((SELECT MAX(idConta) FROM conta),(SELECT idTurma FROM turma ORDER BY idTurma LIMIT 1 OFFSET i));
		
        SET i = i + 1;
	END LOOP;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `criarAluno` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `criarAluno`(IN email VARCHAR(255),IN password VARCHAR(500),IN  idTurma INT,IN pNome VARCHAR(45),IN uNome VARCHAR(45))
BEGIN
	INSERT INTO conta(idTipoConta, email, password) VALUES(3, email, CONVERT(CAST( aes_encrypt(password,'ci8nq3890j') AS CHAR(500)) USING UTF8MB3));
    INSERT INTO aluno(idConta, idTurma, pNome, uNome) VALUES((SELECT MAX(idConta) FROM conta),idTurma,pNome,uNome);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `criarArea` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `criarArea`(IN designacao VARCHAR(100))
BEGIN
	INSERT INTO area(designacao) VALUES (designacao);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `criarContexto` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `criarContexto`(IN idArea INT ,IN designacao VARCHAR(100))
BEGIN
	INSERT INTO contexto(idArea, designacao) VALUES (idArea, designacao);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `criarCurso` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `criarCurso`(IN sigla VARCHAR(10),IN designacao VARCHAR(100),IN idArea INT)
BEGIN
	INSERT INTO curso(sigla, designacao, idArea) values (sigla, designacao, idArea);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `criarEmpresa` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `criarEmpresa`(IN email VARCHAR(255),IN password VARCHAR(500),IN contatoTelefonico VARCHAR(9),IN nome VARCHAR(50),IN idConcelho INT,IN rua VARCHAR(100),IN numero VARCHAR(10))
BEGIN
	INSERT INTO conta(idTipoConta, email, password, contactoTelefonico) VALUES(4, email, CONVERT(CAST(aes_encrypt(password,'ci8nq3890j') AS CHAR(500)) USING UTF8MB3), contatoTelefonico);
    INSERT INTO empresa(idConta, nome, idConcelho, rua, numero) VALUES((SELECT MAX(idConta) FROM conta), nome, idConcelho, rua, numero);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `criarOferta` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `criarOferta`(IN idConta INT,IN idContexto INT,IN descricao VARCHAR(300),IN idConcelho INT,IN rua VARCHAR(100),IN numero VARCHAR(5), IN escolhaPersonalisada TINYINT)
BEGIN
	INSERT INTO oferta(idConta, idContexto, descricao, idConcelho, rua, numero,escolhaPersonalisada, finalizado) VALUES (idConta, idContexto, descricao, idConcelho, rua, numero,escolhaPersonalisada);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `criarTurma` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `criarTurma`(IN idCurso INT,IN ano INT,IN numeroTurma INT)
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
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `eliminarArea` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `eliminarArea`(IN idArea INT)
BEGIN
	DELETE FROM area WHERE area.idArea = idArea;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `eliminarConta` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `eliminarConta`(IN idConta INT)
BEGIN
	DELETE FROM conta WHERE conta.idConta = idConta;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `eliminarContexto` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `eliminarContexto`(IN idContexto INT)
BEGIN
	DELETE FROM contexto WHERE conta.idContexto = idContexto;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `eliminarCurso` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `eliminarCurso`(IN idCurso INT)
BEGIN
	DELETE FROM curso WHERE idCurso = idCurso;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `eliminarOferta` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `eliminarOferta`(IN idOferta INT)
BEGIN
	DELETE FROM oferta WHERE oferta.idOferta = idOferta;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `eliminarTurma` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `eliminarTurma`(IN idTurma INT)
BEGIN
	DELETE FROM turma WHERE turma.idTurma = idTurma;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `mudarPassword` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `mudarPassword`(IN idConta INT, IN password VARCHAR(500))
BEGIN
	UPDATE conta
	SET conta.password = CONVERT(CAST(aes_encrypt(password,'ci8nq3890j') AS CHAR(500)) USING UTF8MB3)
	WHERE conta.idConta = idConta;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Final view structure for view `vistaAdministrador`
--

/*!50001 DROP VIEW IF EXISTS `vistaAdministrador`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`admin`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `vistaAdministrador` AS select `conta`.`idConta` AS `idConta`,`conta`.`email` AS `email` from `conta` where (`conta`.`idTipoConta` = 1) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vistaAluno`
--

/*!50001 DROP VIEW IF EXISTS `vistaAluno`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`admin`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `vistaAluno` AS select `conta`.`idConta` AS `idConta`,`conta`.`email` AS `email`,`conta`.`contactoTelefonico` AS `contatoTelefonico`,`aluno`.`pNome` AS `pNome`,`aluno`.`uNome` AS `uNome` from (`conta` join `aluno`) where ((`conta`.`idTipoConta` = 3) and (`conta`.`idConta` = `aluno`.`idConta`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vistaCurso`
--

/*!50001 DROP VIEW IF EXISTS `vistaCurso`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`admin`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `vistaCurso` AS select `curso`.`idCurso` AS `idCurso`,`curso`.`sigla` AS `sigla`,`curso`.`designacao` AS `designacao`,`curso`.`idArea` AS `idArea` from `curso` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vistaDiretorTurma`
--

/*!50001 DROP VIEW IF EXISTS `vistaDiretorTurma`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`admin`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `vistaDiretorTurma` AS select `conta`.`idConta` AS `idConta`,`conta`.`email` AS `email` from `conta` where (`conta`.`idTipoConta` = 2) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vistaEmpresa`
--

/*!50001 DROP VIEW IF EXISTS `vistaEmpresa`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`admin`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `vistaEmpresa` AS select `conta`.`idConta` AS `idConta`,`conta`.`idTipoConta` AS `idTipoConta`,`conta`.`email` AS `email`,`conta`.`password` AS `password`,`conta`.`contactoTelefonico` AS `contatoTelefonico`,`empresa`.`nome` AS `nome`,`ilha`.`nome` AS `ilha`,`concelho`.`nome` AS `concelho`,`empresa`.`rua` AS `rua`,`empresa`.`numero` AS `numero` from (((`conta` join `empresa`) join `concelho`) join `ilha`) where ((`conta`.`idTipoConta` = 4) and (`conta`.`idConta` = `empresa`.`idConta`) and (`empresa`.`idConcelho` = `concelho`.`idConcelho`) and (`concelho`.`idIlha` = `ilha`.`idIlha`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-16 22:37:59
