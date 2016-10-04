-- MySQL dump 10.13  Distrib 5.7.9, for Win64 (x86_64)
--
-- Host: localhost    Database: sifu
-- ------------------------------------------------------
-- Server version	5.7.9

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alumno`
--

DROP TABLE IF EXISTS `alumno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alumno` (
  `idalumno` int(11) NOT NULL AUTO_INCREMENT,
  `cedula` varchar(15) DEFAULT NULL,
  `nombre` varchar(85) DEFAULT NULL,
  `fechaNacimiento` date DEFAULT NULL,
  `lugarNacimiento` varchar(200) DEFAULT NULL,
  `nacionalidad` varchar(15) DEFAULT NULL,
  `religion` varchar(25) DEFAULT NULL,
  `comunion` varchar(5) DEFAULT NULL,
  `genero` varchar(12) DEFAULT NULL,
  `procedencia` varchar(150) DEFAULT NULL,
  `foto` varchar(45) DEFAULT NULL,
  `representante_id` int(11) DEFAULT NULL,
  `delegado_id` int(11) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `direccion` varchar(150) DEFAULT NULL,
  `grado_id` int(11) DEFAULT NULL,
  `estatus` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idalumno`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumno`
--

LOCK TABLES `alumno` WRITE;
/*!40000 ALTER TABLE `alumno` DISABLE KEYS */;
INSERT INTO `alumno` VALUES (1,'25758963','Lisbeth Rojas','1992-08-10',NULL,'Venezolana',NULL,'si','femenino','San Tome',NULL,1,1,'lisbethrojas3@gmail.com','Urb El Recreo casa c-70',2,'inscrito');
/*!40000 ALTER TABLE `alumno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `banco`
--

DROP TABLE IF EXISTS `banco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `banco` (
  `idbanco` int(11) NOT NULL AUTO_INCREMENT,
  `banco` varchar(45) DEFAULT NULL,
  `cuenta` varchar(45) DEFAULT NULL,
  `tipo` varchar(45) DEFAULT NULL,
  `colegio_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`idbanco`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banco`
--

LOCK TABLES `banco` WRITE;
/*!40000 ALTER TABLE `banco` DISABLE KEYS */;
INSERT INTO `banco` VALUES (1,'Banco de Venezuela','5899415317601550','Corriente',1),(2,'Banco Exterior','5245635466196','Corriente',1);
/*!40000 ALTER TABLE `banco` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cuota`
--

