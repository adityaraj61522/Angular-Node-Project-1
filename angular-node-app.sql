-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 03, 2022 at 11:08 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `angular-node-app`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `mobile` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `hometown` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `gender` varchar(100) NOT NULL,
  `emp_dept` varchar(100) NOT NULL,
  `dob` varchar(255) NOT NULL,
  `l1_manager` varchar(100) NOT NULL,
  `l2_manager` varchar(100) NOT NULL,
  `img` varchar(255) NOT NULL DEFAULT 'https://cdn1.iconfinder.com/data/icons/app-user-interface-glyph/64/user_man_user_interface_app_person-512.png'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `mobile`, `email`, `hometown`, `password`, `gender`, `emp_dept`, `dob`, `l1_manager`, `l2_manager`, `img`) VALUES
(1, 'Aditya', 'Raj', '7634867806', 'aditya.raj@peoplestrong.com', 'Dhanbad', '$2a$10$qOVrgZUoo56fM/WS3AQSpuTob8Sr9XQ2/Dv2DEW0O0Kcv407nGI16', 'undefined', 'Technology', '2022-02-18', 'Vineet Pandita', 'Vishal Saha', 'https://cdn1.iconfinder.com/data/icons/app-user-interface-glyph/64/user_man_user_interface_app_person-512.png'),
(4, 'abc', 'abc', 'abc', 'abc', 'abc', 'abc', 'abc', 'abc', '2022-01-24', 'abc', 'abc', ''),
(67, 'Aditya', 'Raj', '7634867806', 'aditya.raj@peoplesstrosng.com', 'Dhanbad', '$2a$10$Ou1I8pNTKIJ97JF3n7r3xO1nS65tv4yR0Ni3QA5om9pY7PG9gV/Gy', 'Male', 'Technology', '2000-06-03', 'Vineet Pandita', 'Vishal Saha', 'https://cdn1.iconfinder.com/data/icons/app-user-interface-glyph/64/user_man_user_interface_app_person-512.png'),
(68, 'Aditya', 'Raj', '7634867806', 'aditya.raj@peoplesstrosng.com', 'Dhanbad', '$2a$10$Masy4Yhu7njMsTv7ei82HewXuYBwGgb5hjqgXtzwifEc64VEPv6va', 'Male', 'Technology', '2000-06-03', 'Vineet Pandita', 'Vishal Saha', 'https://cdn1.iconfinder.com/data/icons/app-user-interface-glyph/64/user_man_user_interface_app_person-512.png'),
(69, 'Aditya', 'Raj', '7634867806', 'aditya.raj@peoplessxtrosng.com', 'Dhanbad', '$2a$10$qOVrgZUoo56fM/WS3AQSpuTob8Sr9XQ2/Dv2DEW0O0Kcv407nGI16', 'Male', 'Technology', '2000-06-03', 'Vineet Pandita', 'Vishal Saha', 'https://cdn1.iconfinder.com/data/icons/app-user-interface-glyph/64/user_man_user_interface_app_person-512.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
