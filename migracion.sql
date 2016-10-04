-- MySQL dump 10.13  Distrib 5.7.9, for Win64 (x86_64)
--
-- Host: localhost    Database: sifu_06050
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
-- Table structure for table `administrador`
--

DROP TABLE IF EXISTS `administrador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `administrador` (
  `idadministrador` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cedula` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `nombre` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `telefono` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `tipo` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`idadministrador`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administrador`
--

LOCK TABLES `administrador` WRITE;
/*!40000 ALTER TABLE `administrador` DISABLE KEYS */;
INSERT INTO `administrador` VALUES (1,'06050','Ivan de Jesus Rojas Veliz','04121809294','ing.ivanrojas@gmail.com',NULL,NULL,NULL,'superAdmin'),(7,'18229563','Ivan Rojas','04121809294','ing.ivanrojas@gmail.com',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `administrador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alumno`
--

DROP TABLE IF EXISTS `alumno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alumno` (
  `idalumno` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cedula` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `nombre` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `apellido` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `fechaNacimiento` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `lugarNacimiento` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `nacionalidad` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `religion` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `comunion` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `genero` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `procedencia` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `foto` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `representante_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `delegado_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `direccion` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `grado_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `estatus` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `peso` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `talla` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `altura` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `zapato` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `observacion` varchar(450) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`idalumno`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumno`
--

