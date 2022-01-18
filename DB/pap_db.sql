CREATE DATABASE  IF NOT EXISTS `plataformaestagios` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `plataformaestagios`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: plataformaestagios
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
-- Temporary view structure for view `administrador`
--

DROP TABLE IF EXISTS `administrador`;
/*!50001 DROP VIEW IF EXISTS `administrador`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `administrador` AS SELECT 
 1 AS `idConta`,
 1 AS `idTipoConta`,
 1 AS `email`,
 1 AS `password`,
 1 AS `contatoTelefonico`,
 1 AS `morada`,
 1 AS `codPostal`,
 1 AS `urlFoto`,
 1 AS `urlFicheiros`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `aluno`
--

DROP TABLE IF EXISTS `aluno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `aluno` (
  `idConta` int NOT NULL,
  `idTurma` int NOT NULL,
  `pNome` varchar(45) NOT NULL,
  `uNome` varchar(45) NOT NULL,
  PRIMARY KEY (`idConta`),
  KEY `fk_Aluno_Turma1_idx` (`idTurma`),
  CONSTRAINT `fk_Aluno_Turma1` FOREIGN KEY (`idTurma`) REFERENCES `turma` (`idTurma`),
  CONSTRAINT `fk_table4_Conta1` FOREIGN KEY (`idConta`) REFERENCES `conta` (`idConta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aluno`
--

LOCK TABLES `aluno` WRITE;
/*!40000 ALTER TABLE `aluno` DISABLE KEYS */;
INSERT INTO `aluno` VALUES (19,9,'Bernardo','Cabral'),(24,9,'123','123'),(25,9,'ggg','gggg'),(26,9,'Sónia','Esteves'),(27,9,'Paulo','Esteves'),(28,9,'Paulo','Esteves'),(29,9,'Paulo','Esteves');
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `area`
--

