-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 30, 2017 at 06:36 PM
-- Server version: 5.7.20-0ubuntu0.16.04.1
-- PHP Version: 7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `suplexTest`
--

-- --------------------------------------------------------

--
-- Table structure for table `arrest`
--

CREATE TABLE `arrest` (
  `_id` int(64) NOT NULL,
  `reason` varchar(512) NOT NULL,
  `complacency` int(8) NOT NULL,
  `time` varchar(16) NOT NULL,
  `date` varchar(16) NOT NULL,
  `locationId` int(32) NOT NULL,
  `descriptionId` int(32) NOT NULL,
  `userId` int(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `_id` int(64) NOT NULL,
  `companyName` varchar(64) NOT NULL,
  `secureNum` int(8) NOT NULL,
  `level` int(8) NOT NULL,
  `location` varchar(64) NOT NULL,
  `email` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`_id`, `companyName`, `secureNum`, `level`, `location`, `email`) VALUES
(1, 'No Frills', 123, 1, 'Port Coquitlam', 'security@nofrills.ca');

-- --------------------------------------------------------

--
-- Table structure for table `description`
--

CREATE TABLE `description` (
  `_id` int(64) NOT NULL,
  `name` varchar(64) NOT NULL,
  `height` varchar(8) NOT NULL,
  `weight` varchar(8) NOT NULL,
  `eyeColor` varchar(16) NOT NULL,
  `skinColor` varchar(16) NOT NULL,
  `hairColor` varchar(16) NOT NULL,
  `hairStyle` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `_id` int(64) NOT NULL,
  `locationName` varchar(64) NOT NULL,
  `locationCity` varchar(64) NOT NULL,
  `locationAddress` varchar(64) NOT NULL,
  `companyId` int(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `shift`
--

CREATE TABLE `shift` (
  `_id` int(64) NOT NULL,
  `time` varchar(64) NOT NULL,
  `date` varchar(64) NOT NULL,
  `locationId` int(32) NOT NULL,
  `isClaimed` int(8) NOT NULL,
  `userId` int(32) NOT NULL,
  `companyId` int(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `_id` int(64) NOT NULL,
  `password` varchar(64) NOT NULL,
  `email` varchar(64) NOT NULL,
  `firstName` varchar(32) NOT NULL,
  `lastName` varchar(32) NOT NULL,
  `companyId` int(32) NOT NULL,
  `cellNumber` varchar(16) NOT NULL,
  `isAdmin` int(8) NOT NULL,
  `isBasic` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`_id`, `password`, `email`, `firstName`, `lastName`, `companyId`, `cellNumber`, `isAdmin`, `isBasic`) VALUES
(4, 'pass', 'admin@test.ca', 'admin', 'test', 69, '1231231234', 1, 0),
(5, 'pass', 'user@test.ca', 'user', 'test', 69, '1231231234', 0, 0),
(6, 'pass', 'basic@test.ca', 'basic', 'test', 69, '1231231234', 0, 1),
(7, 'testpass', 'morgan@test.ca', 'morgan', 'tester', 69, '1234567890', 0, 0),
(8, 'pass', 'vi@rg.il', 'virgil saei', 'tester', 69, '1234567890', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `usershift`
--

CREATE TABLE `usershift` (
  `shiftId` int(32) NOT NULL,
  `userId` int(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `arrest`
--
ALTER TABLE `arrest`
  ADD PRIMARY KEY (`_id`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`_id`);

--
-- Indexes for table `description`
--
ALTER TABLE `description`
  ADD PRIMARY KEY (`_id`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`_id`);

--
-- Indexes for table `shift`
--
ALTER TABLE `shift`
  ADD PRIMARY KEY (`_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `arrest`
--
ALTER TABLE `arrest`
  MODIFY `_id` int(64) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `_id` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `description`
--
ALTER TABLE `description`
  MODIFY `_id` int(64) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `_id` int(64) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `shift`
--
ALTER TABLE `shift`
  MODIFY `_id` int(64) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `_id` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