DROP TABLE IF EXISTS `cuota`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cuota` (
  `idcuota` int(11) NOT NULL AUTO_INCREMENT,
  `inscripcion` varchar(45) DEFAULT NULL,
  `cuota` varchar(45) DEFAULT NULL,
  `seguro` varchar(45) DEFAULT NULL,
  `otro` varchar(45) DEFAULT NULL,
  `periodo_id` int(11) DEFAULT NULL,
  `colegio_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`idcuota`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cuota`
--

LOCK TABLES `cuota` WRITE;
/*!40000 ALTER TABLE `cuota` DISABLE KEYS */;
INSERT INTO `cuota` VALUES (1,'6000','12000','5000','',1,1),(2,'8000','7000','2000',NULL,1,1),(4,'10000','5000','2000','',1,1);
/*!40000 ALTER TABLE `cuota` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `delegado`
--

DROP TABLE IF EXISTS `delegado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `delegado` (
  `iddelegado` int(11) NOT NULL AUTO_INCREMENT,
  `cedula` varchar(45) DEFAULT NULL,
  `nombre` varchar(150) DEFAULT NULL,
  `profesion` varchar(80) DEFAULT NULL,
  `telefono_principal` varchar(12) DEFAULT NULL,
  `telefono_opcional` varchar(12) DEFAULT NULL,
  `email` varchar(75) DEFAULT NULL,
  `parentesco` varchar(45) DEFAULT NULL,
  `direccion` varchar(200) DEFAULT NULL,
  `colegio_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`iddelegado`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `delegado`
--

LOCK TABLES `delegado` WRITE;
/*!40000 ALTER TABLE `delegado` DISABLE KEYS */;
INSERT INTO `delegado` VALUES (1,'18229563','Ivan Rojas',NULL,'04121809294','04121809294','ing.ivanrojas@gmail.com','Hermano','Urb El Recreo casa c-70',1);
/*!40000 ALTER TABLE `delegado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalles_inscripcion`
--

DROP TABLE IF EXISTS `detalles_inscripcion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `detalles_inscripcion` (
  `iddetalles_inscripcion` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(45) DEFAULT NULL,
  `inscripcion_id` int(11) DEFAULT NULL,
  `colegio_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`iddetalles_inscripcion`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalles_inscripcion`
--

LOCK TABLES `detalles_inscripcion` WRITE;
/*!40000 ALTER TABLE `detalles_inscripcion` DISABLE KEYS */;
INSERT INTO `detalles_inscripcion` VALUES (1,'inscripcion',1,1);
/*!40000 ALTER TABLE `detalles_inscripcion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grado`
--

DROP TABLE IF EXISTS `grado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `grado` (
  `idgrado` int(11) NOT NULL AUTO_INCREMENT,
  `grado` varchar(45) DEFAULT NULL,
  `grado_id` int(11) DEFAULT NULL,
  `periodo_id` int(11) DEFAULT NULL,
  `colegio_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`idgrado`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grado`
--

LOCK TABLES `grado` WRITE;
/*!40000 ALTER TABLE `grado` DISABLE KEYS */;
INSERT INTO `grado` VALUES (1,'7mo',0,1,1),(2,'8vo',1,1,1),(3,'9no',2,1,1),(4,'1ero de ciencia',3,1,1);
/*!40000 ALTER TABLE `grado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `horario`
--

DROP TABLE IF EXISTS `horario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `horario` (
  `idhorario` int(11) NOT NULL AUTO_INCREMENT,
  `materia_id` int(11) DEFAULT NULL,
  `profesor_id` int(11) DEFAULT NULL,
  `seccion_id` int(11) DEFAULT NULL,
  `dia` varchar(25) DEFAULT NULL,
  `hora_inicio` time DEFAULT NULL,
  `hora_final` time DEFAULT NULL,
  `horas_curso` time DEFAULT NULL,
  `colegio_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`idhorario`)
) ENGINE=MyISAM AUTO_INCREMENT=47 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `horario`
--

LOCK TABLES `horario` WRITE;
/*!40000 ALTER TABLE `horario` DISABLE KEYS */;
INSERT INTO `horario` VALUES (11,1,1,1,'2013-12-30','07:00:00','09:50:00','02:50:00',1),(10,1,1,1,'2013-12-31','10:00:00','12:00:00','02:00:00',1),(37,1,1,2,'2013-12-31','07:00:00','09:00:00','02:00:00',1),(36,1,1,2,'2013-12-30','10:00:00','12:30:00','02:30:00',1),(18,1,6,3,'2013-12-30','07:00:00','09:00:00','02:31:44',1),(35,1,6,6,'2013-12-30','09:35:00','10:35:00','01:00:00',1),(42,1,6,3,'2013-12-31','07:00:00','09:00:00','02:00:00',1),(45,1,1,1,'2014-01-02','07:00:00','07:05:00','00:05:00',1),(46,1,1,2,'2014-01-02','09:00:00','09:05:00','00:05:00',1);
/*!40000 ALTER TABLE `horario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inscripcion`
--

DROP TABLE IF EXISTS `inscripcion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inscripcion` (
  `idinscripcion` int(11) NOT NULL AUTO_INCREMENT,
  `alumno_id` int(11) DEFAULT NULL,
  `cuota_id` int(11) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `periodo_id` int(11) DEFAULT NULL,
  `colegio_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`idinscripcion`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inscripcion`
--

LOCK TABLES `inscripcion` WRITE;
/*!40000 ALTER TABLE `inscripcion` DISABLE KEYS */;
INSERT INTO `inscripcion` VALUES (1,1,1,'2016-07-17',1,1);
/*!40000 ALTER TABLE `inscripcion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materia`
--

DROP TABLE IF EXISTS `materia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `materia` (
  `idmateria` int(11) NOT NULL AUTO_INCREMENT,
  `materia` varchar(45) DEFAULT NULL,
  `tiempo` time DEFAULT NULL,
  `grado_id` int(11) DEFAULT NULL,
  `colegio_id` int(11) DEFAULT NULL,
  `materia_id` int(11) DEFAULT NULL COMMENT 'materia prelada de la misma tabla :)',
  PRIMARY KEY (`idmateria`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materia`
--

LOCK TABLES `materia` WRITE;
/*!40000 ALTER TABLE `materia` DISABLE KEYS */;
INSERT INTO `materia` VALUES (1,'Castellano','04:55:00',1,1,NULL),(2,'Matematica','04:55:00',1,1,NULL),(3,'Ingles','04:55:00',1,1,NULL),(6,'Matematica','06:00:00',2,1,2),(7,'Naturaleza','04:55:00',1,1,NULL),(8,'Historia de Venezuela','04:55:00',1,1,NULL),(9,'Geografia General','04:55:00',1,1,NULL),(10,'Educacion Familiar','04:55:00',1,1,NULL),(11,'Educacion Artistica','04:55:00',1,1,NULL),(12,'Deporte ','04:55:00',1,1,NULL),(13,'Educacion para el Trabajo','04:55:00',1,1,NULL),(14,'Castellano','06:00:00',2,1,1),(15,'Ingles','06:00:00',2,1,3),(16,'Educacion para la Salud','06:00:00',2,1,0),(17,'Bilogia','06:00:00',2,1,0),(18,'Historia de Venezuela','06:00:00',2,1,8),(19,'Historia Universal','06:00:00',2,1,8);
/*!40000 ALTER TABLE `materia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materias_alumno`
--

DROP TABLE IF EXISTS `materias_alumno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `materias_alumno` (
  `idmaterias_alumno` int(11) NOT NULL AUTO_INCREMENT,
  `alumno_id` int(11) DEFAULT NULL,
  `materia_id` int(11) DEFAULT NULL,
  `colegio_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`idmaterias_alumno`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materias_alumno`
--

LOCK TABLES `materias_alumno` WRITE;
/*!40000 ALTER TABLE `materias_alumno` DISABLE KEYS */;
INSERT INTO `materias_alumno` VALUES (1,1,14,1),(2,1,15,1),(3,1,16,1),(4,1,17,1),(5,1,18,1),(6,1,19,1),(7,1,2,1);
/*!40000 ALTER TABLE `materias_alumno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pago_inscripcion`
--

DROP TABLE IF EXISTS `pago_inscripcion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pago_inscripcion` (
  `idpago_inscripcion` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(45) DEFAULT NULL,
  `monto` varchar(45) DEFAULT NULL,
  `banco` varchar(45) DEFAULT NULL,
  `referencia` varchar(45) DEFAULT NULL,
  `inscripcion_id` int(11) DEFAULT NULL,
  `colegio_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`idpago_inscripcion`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pago_inscripcion`
--

LOCK TABLES `pago_inscripcion` WRITE;
/*!40000 ALTER TABLE `pago_inscripcion` DISABLE KEYS */;
INSERT INTO `pago_inscripcion` VALUES (1,'Efectivo','6000','default','',1,1);
/*!40000 ALTER TABLE `pago_inscripcion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `periodo`
--

DROP TABLE IF EXISTS `periodo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `periodo` (
  `idperiodo` int(11) NOT NULL AUTO_INCREMENT,
  `periodo` varchar(45) DEFAULT NULL,
  `estatus` varchar(8) DEFAULT NULL,
  `colegio_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`idperiodo`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `periodo`
--

LOCK TABLES `periodo` WRITE;
/*!40000 ALTER TABLE `periodo` DISABLE KEYS */;
INSERT INTO `periodo` VALUES (1,'2-2016','activo',1);
/*!40000 ALTER TABLE `periodo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profesor`
--

DROP TABLE IF EXISTS `profesor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `profesor` (
  `idprofesor` int(11) NOT NULL AUTO_INCREMENT,
  `cedula_profesor` varchar(12) DEFAULT NULL,
  `nombre_profesor` varchar(45) DEFAULT NULL,
  `telefono_profesor` varchar(15) DEFAULT NULL,
  `email_profesor` varchar(45) DEFAULT NULL,
  `edad_profesor` varchar(4) DEFAULT NULL,
  `direccion_profesor` varchar(250) DEFAULT NULL,
  `colegio_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`idprofesor`)
) ENGINE=MyISAM AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profesor`
--

LOCK TABLES `profesor` WRITE;
/*!40000 ALTER TABLE `profesor` DISABLE KEYS */;
INSERT INTO `profesor` VALUES (1,'18229563','Ivan Rojas','04121809294','ing.ivanrojas@gmail.com','29','urb el recreo, casa c 70 el tigre',1),(6,'24589116','Lisbeth Rojas','04248081242','lisbethrojas3@gmail.com','21','El Tigre',1),(7,'25565893','Pedro Perez','04247733230','pedro.perez@gmail.com','28','El Tigre',1);
/*!40000 ALTER TABLE `profesor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `representante`
--

DROP TABLE IF EXISTS `representante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `representante` (
  `idrepresentante` int(11) NOT NULL AUTO_INCREMENT,
  `cedula` varchar(45) DEFAULT NULL,
  `nombre` varchar(150) DEFAULT NULL,
  `profesion` varchar(80) DEFAULT NULL,
  `telefono_principal` varchar(12) DEFAULT NULL,
  `telefono_opcional` varchar(12) DEFAULT NULL,
  `email` varchar(75) DEFAULT NULL,
  `direccion` varchar(200) DEFAULT NULL,
  `colegio_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`idrepresentante`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COMMENT='		';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `representante`
--

LOCK TABLES `representante` WRITE;
/*!40000 ALTER TABLE `representante` DISABLE KEYS */;
INSERT INTO `representante` VALUES (1,'5116729','Beatriz Veliz','Ama de Casa','04141929539','02835110369','beatriz@gmail.com','Urb El Recreo casa c-70',1),(2,'4548459','Jose Rojas','Comerciante','02832304170',NULL,'josel_rojas54@hotmail.com','urb virgen del valle',1);
/*!40000 ALTER TABLE `representante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seccion`
--

DROP TABLE IF EXISTS `seccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `seccion` (
  `idseccion` int(11) NOT NULL AUTO_INCREMENT,
  `seccion` varchar(45) DEFAULT NULL,
  `grado_id` int(11) DEFAULT NULL,
  `colegio_id` int(11) DEFAULT NULL,
  `capacidad` int(11) DEFAULT NULL,
  PRIMARY KEY (`idseccion`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seccion`
--

LOCK TABLES `seccion` WRITE;
/*!40000 ALTER TABLE `seccion` DISABLE KEYS */;
INSERT INTO `seccion` VALUES (1,'A',1,1,30),(2,'B',1,1,35),(3,'C',1,1,35),(7,'',0,1,NULL),(6,'D',1,1,35),(8,'',0,1,NULL),(9,'',0,1,NULL),(10,'',0,1,NULL),(11,'A',2,1,20);
/*!40000 ALTER TABLE `seccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seccion_alumno`
--

DROP TABLE IF EXISTS `seccion_alumno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `seccion_alumno` (
  `idseccion_alumno` int(11) NOT NULL AUTO_INCREMENT,
  `alumno_id` int(11) DEFAULT NULL,
  `seccion_id` int(11) DEFAULT NULL,
  `grado_id` int(11) DEFAULT NULL,
  `colegio_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`idseccion_alumno`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seccion_alumno`
--

LOCK TABLES `seccion_alumno` WRITE;
/*!40000 ALTER TABLE `seccion_alumno` DISABLE KEYS */;
INSERT INTO `seccion_alumno` VALUES (1,1,11,NULL,1),(2,1,1,NULL,1);
/*!40000 ALTER TABLE `seccion_alumno` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-07-17 11:47:34