LOCK TABLES `area` WRITE;
/*!40000 ALTER TABLE `area` DISABLE KEYS */;
INSERT INTO `area` VALUES (1,'Informática');
/*!40000 ALTER TABLE `area` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `area_curso`
--

DROP TABLE IF EXISTS `area_curso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `area_curso` (
  `idArea` int NOT NULL,
  `idCurso` int NOT NULL,
  PRIMARY KEY (`idArea`,`idCurso`),
  KEY `fk_Area_has_Curso_Curso1_idx` (`idCurso`),
  KEY `fk_Area_has_Curso_Area1_idx` (`idArea`),
  CONSTRAINT `fk_Area_has_Curso_Area1` FOREIGN KEY (`idArea`) REFERENCES `area` (`idArea`),
  CONSTRAINT `fk_Area_has_Curso_Curso1` FOREIGN KEY (`idCurso`) REFERENCES `curso` (`idCurso`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `area_curso`
--

LOCK TABLES `area_curso` WRITE;
/*!40000 ALTER TABLE `area_curso` DISABLE KEYS */;
INSERT INTO `area_curso` VALUES (1,2),(1,3),(1,4);
/*!40000 ALTER TABLE `area_curso` ENABLE KEYS */;
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
  `password` varchar(500) NOT NULL DEFAULT '',
  `contatoTelefonico` varchar(9) DEFAULT NULL,
  `morada` varchar(250) DEFAULT NULL,
  `codPostal` varchar(20) DEFAULT NULL,
  `urlFoto` varchar(500) DEFAULT NULL,
  `urlFicheiros` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`idConta`),
  KEY `fk_Conta_TipoConta1_idx` (`idTipoConta`),
  CONSTRAINT `fk_Conta_TipoConta1` FOREIGN KEY (`idTipoConta`) REFERENCES `tipoconta` (`idTipoConta`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conta`
--

LOCK TABLES `conta` WRITE;
/*!40000 ALTER TABLE `conta` DISABLE KEYS */;
INSERT INTO `conta` VALUES (13,1,'ex@ex.com','?i??8?`?L{?',NULL,NULL,NULL,NULL,NULL),(16,1,'email1','??&?ʟ??T??CC',NULL,NULL,NULL,NULL,NULL),(17,1,'emaillll','entaEstagios',NULL,NULL,NULL,NULL,NULL),(18,1,'','entaEstagios',NULL,NULL,NULL,NULL,NULL),(19,3,'alunoemail','entaEstagios',NULL,NULL,NULL,NULL,NULL),(20,4,'empresamail','esss',NULL,NULL,NULL,NULL,NULL),(22,4,'email','p',NULL,NULL,NULL,NULL,NULL),(23,3,'mailll','',NULL,NULL,NULL,NULL,NULL),(24,3,'123','',NULL,NULL,NULL,NULL,NULL),(25,3,'akf','?%0??????g???G',NULL,NULL,NULL,NULL,NULL),(26,3,'ex','?~;FR@?	??V?%1',NULL,NULL,NULL,NULL,NULL),(27,3,'ex','??,???????wh?',NULL,NULL,NULL,NULL,NULL),(28,3,'ex','?~;FR@?	??V?%1',NULL,NULL,NULL,NULL,NULL),(29,3,'ex','?~;FR@?	??V?%1',NULL,NULL,NULL,NULL,NULL);
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
  `designacao` varchar(75) NOT NULL,
  PRIMARY KEY (`idContexto`),
  KEY `fk_Contexto_Area1_idx` (`idArea`),
  CONSTRAINT `fk_Contexto_Area1` FOREIGN KEY (`idArea`) REFERENCES `area` (`idArea`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contexto`
--

LOCK TABLES `contexto` WRITE;
/*!40000 ALTER TABLE `contexto` DISABLE KEYS */;
INSERT INTO `contexto` VALUES (1,1,'Programação'),(2,1,'Gestão de redes');
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
  `sigla` varchar(5) NOT NULL,
  `designacao` varchar(100) NOT NULL,
  `nivel` varchar(1) NOT NULL,
  PRIMARY KEY (`idCurso`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `curso`
--

LOCK TABLES `curso` WRITE;
/*!40000 ALTER TABLE `curso` DISABLE KEYS */;
INSERT INTO `curso` VALUES (2,'TIS','Técnico De Informatica Sistemas','4'),(3,'TIGR','Técnico de Instalação e Gestão de Redes','4'),(4,'TUS','Tecnico ultra sónico','4');
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
  `nome` varchar(45) NOT NULL,
  `pNomeResponsavel` varchar(45) NOT NULL,
  `uNomeResponsavel` varchar(45) NOT NULL,
  PRIMARY KEY (`idConta`),
  CONSTRAINT `fk_table2_Conta1` FOREIGN KEY (`idConta`) REFERENCES `conta` (`idConta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresa`
--

LOCK TABLES `empresa` WRITE;
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
INSERT INTO `empresa` VALUES (20,'x','x','x'),(22,'13','123','123');
/*!40000 ALTER TABLE `empresa` ENABLE KEYS */;
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
  `nivel` varchar(1) NOT NULL,
  `pNomeResponsavel` varchar(45) NOT NULL,
  `uNomeResponsavel` varchar(45) NOT NULL,
  `morada` varchar(250) NOT NULL,
  `codPostal` varchar(20) NOT NULL,
  `escolhaPersonalisada` tinyint NOT NULL,
  `ativo` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`idOferta`),
  KEY `fk_Oferta_Empresa1_idx` (`idConta`),
  KEY `fk_Oferta_Contexto1_idx` (`idContexto`),
  CONSTRAINT `fk_Oferta_Contexto1` FOREIGN KEY (`idContexto`) REFERENCES `contexto` (`idContexto`),
  CONSTRAINT `fk_Oferta_Empresa1` FOREIGN KEY (`idConta`) REFERENCES `empresa` (`idConta`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
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
  `idConta` int NOT NULL,
  `deferido` tinyint NOT NULL DEFAULT '0',
  `confirmado` tinyint NOT NULL DEFAULT '0',
  `aprovado` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`idOferta`,`idConta`),
  KEY `fk_Oferta_has_Aluno_Aluno1_idx` (`idConta`),
  KEY `fk_Oferta_has_Aluno_Oferta1_idx` (`idOferta`),
  CONSTRAINT `fk_Oferta_has_Aluno_Aluno1` FOREIGN KEY (`idConta`) REFERENCES `aluno` (`idConta`),
  CONSTRAINT `fk_Oferta_has_Aluno_Oferta1` FOREIGN KEY (`idOferta`) REFERENCES `oferta` (`idOferta`)
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
-- Table structure for table `supervisor_turma`
--

DROP TABLE IF EXISTS `supervisor_turma`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `supervisor_turma` (
  `idConta` int NOT NULL,
  `idTurma` int NOT NULL,
  PRIMARY KEY (`idConta`,`idTurma`),
  KEY `fk_conta_has_turma_turma1_idx` (`idTurma`),
  KEY `fk_conta_has_turma_conta1_idx` (`idConta`),
  CONSTRAINT `fk_conta_has_turma_conta1` FOREIGN KEY (`idConta`) REFERENCES `conta` (`idConta`),
  CONSTRAINT `fk_conta_has_turma_turma1` FOREIGN KEY (`idTurma`) REFERENCES `turma` (`idTurma`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supervisor_turma`
--

LOCK TABLES `supervisor_turma` WRITE;
/*!40000 ALTER TABLE `supervisor_turma` DISABLE KEYS */;
INSERT INTO `supervisor_turma` VALUES (13,9),(16,9),(17,9),(18,9);
/*!40000 ALTER TABLE `supervisor_turma` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipoconta`
--

DROP TABLE IF EXISTS `tipoconta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipoconta` (
  `idTipoConta` int NOT NULL AUTO_INCREMENT,
  `designacao` varchar(45) NOT NULL,
  PRIMARY KEY (`idTipoConta`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipoconta`
--

LOCK TABLES `tipoconta` WRITE;
/*!40000 ALTER TABLE `tipoconta` DISABLE KEYS */;
INSERT INTO `tipoconta` VALUES (1,'Administrador'),(2,'Diretor de turma'),(3,'Aluno'),(4,'Empresa');
/*!40000 ALTER TABLE `tipoconta` ENABLE KEYS */;
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
  `ano` tinyint(1) NOT NULL,
  `numeroTurma` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`idTurma`),
  KEY `fk_Turma_Curso1_idx` (`idCurso`),
  CONSTRAINT `fk_Turma_Curso1` FOREIGN KEY (`idCurso`) REFERENCES `curso` (`idCurso`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `turma`
--

LOCK TABLES `turma` WRITE;
/*!40000 ALTER TABLE `turma` DISABLE KEYS */;
INSERT INTO `turma` VALUES (9,2,3,1);
/*!40000 ALTER TABLE `turma` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Final view structure for view `administrador`
--

/*!50001 DROP VIEW IF EXISTS `administrador`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `administrador` AS select `conta`.`idConta` AS `idConta`,`conta`.`idTipoConta` AS `idTipoConta`,`conta`.`email` AS `email`,`conta`.`password` AS `password`,`conta`.`contatoTelefonico` AS `contatoTelefonico`,`conta`.`morada` AS `morada`,`conta`.`codPostal` AS `codPostal`,`conta`.`urlFoto` AS `urlFoto`,`conta`.`urlFicheiros` AS `urlFicheiros` from `conta` where (`conta`.`idTipoConta` = 1) */;
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

-- Dump completed on 2022-01-18  7:41:47
