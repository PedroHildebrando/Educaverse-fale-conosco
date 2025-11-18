-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.4.32-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              12.10.0.7000
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para educaverse
DROP DATABASE IF EXISTS `educaverse`;
CREATE DATABASE IF NOT EXISTS `educaverse` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin */;
USE `educaverse`;

-- Copiando estrutura para tabela educaverse.fale_conosco
DROP TABLE IF EXISTS `fale_conosco`;
CREATE TABLE IF NOT EXISTS `fale_conosco` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome_completo` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `telefone` varchar(50) NOT NULL,
  `mensagem` varchar(50) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- Copiando dados para a tabela educaverse.fale_conosco: ~2 rows (aproximadamente)
DELETE FROM `fale_conosco`;
INSERT INTO `fale_conosco` (`id`, `nome_completo`, `email`, `telefone`, `mensagem`) VALUES
	(3, 'Pedro Henrique', 'Henrriquepedro@gmail.com', '18992654110', 'Olá, gostaria que me ajudasse a x  produto'),
	(4, 'Bruno ', 'Bruo.s@gmail.com', '18965436243', 'Gostaria participa da sua entrevista de emprego!!');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