LOCK TABLES `alumno` WRITE;
/*!40000 ALTER TABLE `alumno` DISABLE KEYS */;
INSERT INTO `alumno` VALUES (4,'78962','Petra Josefina','Perez','1991-06-06','','Venezolana','','si','femenino','Jose Gil Fortoul','','7','5','','El Tigre','4','pendiente',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(3,'34567890','Lisbeth del valle','Rojas Veliz','1992-08-10','','Venezolana','','si','femenino','San Tome','','6','4','lisbethrojas3@gmail.com','El Tigre','3','inscrito',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `alumno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alumnos_inscritos`
--

DROP TABLE IF EXISTS `alumnos_inscritos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alumnos_inscritos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `alumno_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `fecha` date NOT NULL,
  `periodo_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `colegio_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `seguro` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `condicion` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cuota_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumnos_inscritos`
--

LOCK TABLES `alumnos_inscritos` WRITE;
/*!40000 ALTER TABLE `alumnos_inscritos` DISABLE KEYS */;
INSERT INTO `alumnos_inscritos` VALUES (1,'3','2016-09-24','2','',NULL,NULL,NULL,'si','regular',19);
/*!40000 ALTER TABLE `alumnos_inscritos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `banco`
--

DROP TABLE IF EXISTS `banco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `banco` (
  `idbanco` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `banco` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `cuenta` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `tipo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `titular` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `cedula` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `colegio_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idbanco`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banco`
--

LOCK TABLES `banco` WRITE;
/*!40000 ALTER TABLE `banco` DISABLE KEYS */;
INSERT INTO `banco` VALUES (1,'Venezuela','5899415317601550','Ahorro','Ivan de Jesus Rojas Veliz','ing.ivanrojas@gmail.com','18229563','',NULL,NULL,NULL);
/*!40000 ALTER TABLE `banco` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carga_nota`
--

DROP TABLE IF EXISTS `carga_nota`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carga_nota` (
  `idcarga_nota` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `materia_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `seccion_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `profesor_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `alumno_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `corte1` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `corte2` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `corte3` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `corte4` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `corte5` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `corte6` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `corte7` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `corte8` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `corte9` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `corte10` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `definitiva` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idcarga_nota`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carga_nota`
--

LOCK TABLES `carga_nota` WRITE;
/*!40000 ALTER TABLE `carga_nota` DISABLE KEYS */;
INSERT INTO `carga_nota` VALUES (6,'2','2','1','3','15','15','15','15','14','','','','','','14.8',NULL,NULL,NULL),(5,'','','','','','','','','','','','','','','',NULL,NULL,NULL),(4,'','','','','','','','','','','','','','','',NULL,NULL,NULL);
/*!40000 ALTER TABLE `carga_nota` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `config_materias`
--

DROP TABLE IF EXISTS `config_materias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `config_materias` (
  `idconfig_materias` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `materia_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `profesor_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `tipo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `cortes` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `maximanota` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idconfig_materias`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `config_materias`
--

LOCK TABLES `config_materias` WRITE;
/*!40000 ALTER TABLE `config_materias` DISABLE KEYS */;
INSERT INTO `config_materias` VALUES (1,'2','2','porcentaje','5','20',NULL,NULL,NULL);
/*!40000 ALTER TABLE `config_materias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cuotas`
--

DROP TABLE IF EXISTS `cuotas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cuotas` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) CHARACTER SET utf8 NOT NULL,
  `fecha` date NOT NULL,
  `periodo_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cuotas`
--

LOCK TABLES `cuotas` WRITE;
/*!40000 ALTER TABLE `cuotas` DISABLE KEYS */;
INSERT INTO `cuotas` VALUES (19,'Metodo 1','0000-00-00',2),(20,'Metodo 2','0000-00-00',2),(21,'Metodo 3','0000-00-00',2),(22,'Metodo 4','0000-00-00',2);
/*!40000 ALTER TABLE `cuotas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `delegado`
--

DROP TABLE IF EXISTS `delegado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `delegado` (
  `iddelegado` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cedula` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `nombre` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `profesion` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `telefono_principal` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `telefono_opcional` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `parentesco` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `direccion` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `estatus` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `representante_id` int(11) DEFAULT NULL,
  `colegio_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`iddelegado`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `delegado`
--

LOCK TABLES `delegado` WRITE;
/*!40000 ALTER TABLE `delegado` DISABLE KEYS */;
INSERT INTO `delegado` VALUES (4,'18229563','Ivan Rojas','','04121809294','','ing.ivanrojas@gmail.com','padre','El Tigre',NULL,6,'',NULL,NULL,NULL),(5,'5116729','Beatriz Veliz','','02835110369','04141929539','lisbethrojas3@gmail.com','Madre','El Tigre',NULL,7,'',NULL,NULL,NULL);
/*!40000 ALTER TABLE `delegado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalles_cuotas`
--

DROP TABLE IF EXISTS `detalles_cuotas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `detalles_cuotas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(45) DEFAULT NULL,
  `monto` varchar(45) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `cuota_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalles_cuotas`
--

LOCK TABLES `detalles_cuotas` WRITE;
/*!40000 ALTER TABLE `detalles_cuotas` DISABLE KEYS */;
INSERT INTO `detalles_cuotas` VALUES (1,NULL,'800','2016-10-05',19),(2,NULL,'900','2016-11-05',19);
/*!40000 ALTER TABLE `detalles_cuotas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalles_mensajes`
--

DROP TABLE IF EXISTS `detalles_mensajes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `detalles_mensajes` (
  `iddetalles_mensajes` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `mensaje_id` int(11) NOT NULL,
  `autor_id` int(11) NOT NULL,
  `autor_rol` int(11) NOT NULL,
  `destino_rol` int(11) NOT NULL,
  `destino_id` int(11) NOT NULL,
  `mensaje` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `fecha` datetime NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`iddetalles_mensajes`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalles_mensajes`
--

LOCK TABLES `detalles_mensajes` WRITE;
/*!40000 ALTER TABLE `detalles_mensajes` DISABLE KEYS */;
INSERT INTO `detalles_mensajes` VALUES (1,1,1,2,1,1,'<p>Mensaje de prueba</p>','2016-09-24 16:31:12',NULL,NULL,NULL);
/*!40000 ALTER TABLE `detalles_mensajes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalles_pagos`
--

DROP TABLE IF EXISTS `detalles_pagos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `detalles_pagos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(45) DEFAULT NULL,
  `monto` varchar(45) DEFAULT NULL,
  `banco` varchar(45) DEFAULT NULL,
  `referencia` varchar(45) DEFAULT NULL,
  `pagos_id` int(11) DEFAULT NULL,
  `estatus` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalles_pagos`
--

LOCK TABLES `detalles_pagos` WRITE;
/*!40000 ALTER TABLE `detalles_pagos` DISABLE KEYS */;
INSERT INTO `detalles_pagos` VALUES (1,'Efectivo','10000','1','3456754',1,'procesado'),(2,'Transferencia','4200','','',1,'procesado');
/*!40000 ALTER TABLE `detalles_pagos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grado`
--

DROP TABLE IF EXISTS `grado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `grado` (
  `idgrado` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `grado` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `grado_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `periodo_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `colegio_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idgrado`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grado`
--

LOCK TABLES `grado` WRITE;
/*!40000 ALTER TABLE `grado` DISABLE KEYS */;
INSERT INTO `grado` VALUES (4,'8vo','3','2','1',NULL,NULL,NULL),(3,'7mo','','2','1',NULL,NULL,NULL),(1,'7mo','','1','1',NULL,NULL,NULL);
/*!40000 ALTER TABLE `grado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `horario`
--

DROP TABLE IF EXISTS `horario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `horario` (
  `idhorario` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `materia_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `profesor_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `seccion_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `dia` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `hora_inicio` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `hora_final` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `horas_curso` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `colegio_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idhorario`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `horario`
--

LOCK TABLES `horario` WRITE;
/*!40000 ALTER TABLE `horario` DISABLE KEYS */;
INSERT INTO `horario` VALUES (1,'1','1','1','2013-12-30','07:00','09:50','02:50:00','1',NULL,NULL,NULL),(2,'1','1','1','2013-12-31','07:00','10:10','03:10:00','1',NULL,NULL,NULL),(7,'2','2','2','2013-12-31','07:00','09:00','02:00:00','1',NULL,NULL,NULL),(6,'2','2','2','2013-12-30','07:00','09:00','02:00:00','1',NULL,NULL,NULL);
/*!40000 ALTER TABLE `horario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materia`
--

DROP TABLE IF EXISTS `materia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `materia` (
  `idmateria` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `materia` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `tiempo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `grado_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `colegio_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `materia_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idmateria`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materia`
--

LOCK TABLES `materia` WRITE;
/*!40000 ALTER TABLE `materia` DISABLE KEYS */;
INSERT INTO `materia` VALUES (1,'Matematica','06:00','1','1','default',NULL,NULL,NULL),(2,'Matematica','04:00','3','1','default',NULL,NULL,NULL);
/*!40000 ALTER TABLE `materia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materias_alumno`
--

DROP TABLE IF EXISTS `materias_alumno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `materias_alumno` (
  `idmaterias_alumno` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `alumno_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `materia_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `colegio_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idmaterias_alumno`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materias_alumno`
--

LOCK TABLES `materias_alumno` WRITE;
/*!40000 ALTER TABLE `materias_alumno` DISABLE KEYS */;
INSERT INTO `materias_alumno` VALUES (1,'3','2','',NULL,NULL,NULL);
/*!40000 ALTER TABLE `materias_alumno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materias_profesor`
--

DROP TABLE IF EXISTS `materias_profesor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `materias_profesor` (
  `idmaterias_profesor` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `materia_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `profesor_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `estatus` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idmaterias_profesor`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materias_profesor`
--

LOCK TABLES `materias_profesor` WRITE;
/*!40000 ALTER TABLE `materias_profesor` DISABLE KEYS */;
INSERT INTO `materias_profesor` VALUES (2,'2','2','activo',NULL,NULL,NULL);
/*!40000 ALTER TABLE `materias_profesor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mensaje`
--

DROP TABLE IF EXISTS `mensaje`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mensaje` (
  `idmensaje` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `autor_id` int(11) NOT NULL,
  `autor_rol` int(11) NOT NULL,
  `asunto` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `fecha` datetime NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `periodo_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`idmensaje`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mensaje`
--

LOCK TABLES `mensaje` WRITE;
/*!40000 ALTER TABLE `mensaje` DISABLE KEYS */;
INSERT INTO `mensaje` VALUES (1,1,2,'prueba','2016-09-24 16:31:12',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `mensaje` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mensualidad`
--

DROP TABLE IF EXISTS `mensualidad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mensualidad` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `detalles_cuotas_id` int(11) DEFAULT NULL,
  `alumno_id` int(11) DEFAULT NULL,
  `pagos_id` int(11) DEFAULT NULL,
  `estatus` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mensualidad`
--

LOCK TABLES `mensualidad` WRITE;
/*!40000 ALTER TABLE `mensualidad` DISABLE KEYS */;
INSERT INTO `mensualidad` VALUES (1,1,3,1,'pagado'),(2,2,3,1,'pagado');
/*!40000 ALTER TABLE `mensualidad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES ('2016_08_17_205635_create_alumnos',1),('2016_08_24_132213_banco',1),('2016_08_24_132527_carga_nota',1),('2016_08_24_132535_delegado',1),('2016_08_24_132545_detalles_inscripcion',1),('2016_08_24_132553_grado',1),('2016_08_24_132600_horario',1),('2016_08_24_132607_inscripcion',1),('2016_08_24_132613_materia',1),('2016_08_24_132622_materias_alumno',1),('2016_08_24_132631_materias_profesor',1),('2016_08_24_132639_pago_inscripcion',1),('2016_08_24_132644_periodo',1),('2016_08_24_132649_profesor',1),('2016_08_24_132658_representante',1),('2016_08_24_132705_seccion',1),('2016_08_24_132715_seccion_alumno',1),('2016_08_24_132720_usuario',1),('2016_08_24_140505_config_materias',1),('2016_08_24_140522_cuota',1),('2016_09_03_030806_mensaje',1),('2016_09_03_030832_detalles_mensajes',1),('2016_09_15_012115_administrador',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `monto_inscripcion`
--

DROP TABLE IF EXISTS `monto_inscripcion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `monto_inscripcion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `inscripcion` varchar(45) DEFAULT NULL,
  `seguro` varchar(45) DEFAULT NULL,
  `otro` varchar(45) DEFAULT NULL,
  `periodo_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `monto_inscripcion`
--

LOCK TABLES `monto_inscripcion` WRITE;
/*!40000 ALTER TABLE `monto_inscripcion` DISABLE KEYS */;
INSERT INTO `monto_inscripcion` VALUES (1,'12000','500','',2);
/*!40000 ALTER TABLE `monto_inscripcion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pago_inscripcion`
--

DROP TABLE IF EXISTS `pago_inscripcion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pago_inscripcion` (
  `idpago_inscripcion` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tipo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `monto` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `banco` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `referencia` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `inscripcion_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `colegio_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idpago_inscripcion`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pago_inscripcion`
--

LOCK TABLES `pago_inscripcion` WRITE;
/*!40000 ALTER TABLE `pago_inscripcion` DISABLE KEYS */;
INSERT INTO `pago_inscripcion` VALUES (1,'Efectivo','10000','1','3456754','1','',NULL,NULL,NULL),(2,'Transferencia','4200','','','1','',NULL,NULL,NULL);
/*!40000 ALTER TABLE `pago_inscripcion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pagos`
--

DROP TABLE IF EXISTS `pagos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pagos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` date DEFAULT NULL,
  `alumno_id` int(11) DEFAULT NULL,
  `monto` varchar(45) DEFAULT NULL,
  `estatus` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pagos`
--

LOCK TABLES `pagos` WRITE;
/*!40000 ALTER TABLE `pagos` DISABLE KEYS */;
INSERT INTO `pagos` VALUES (1,'2016-09-24',3,'14200','procesado');
/*!40000 ALTER TABLE `pagos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `periodo`
--

DROP TABLE IF EXISTS `periodo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `periodo` (
  `idperiodo` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `periodo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `estatus` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `colegio_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idperiodo`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `periodo`
--

LOCK TABLES `periodo` WRITE;
/*!40000 ALTER TABLE `periodo` DISABLE KEYS */;
INSERT INTO `periodo` VALUES (1,'01-2016','inactivo','',NULL,NULL,NULL),(2,'09-2016 / 05-2017','activo','',NULL,NULL,NULL);
/*!40000 ALTER TABLE `periodo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profesor`
--

DROP TABLE IF EXISTS `profesor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `profesor` (
  `idprofesor` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cedula_profesor` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `nombre_profesor` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `telefono_profesor` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email_profesor` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `edad_profesor` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `direccion_profesor` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `colegio_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idprofesor`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profesor`
--

LOCK TABLES `profesor` WRITE;
/*!40000 ALTER TABLE `profesor` DISABLE KEYS */;
INSERT INTO `profesor` VALUES (1,'18227454','Ronald Gonzalez','04149806700','ing.ronaldgonzalez@gmail.com','30','san jose de guanipa','',NULL,NULL,NULL),(2,'18229563','ivan rojas','04121809294','ing.ivanrojas@gmail.com','29','El Tigre','',NULL,NULL,NULL);
/*!40000 ALTER TABLE `profesor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `representante`
--

DROP TABLE IF EXISTS `representante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `representante` (
  `idrepresentante` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cedula` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `nombre` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `profesion` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `telefono_principal` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `telefono_opcional` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `direccion` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `estatus` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `colegio_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idrepresentante`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `representante`
--

LOCK TABLES `representante` WRITE;
/*!40000 ALTER TABLE `representante` DISABLE KEYS */;
INSERT INTO `representante` VALUES (7,'5116729','Beatriz Veliz','Ama de casa','02835110369','04141929539','lisbethrojas3@gmail.com','El Tigre','procesado','',NULL,NULL,NULL),(6,'18229563','Ivan de Jesus Rojas Veliz','ing. de sistemas','04121809294','','ing.ivanrojas@gmail.com','El Tigre','procesado','',NULL,NULL,NULL);
/*!40000 ALTER TABLE `representante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `saldo`
--

DROP TABLE IF EXISTS `saldo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `saldo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `representante_id` int(11) DEFAULT NULL,
  `delegado_id` int(11) DEFAULT NULL,
  `alumno_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `saldo`
--

LOCK TABLES `saldo` WRITE;
/*!40000 ALTER TABLE `saldo` DISABLE KEYS */;
/*!40000 ALTER TABLE `saldo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seccion`
--

DROP TABLE IF EXISTS `seccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `seccion` (
  `idseccion` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `seccion` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `grado_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `colegio_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `capacidad` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idseccion`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seccion`
--

LOCK TABLES `seccion` WRITE;
/*!40000 ALTER TABLE `seccion` DISABLE KEYS */;
INSERT INTO `seccion` VALUES (1,'A','1','1','30',NULL,NULL,NULL),(2,'A','3','1','35',NULL,NULL,NULL),(3,'B','3','1','30',NULL,NULL,NULL);
/*!40000 ALTER TABLE `seccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seccion_alumno`
--

DROP TABLE IF EXISTS `seccion_alumno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `seccion_alumno` (
  `idseccion_alumno` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `alumno_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `seccion_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `grado_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `colegio_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idseccion_alumno`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seccion_alumno`
--

LOCK TABLES `seccion_alumno` WRITE;
/*!40000 ALTER TABLE `seccion_alumno` DISABLE KEYS */;
INSERT INTO `seccion_alumno` VALUES (1,'3','2','','',NULL,NULL,NULL);
/*!40000 ALTER TABLE `seccion_alumno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `idusuario` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `colegio` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `codigo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `usuario` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `rolid` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idusuario`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'','','darknet','$2y$10$8oMAB/nIrT8.dt5h/d5pbuXgSZApLWoqWGQLrXzwio1ckDRq1SDbe','1','1','XmBxxeYPAYmJbA05tZUcGh66eSrt4ZNUytJwDD7EdjWw91dY7Vxm693eu8ns',NULL,NULL),(5,'','','18229563','$2y$10$GRiSCNdCW3JWJYhgwR1YGuMJ1xQmzW03TRIZ7Zv4lFLDYvO/1PFQe','2','2',NULL,NULL,NULL);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-09-24 14:58:37
