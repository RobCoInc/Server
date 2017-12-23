
-- Host: localhost
-- Generation Time: Dec 21, 2017 at 12:58 AM
-- Server version: 5.7.20-0ubuntu0.16.04.1

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
-- Table structure for table `usershift`
--

CREATE TABLE `usershift` (
  `shiftId` int(32) NOT NULL,
  `userId` int(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `arrest`
--

CREATE TABLE `arrest` (
  `_id` int(32) NOT NULL,
  `reason` varchar(512) NOT NULL,
  `complacency` int(8) NOT NULL,
  `time` varchar(16) NOT NULL,
  `date` varchar(16) NOT NULL,
  `locationId` int(32) NOT NULL,
  `descriptionId` int(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `description`
--

CREATE TABLE `description` (
  `_id` int(32) NOT NULL,
  `name` varchar(64) NOT NULL,
  `height` varchar(8) NOT NULL,
  `weight` varchar(8) NOT NULL,
  `eyeColor` varchar(16) NOT NULL,
  `skinColor` varchar(16) NOT NULL,
  `hairColor` varchar(16) NOT NULL,
  `hairStyle` varchar(16) NOT NULL,
  `arrestId` int(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `_id` int(32) NOT NULL,
  `companyName` varchar(64) NOT NULL,
  `secureNum` int(8) NOT NULL,
  `level` int(8) NOT NULL,
  `location` varchar(64) NOT NULL,
  `email` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `_id` int(32) NOT NULL,
  `locationName` varchar(64) NOT NULL,
  `locationCity` varchar(64) NOT NULL,
  `locationAddress` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `shift`
--

CREATE TABLE `shift` (
  `_id` int(32) NOT NULL,
  `time` varchar(64) NOT NULL,
  `date` varchar(64) NOT NULL,
  `locationId` int(32) NOT NULL,
  `isClaimed` int(8) NOT NULL,
  `userId` int(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `_id` int(32) NOT NULL,
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
-- Indexes for dumped tables
--

--
-- Indexes for table `company`
--
ALTER TABLE `arrest`
  ADD PRIMARY KEY (`_id`);

--
-- Indexes for table `company`
--
ALTER TABLE `description`
  ADD PRIMARY KEY (`_id`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
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
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `arrest`
  MODIFY `_id` int(64) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `description`
  MODIFY `_id` int(64) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
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
  MODIFY `_id` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
