-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: bqtroaufxlxnp3tzpxof-mysql.services.clever-cloud.com:3306
-- Generation Time: Nov 05, 2020 at 02:34 PM
-- Server version: 8.0.13-3
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bqtroaufxlxnp3tzpxof`
--

-- --------------------------------------------------------

--
-- Table structure for table `Baches`
--

DROP TABLE IF EXISTS `Baches`;
CREATE TABLE IF NOT EXISTS `Baches` (
  `ID` int(11) NOT NULL,
  `ID_Usuario` int(11) NOT NULL,
  `Posición` point NOT NULL,
  `Nivel de Gravedad` int(11) NOT NULL,
  `Longitud` decimal(10,0) NOT NULL,
  `Velocidad` decimal(10,0) NOT NULL,
  `ValorX_Acel` decimal(10,0) NOT NULL,
  `ValorY_Acel` decimal(10,0) NOT NULL,
  `ValorZ_Acel` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `Notificaciones`
--

DROP TABLE IF EXISTS `Notificaciones`;
CREATE TABLE IF NOT EXISTS `Notificaciones` (
  `ID` int(11) NOT NULL,
  `ID_Usuario` int(11) NOT NULL,
  `ID_Bache` int(11) NOT NULL,
  `Ubicación` point NOT NULL,
  `Mensaje` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `Usuarios`
--

DROP TABLE IF EXISTS `Usuarios`;
CREATE TABLE IF NOT EXISTS `Usuarios` (
  `ID` int(11) NOT NULL ,
  `UserName` text NOT NULL,
  `Correo` text NOT NULL,
  `Telefono` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Usuarios`
--

INSERT INTO `Usuarios` (`ID`, `UserName`, `Correo`, `Telefono`) VALUES
(1, 'CarlosBe0305', 'carlosalejandro.benitezhoyos@iefaz.edu.co', 2531163);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
