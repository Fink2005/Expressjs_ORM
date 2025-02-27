-- -------------------------------------------------------------
-- TablePlus 6.3.2(586)
--
-- https://tableplus.com/
--
-- Database: db_cyber_media
-- Generation Time: 2025-02-25 21:46:05.5080
-- -------------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


CREATE TABLE `cars` (
  `car_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` text,
  `passengers` int DEFAULT NULL,
  `max_speed` varchar(255) DEFAULT NULL,
  `gearbox_type` varchar(255) DEFAULT NULL,
  `fuel_type` varchar(255) DEFAULT NULL,
  `price_per_day` double DEFAULT NULL,
  `discount_percentage` int DEFAULT '0',
  `image_url` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`car_id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `chats` (
  `chat_id` int NOT NULL AUTO_INCREMENT,
  `message` text,
  `user_id_sender` int NOT NULL,
  `user_id_recipient` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`chat_id`),
  KEY `user_id_sender` (`user_id_sender`),
  KEY `user_id_recipient` (`user_id_recipient`),
  CONSTRAINT `chats_ibfk_1` FOREIGN KEY (`user_id_sender`) REFERENCES `users` (`user_id`),
  CONSTRAINT `chats_ibfk_2` FOREIGN KEY (`user_id_recipient`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `permissions` (
  `permission_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `endpoint` varchar(255) NOT NULL,
  `method` varchar(255) NOT NULL,
  `module` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`permission_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `role_permissions` (
  `role_permissions_id` int NOT NULL AUTO_INCREMENT,
  `role_id` int NOT NULL,
  `permission_id` int NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`role_permissions_id`),
  KEY `role_id` (`role_id`),
  KEY `permission_id` (`permission_id`),
  CONSTRAINT `role_permissions_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`),
  CONSTRAINT `role_permissions_ibfk_2` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`permission_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `roles` (
  `role_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `pass_word` varchar(255) DEFAULT NULL,
  `full_name` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `goole_id` varchar(255) DEFAULT NULL,
  `face_app_id` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `role_id` int DEFAULT '2',
  PRIMARY KEY (`user_id`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `video_type` (
  `type_id` int NOT NULL AUTO_INCREMENT,
  `type_name` varchar(255) NOT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `videos` (
  `video_id` int NOT NULL AUTO_INCREMENT,
  `video_name` varchar(255) DEFAULT NULL,
  `description` text,
  `thumbnail` varchar(255) DEFAULT NULL,
  `views` int DEFAULT '0',
  `source` varchar(255) DEFAULT NULL,
  `type_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`video_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `cars` (`car_id`, `name`, `description`, `passengers`, `max_speed`, `gearbox_type`, `fuel_type`, `price_per_day`, `discount_percentage`, `image_url`, `created_at`, `updated_at`) VALUES
(1, 'Tesla Model S', 'Free recharge at any station', 4, '100 km/h in 4 seconds', 'Automatic gearbox', 'Electric', 168, 25, 'https://i.imgur.com/ZL52Q2D.png', NULL, NULL),
(2, 'BMW i8', 'Hybrid electric sports car', 2, '120 km/h in 4.2 seconds', 'Automatic gearbox', 'Hybrid', 190, 15, 'https://i.imgur.com/ZL52Q2D.png', NULL, NULL),
(3, 'Audi e-tron', 'Luxury electric SUV', 5, '110 km/h in 5.7 seconds', 'Automatic gearbox', 'Electric', 200, 20, 'https://i.imgur.com/ZL52Q2D.png', NULL, NULL),
(4, 'Mercedes-Benz EQC', 'Electric SUV with long range', 5, '100 km/h in 5.1 seconds', 'Automatic gearbox', 'Electric', 210, 10, 'https://i.imgur.com/ZL52Q2D.png', NULL, NULL),
(5, 'Porsche Taycan', 'Electric performance sedan', 4, '125 km/h in 3.5 seconds', 'Automatic gearbox', 'Electric', 250, 18, 'https://i.imgur.com/ZL52Q2D.png', NULL, NULL),
(6, 'Chevrolet Bolt', 'Affordable electric hatchback', 4, '90 km/h in 6.5 seconds', 'Automatic gearbox', 'Electric', 95, 5, 'https://i.imgur.com/ZL52Q2D.png', NULL, NULL),
(7, 'Nissan Leaf', 'Popular electric car', 4, '80 km/h in 7 seconds', 'Automatic gearbox', 'Electric', 80, 12, 'https://i.imgur.com/ZL52Q2D.png', NULL, NULL),
(8, 'Ford Mustang Mach-E', 'Electric SUV with muscle car spirit', 5, '105 km/h in 5.0 seconds', 'Automatic gearbox', 'Electric', 185, 8, 'https://i.imgur.com/ZL52Q2D.png', NULL, NULL),
(9, 'Jaguar I-PACE', 'Luxury electric SUV', 5, '110 km/h in 4.8 seconds', 'Automatic gearbox', 'Electric', 220, 20, 'https://i.imgur.com/ZL52Q2D.png', NULL, NULL),
(10, 'Hyundai Kona Electric', 'Compact electric SUV', 5, '90 km/h in 7.2 seconds', 'Automatic gearbox', 'Electric', 120, 5, 'https://i.imgur.com/ZL52Q2D.png', NULL, NULL),
(11, 'Tesla Model X', 'Family-friendly electric SUV', 7, '105 km/h in 4.4 seconds', 'Automatic gearbox', 'Electric', 260, 22, 'https://i.imgur.com/ZL52Q2D.png', NULL, NULL),
(12, 'Kia Soul EV', 'Compact and quirky electric car', 5, '85 km/h in 8.0 seconds', 'Automatic gearbox', 'Electric', 100, 7, 'https://i.imgur.com/ZL52Q2D.png', NULL, NULL),
(13, 'Volkswagen ID.4', 'All-electric compact SUV', 5, '95 km/h in 6.8 seconds', 'Automatic gearbox', 'Electric', 130, 10, 'https://i.imgur.com/ZL52Q2D.png', NULL, NULL),
(14, 'Mazda MX-30', 'Stylish electric crossover', 4, '80 km/h in 9.1 seconds', 'Automatic gearbox', 'Electric', 90, 6, 'https://i.imgur.com/ZL52Q2D.png', NULL, NULL),
(15, 'Honda e', 'Compact city electric car', 4, '75 km/h in 8.3 seconds', 'Automatic gearbox', 'Electric', 85, 3, 'https://i.imgur.com/ZL52Q2D.png', NULL, NULL),
(16, 'Lucid Air', 'High-performance electric sedan', 5, '120 km/h in 3.0 seconds', 'Automatic gearbox', 'Electric', 290, 20, 'https://i.imgur.com/ZL52Q2D.png', NULL, NULL),
(17, 'Rivian R1T', 'Electric adventure truck', 5, '105 km/h in 3.2 seconds', 'Automatic gearbox', 'Electric', 280, 18, 'https://i.imgur.com/ZL52Q2D.png', NULL, NULL),
(18, 'BYD Tang EV', 'Affordable electric SUV', 7, '90 km/h in 6.5 seconds', 'Automatic gearbox', 'Electric', 150, 12, 'https://i.imgur.com/ZL52Q2D.png', NULL, NULL),
(19, 'Peugeot e-208', 'Compact electric hatchback', 5, '85 km/h in 7.8 seconds', 'Automatic gearbox', 'Electric', 95, 10, 'https://i.imgur.com/ZL52Q2D.png', NULL, NULL),
(20, 'Renault Zoe', 'Popular electric city car', 5, '80 km/h in 8.5 seconds', 'Automatic gearbox', 'Electric', 80, 8, 'https://i.imgur.com/ZL52Q2D.png', NULL, NULL),
(21, 'Tesla Model 3', 'Electric sedan with long range', 5, '110 km/h in 3.5 seconds', 'Automatic gearbox', 'Electric', 170, 20, 'https://i.imgur.com/ZL52Q2D.png', NULL, NULL),
(22, 'Volvo XC40 Recharge', 'Electric luxury SUV', 5, '100 km/h in 4.9 seconds', 'Automatic gearbox', 'Electric', 225, 15, 'https://i.imgur.com/ZL52Q2D.png', NULL, NULL),
(23, 'BMW X3 Electric', 'Luxury compact electric SUV', 5, '105 km/h in 5.2 seconds', 'Automatic gearbox', 'Electric', 210, 10, 'https://i.imgur.com/ZL52Q2D.png', NULL, NULL),
(24, 'Mini Cooper SE', 'Compact electric hatchback', 4, '80 km/h in 7.0 seconds', 'Automatic gearbox', 'Electric', 90, 5, 'https://i.imgur.com/ZL52Q2D.png', NULL, NULL),
(25, 'Skoda Enyaq iV', 'Practical electric SUV', 5, '95 km/h in 6.9 seconds', 'Automatic gearbox', 'Electric', 135, 12, 'https://i.imgur.com/ZL52Q2D.png', NULL, NULL),
(26, 'Fiat 500 Electric', 'Stylish city electric car', 4, '75 km/h in 9.0 seconds', 'Automatic gearbox', 'Electric', 80, 5, 'https://i.imgur.com/ZL52Q2D.png', NULL, NULL),
(27, 'Opel Mokka-e', 'Compact electric SUV', 5, '85 km/h in 8.5 seconds', 'Automatic gearbox', 'Electric', 95, 7, 'https://i.imgur.com/ZL52Q2D.png', NULL, NULL),
(28, 'Toyota bZ4X', 'Toyota\'s first all-electric SUV', 5, '90 km/h in 7.5 seconds', 'Automatic gearbox', 'Electric', 150, 13, 'https://i.imgur.com/ZL52Q2D.png', NULL, NULL),
(29, 'Ford F-150 Lightning', 'Electric version of classic truck', 5, '100 km/h in 4.5 seconds', 'Automatic gearbox', 'Electric', 250, 17, 'https://i.imgur.com/ZL52Q2D.png', NULL, NULL),
(30, 'GMC Hummer EV', 'Electric off-road SUV', 5, '100 km/h in 3.5 seconds', 'Automatic gearbox', 'Electric', 350, 22, 'https://i.imgur.com/ZL52Q2D.png', NULL, NULL);

INSERT INTO `chats` (`chat_id`, `message`, `user_id_sender`, `user_id_recipient`, `created_at`, `updated_at`) VALUES
(1, 'asdasd', 23, 24, '2025-02-10 12:49:35', '2025-02-10 12:49:35'),
(2, 'em dep vcl', 23, 24, '2025-02-10 12:49:48', '2025-02-10 12:49:48'),
(3, 'em dep lam', 23, 24, '2025-02-10 12:49:58', '2025-02-10 12:49:58'),
(4, 'emem  oi ', 23, 24, '2025-02-10 12:51:24', '2025-02-10 12:51:24'),
(5, '', 23, 24, '2025-02-10 12:51:25', '2025-02-10 12:51:25'),
(6, 'asdasd', 23, 24, '2025-02-10 12:52:10', '2025-02-10 12:52:10'),
(7, 'asdasd', 23, 22, '2025-02-10 12:53:29', '2025-02-10 12:53:29'),
(8, '122112', 23, 24, '2025-02-10 12:53:46', '2025-02-10 12:53:46'),
(9, '123', 23, 24, '2025-02-10 12:59:06', '2025-02-10 12:59:06'),
(10, 'sao ngu z', 23, 24, '2025-02-10 13:02:06', '2025-02-10 13:02:06'),
(11, 'ua sao lau v', 23, 24, '2025-02-10 13:02:23', '2025-02-10 13:02:23'),
(12, 'em an com chua taaaaa', 23, 24, '2025-02-10 13:04:53', '2025-02-10 13:04:53'),
(13, 'hello worlddddddddddddd', 23, 24, '2025-02-10 13:05:33', '2025-02-10 13:05:33'),
(14, 'may moi ngu a', 24, 23, '2025-02-10 13:10:23', '2025-02-10 13:10:23'),
(15, 'may chui ai ngu', 23, 24, '2025-02-10 13:10:34', '2025-02-10 13:10:34'),
(16, 'sao', 23, 24, '2025-02-10 13:10:48', '2025-02-10 13:10:48'),
(17, 'sdsdsd', 24, 23, '2025-02-10 13:11:21', '2025-02-10 13:11:21'),
(18, 'sad', 24, 23, '2025-02-10 13:14:38', '2025-02-10 13:14:38'),
(19, 'cai', 24, 23, '2025-02-10 13:16:49', '2025-02-10 13:16:49'),
(20, 'asdsd', 24, 23, '2025-02-10 13:16:52', '2025-02-10 13:16:52'),
(21, 'asdasdasd', 24, 23, '2025-02-10 13:17:01', '2025-02-10 13:17:01'),
(22, 'cc', 24, 23, '2025-02-10 13:17:58', '2025-02-10 13:17:58'),
(23, 'ccccc', 24, 23, '2025-02-10 13:18:06', '2025-02-10 13:18:06'),
(24, 'hello em iu', 23, 24, '2025-02-10 13:21:28', '2025-02-10 13:21:28'),
(25, '', 23, 24, '2025-02-10 13:21:30', '2025-02-10 13:21:30'),
(26, '', 23, 24, '2025-02-10 13:21:30', '2025-02-10 13:21:30'),
(27, ' ', 23, 24, '2025-02-10 13:21:30', '2025-02-10 13:21:30'),
(28, 'as', 23, 24, '2025-02-10 13:21:31', '2025-02-10 13:21:31'),
(29, 'dsaiod', 23, 24, '2025-02-10 13:21:31', '2025-02-10 13:21:31'),
(30, '[psaod', 23, 24, '2025-02-10 13:21:31', '2025-02-10 13:21:31');

INSERT INTO `permissions` (`permission_id`, `name`, `endpoint`, `method`, `module`, `created_at`, `updated_at`) VALUES
(1, 'READ VIDEO', '/video/video-list', 'GET', 'videos', '2025-01-12 14:45:57', '2025-01-12 14:45:57'),
(2, 'CREATE VIDEO', '/video/video-create', 'GET', 'videos', '2025-01-12 14:46:33', '2025-01-12 14:46:33');

INSERT INTO `role_permissions` (`role_permissions_id`, `role_id`, `permission_id`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 2, 1, 1, '2025-01-12 16:35:22', '2025-01-13 17:14:05'),
(2, 2, 2, 1, '2025-01-12 16:43:25', '2025-01-12 16:43:25');

INSERT INTO `roles` (`role_id`, `name`, `description`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'ROLE_ADMIN', 'BỐ CÁC CẬU', 1, '2025-01-12 14:34:14', '2025-01-12 14:34:14'),
(2, 'ROLE_USER', 'Người dùng ', 1, '2025-01-12 14:35:02', '2025-01-12 14:35:02');

INSERT INTO `users` (`user_id`, `email`, `pass_word`, `full_name`, `avatar`, `goole_id`, `face_app_id`, `created_at`, `updated_at`, `role_id`) VALUES
(1, 'long@gmail.com', '1234', 'long', NULL, NULL, NULL, '2024-12-10 15:32:57', '2025-01-24 07:14:44', 2),
(2, 'long10@gmail.com', '123', 'syne', NULL, NULL, NULL, '2024-12-23 09:38:47', '2025-01-24 07:14:44', 2),
(3, 'syne@gmail.com', '$2b$10$yX54k6cCWmR1d9BR1r3usuZaV5k8dltJ/DyVcU3FIm9R5k.CgcQEe', 'syne', NULL, NULL, NULL, '2024-12-23 09:51:57', '2025-01-24 07:14:44', 2),
(4, 'syneba@gmail.com', '$2b$10$7DaUf1WVpBwR0zU92hnicevadO21HK5dpkPUGRGTXmvrI73bRCwPC', 'syne', NULL, NULL, NULL, '2024-12-23 09:57:49', '2025-01-24 07:14:44', 2),
(5, 'syngmail.com', '$2b$10$TCPsdG3RioKGZP6uvdaOg.t4JdOvHUfzTFueeupTnoArf7M8UvqJ6', 'syne', NULL, NULL, NULL, '2024-12-23 12:15:58', '2025-01-24 07:14:44', 2),
(6, 'nhinguneba@gmail.com', '$2b$10$8Pde/Bna5/umZq4ZkrwNMOGEpHy9g9jYjFTmkR8DPdK.JWXvTDox6', 'nhingune', NULL, NULL, NULL, '2024-12-23 12:17:25', '2025-01-24 07:14:44', 2),
(7, 'nhingu@gmail.com', '$2b$10$p2InZHH8gjNS/QN01GA7jeDP5Qur5gWb1vNGMk/rc3SxfPnjlQ0zO', 'nhingu', NULL, NULL, NULL, '2024-12-23 12:21:09', '2025-01-24 07:14:44', 2),
(8, 'cc@gmail.com', '$2b$10$sLxjNmwtv2AVnSF.FuD2O.pttXjZDA9xqLw74XnEw05Xf8x/xD0O6', 'cc', NULL, NULL, NULL, '2024-12-23 12:22:30', '2025-01-24 07:14:44', 2),
(9, 'nhine123@gmail.com', '$2b$10$vpCcpSVu8r9h8SQj/Chjn.wiv7ePCntxFZTToVZuAw3UdfL5mwhRm', 'nhine', NULL, NULL, NULL, '2024-12-23 12:23:59', '2025-01-24 07:14:44', 2),
(10, 'syne123@gmail.com', '$2b$10$.KJ1TUh/RkXm.snhjUS3a.T/gATWNp3tKqZ.0YLYLG8zcxaIgXuMi', 'sy', NULL, NULL, NULL, '2024-12-25 14:44:37', '2025-01-24 07:14:44', 2),
(12, 'phans3806@gmail.com', NULL, 'Phan Sỹ', 'avatar-1739734881020-44182828.jpg', NULL, '1688871391842001', '2024-12-30 12:40:55', '2025-02-16 19:41:21', 2),
(13, 'phans3805gmail.com', '$2b$10$rXfR//f6ebC6R5J1AlTNBuyOCbp/dU2Ee9fZpNbuvkDZP4g8ETf4O', 'syne', 'avatar-1739734004006-531330486.jpg', NULL, NULL, '2025-01-24 07:52:21', '2025-02-16 19:26:44', 2),
(15, 'phans3803gmail.com', '$2b$10$4mCCXxDuH1dp9z8OeP4cNuTrt54Ji/xFVAjc1F0BA2uUGnatwdaMq', 'syne', NULL, NULL, NULL, '2025-01-24 07:55:38', '2025-01-24 07:55:38', 2),
(18, 'phans3803@gmail.com', '$2b$10$m6xWAMxI5L3tY8wj6b7m3eUTGJ3ojP.TqYgHQSeWIWCBncvxWHsDe', 'syne', NULL, NULL, NULL, '2025-01-24 08:12:51', '2025-01-24 08:12:51', 2),
(19, 'syptgcs230361@fpt.edu.vn', '$2b$10$pL.208lbb4ycoc3lD9hqDe3QC6I.iXxCptG8Sk4Jq7YZtgsYRcR4i', 'syne', NULL, NULL, NULL, '2025-01-24 14:23:17', '2025-01-24 14:23:17', 2),
(20, 'PhanTanNgu@gmail.com', '$2b$10$HvfwBNNsi0pmknjHdgSaF..oPthDYpQZ9.DxScWL.Yp.r48h2hXt2', 'PhanTanLuoiAndNgu', NULL, NULL, NULL, '2025-02-09 14:17:08', '2025-02-09 14:17:08', 2),
(21, 'PhanT1anNgu@gmail.com', '$2b$10$lN4YN9qwhd8VPOM5oHu8/e9tBk0uTmeTLD9vjLKbekvB5MPIyJfbe', 'PhanTanLuoiAndNgu', NULL, NULL, NULL, '2025-02-09 14:18:04', '2025-02-09 14:18:04', 2),
(22, 'PhanT1anNg2u@gmail.com', '$2b$10$dQpMsbCm.PL.E84K7uMHNO/ZR/wQqXOmqIHHFGkW9ln2pb2SfKUYu', 'PhanTanLuoiAndNgu', NULL, NULL, NULL, '2025-02-09 14:18:43', '2025-02-09 14:18:43', 2),
(23, 'phans3801@gmail.com', '$2b$10$3MBY3vcvY0zfokhLaiWDeOS8ZHRXv08zvu6QVzoleG3cclRRRx5yq', 'Phan Tan Sy', NULL, NULL, NULL, '2025-02-09 20:48:10', '2025-02-09 20:48:10', 2),
(24, 'phans3802@gmail.com', '$2b$10$vCvxNgdtsVZCU7YqqC5QHu6WjIBm2UY4t.1iM1mkVUy.c.B/olR1q', 'nhingune', NULL, NULL, NULL, '2025-02-09 20:48:22', '2025-02-09 20:48:22', 2);

INSERT INTO `video_type` (`type_id`, `type_name`, `icon`, `created_at`, `updated_at`) VALUES
(1, 'New', 'IconNews', '2024-12-07 17:16:22', '2024-12-07 17:16:22'),
(2, 'Coding', 'IconCode', '2024-12-07 17:16:22', '2024-12-07 17:16:22'),
(3, 'Music', 'IconMusic', '2024-12-07 17:16:22', '2024-12-07 17:16:22'),
(4, 'Movie', 'IconVideo', '2024-12-07 17:16:22', '2024-12-07 17:16:22'),
(5, 'Gaming', 'IconDeviceGamepad', '2024-12-07 17:16:22', '2024-12-07 17:16:22'),
(6, 'Sport', 'IconBallBaseball', '2024-12-07 17:16:22', '2024-12-07 17:16:22'),
(7, 'Fashion', 'IconShirt', '2024-12-07 17:16:22', '2024-12-07 17:16:22'),
(8, 'Gym', 'IconUmbrella', '2024-12-07 17:16:22', '2024-12-07 17:16:22'),
(9, 'Crypto', 'IconDiamond', '2024-12-07 17:16:22', '2024-12-07 17:16:22'),
(10, 'hello', NULL, '2025-02-17 20:25:33', '2025-02-17 20:25:33');

INSERT INTO `videos` (`video_id`, `video_name`, `description`, `thumbnail`, `views`, `source`, `type_id`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'SƠN TÙNG M-TP | ĐỪNG LÀM TRÁI TIM ANH ĐAU | OFFICIAL TEASER', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'https://img.youtube.com/vi/CQXQKr_3vKE/maxresdefault.jpg', 1500, 'https://www.youtube.com/watch?v=CQXQKr_3vKE', 2, 1, '2024-10-07 07:08:26', '2024-10-07 08:00:00'),
(2, 'SƠN TÙNG M-TP | ĐỪNG LÀM TRÁI TIM ANH ĐAU | OFFICIAL', 'Highlights from a live music concert', 'https://img.youtube.com/vi/abPmZCZZrFA/maxresdefault.jpg', 800, 'https://www.youtube.com/watch?v=abPmZCZZrFA', 3, 1, '2024-10-08 09:00:00', '2024-10-08 09:30:00'),
(3, 'SƠN TÙNG M-TP | CHÚNG TA CỦA TƯƠNG LAI | OFFICIAL MUSIC VIDEO', 'First episode of a gaming adventure', 'https://img.youtube.com/vi/zoEtcR5EW08/maxresdefault.jpg', 2500, 'https://www.youtube.com/watch?v=zoEtcR5EW08', 5, 1, '2024-10-09 10:10:10', '2024-10-09 10:30:30'),
(4, 'SƠN TÙNG M-TP | 7-MINUTE STAGE | ĐỪNG LÀM TRÁI TIM ANH ĐAU', 'Latest fashion trends for the spring season', 'https://img.youtube.com/vi/FEmnnU-HhnQ/maxresdefault.jpg', 1200, 'https://www.youtube.com/watch?v=FEmnnU-HhnQ', 7, 1, '2024-10-10 11:15:20', '2024-10-10 11:45:00'),
(5, '(Synthwave Disco 80s) Em Đừng Đi - Sơn Tùng M-TP | Prod. by SenTfour', 'Understanding the basics of cryptocurrency', 'https://img.youtube.com/vi/kMg3wTAhNsY/maxresdefault.jpg', 300, 'https://www.youtube.com/watch?v=kMg3wTAhNsY', 9, 1, '2024-10-11 12:20:00', '2024-10-11 12:50:00'),
(6, 'SƠN TÙNG M-TP | MUỘN RỒI MÀ SAO CÒN | OFFICIAL MUSIC VIDEO', 'Complete guide to full stack web development', 'https://img.youtube.com/vi/xypzmu5mMPY/maxresdefault.jpg', 1200, 'https://www.youtube.com/watch?v=xypzmu5mMPY', 2, 1, '2024-10-12 13:30:00', '2024-10-12 13:45:00'),
(7, 'NƠI NÀY CÓ ANH | OFFICIAL MUSIC VIDEO | SƠN TÙNG M-TP', 'Soulful acoustic guitar performance', 'https://img.youtube.com/vi/FN7ALfpGxiI/maxresdefault.jpg', 650, 'https://www.youtube.com/watch?v=FN7ALfpGxiI', 3, 1, '2024-10-14 14:00:00', '2024-10-14 14:30:00'),
(8, 'SƠN TÙNG M-TP | CHÚNG TA CỦA HIỆN TẠI | OFFICIAL MUSIC VIDEO', 'Compilation of epic gaming moments', 'https://img.youtube.com/vi/psZ1g9fMfeo/maxresdefault.jpg', 3500, 'https://www.youtube.com/watch?v=psZ1g9fMfeo', 5, 1, '2024-10-15 15:10:00', '2024-10-15 15:20:00'),
(9, 'SƠN TÙNG M-TP | HÃY TRAO CHO ANH ft. Snoop Dogg | Official MV\n', 'Effective fitness workout routine', 'https://img.youtube.com/vi/knW7-x7Y7RE/maxresdefault.jpg', 900, 'https://www.youtube.com/watch?v=knW7-x7Y7RE', 1, 8, '2024-10-16 08:15:30', '2024-10-16 09:45:30'),
(10, 'Em Là Mầm Non Của Đảng (Thu thanh trước 1975) | Hà Nội Vi Vu', 'Effective fitness workout routine', 'https://img.youtube.com/vi/vfWTt905FUI/maxresdefault.jpg', 900, 'https://www.youtube.com/watch?v=vfWTt905FUI', 1, 8, '2024-10-17 14:20:45', '2024-10-17 15:30:10'),
(11, 'SƠN TÙNG M-TP x BOMATELA | CÓ CHẮC YÊU LÀ ĐÂY (REMIX) | SHOW RECAP', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'https://img.youtube.com/vi/EhJqekMVxTc/maxresdefault.jpg', 299, 'https://www.youtube.com/watch?v=EhJqekMVxTc', 1, 1, '2024-10-18 10:00:00', '2024-10-18 12:00:00'),
(12, 'SƠN TÙNG M-TP | LẠC TRÔI MOVINGTOON | PHOTOSHOOT | OFFICIAL EPISODE 36', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ', 'https://img.youtube.com/vi/phknRB6-f4U/maxresdefault.jpg', 408, 'https://www.youtube.com/watch?v=phknRB6-f4U', 1, 1, '2024-10-19 09:30:25', '2024-10-19 11:45:00'),
(13, 'SƠN TÙNG M-TP | LẠC TRÔI MOVINGTOON | TÙNG FAKE TÙNG REAL | OFFICIAL EPISODE 30', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. ', 'https://img.youtube.com/vi/kgeiiJNewZc/maxresdefault.jpg', 199, 'https://www.youtube.com/watch?v=kgeiiJNewZc', 1, 4, '2024-10-20 08:00:00', '2024-10-20 09:00:00'),
(14, 'SON TUNG M-TP | MAKING MY WAY | OFFICIAL VISUALIZER', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', 'https://img.youtube.com/vi/niPkap1ozUA/maxresdefault.jpg', 120, 'https://www.youtube.com/watch?v=niPkap1ozUA', 1, 6, '2024-10-21 16:30:00', '2024-10-21 17:00:00'),
(15, 'SƠN TÙNG M-TP | THERES NO ONE AT ALL (ANOTHER VERSION) | OFFICIAL MUSIC VIDEO', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'https://img.youtube.com/vi/JHSRTU31T14/maxresdefault.jpg', 1000, 'https://www.youtube.com/watch?v=JHSRTU31T14', 1, 4, '2024-10-22 10:10:10', '2024-10-22 11:30:45'),
(16, 'SƠN TÙNG M-TP | LẠC TRÔI MOVINGTOON | KÝ HỢP ĐỒNG | OFFICIAL EPISODE 32', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'https://img.youtube.com/vi/MaI7JCybK3s/maxresdefault.jpg', 999, 'https://www.youtube.com/watch?v=MaI7JCybK3s', 1, 6, '2024-10-24 08:45:30', '2024-10-24 10:15:00'),
(17, 'Bản tình ca của Đá - [Official Audio] - HwangCho - Đường anh đi toàn ke với đá…', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', 'https://img.youtube.com/vi/ZyYmIiYEK7I/maxresdefault.jpg', 1500, 'https://www.youtube.com/watch?v=ZyYmIiYEK7I', 1, 6, '2024-10-25 18:00:00', '2024-10-25 19:00:00');



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;