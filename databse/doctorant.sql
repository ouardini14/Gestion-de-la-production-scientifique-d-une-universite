-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: spring2
-- ------------------------------------------------------
-- Server version	8.0.20

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
-- Table structure for table `doctorant`
--

DROP TABLE IF EXISTS `doctorant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctorant` (
  `docId` bigint NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `intituleThese` varchar(255) DEFAULT NULL,
  `coDirecteur` bigint DEFAULT NULL,
  `cotutelle` bigint DEFAULT NULL,
  `anneeInscriptiondate` date DEFAULT NULL,
  `cin` varchar(8) DEFAULT NULL,
  `passwordDoctorant` varchar(128) DEFAULT NULL,
  `directeurthese` bigint DEFAULT NULL,
  PRIMARY KEY (`docId`),
  KEY `coDirecteur` (`coDirecteur`),
  KEY `cotutelle` (`cotutelle`),
  KEY `doctorant_ibfk_1` (`directeurthese`),
  CONSTRAINT `doctorant_ibfk_1` FOREIGN KEY (`directeurthese`) REFERENCES `professeur` (`profId`) ON DELETE SET NULL,
  CONSTRAINT `doctorant_ibfk_2` FOREIGN KEY (`coDirecteur`) REFERENCES `professeur` (`profId`) ON DELETE SET NULL,
  CONSTRAINT `doctorant_ibfk_3` FOREIGN KEY (`cotutelle`) REFERENCES `professeur` (`profId`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctorant`
--

LOCK TABLES `doctorant` WRITE;
/*!40000 ALTER TABLE `doctorant` DISABLE KEYS */;

/*!40000 ALTER TABLE `doctorant` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-14  6:17:00
