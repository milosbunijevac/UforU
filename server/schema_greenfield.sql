-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Universities'
-- 
-- ---

CREATE DATABASE UFORU;

USE UFORU;

DROP TABLE IF EXISTS `Universities`;
		
CREATE TABLE `Universities` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `Names` MEDIUMTEXT NOT NULL,
  `Address` MEDIUMTEXT NOT NULL,
  `Admissions_Rate` DECIMAL NOT NULL,
  `Tuition` INTEGER NOT NULL,
  `Size` INTEGER NOT NULL,
  `Average_GPA` DECIMAL NOT NULL,
  `Average_SAT_Score` INTEGER NOT NULL,
  `Sports_Division` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Majors'
-- 
-- ---

DROP TABLE IF EXISTS `Majors`;
		
CREATE TABLE `Majors` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `Major` MEDIUMTEXT NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Join'
-- 
-- ---

DROP TABLE IF EXISTS `Join`;
		
CREATE TABLE `Join` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `Major_ID` INTEGER NOT NULL,
  `University_ID` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Join` ADD FOREIGN KEY (Major_ID) REFERENCES `Majors` (`id`);
ALTER TABLE `Join` ADD FOREIGN KEY (University_ID) REFERENCES `Universities` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Universities` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Majors` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Join` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Universities` (`id`,`Names`,`Address`,`Admissions Rate`,`Tuition`,`Size`,`Average GPA`,`Average SAT Score`,`Sports Division`) VALUES
-- ('','','','','','','','','');
-- INSERT INTO `Majors` (`id`,`Major`) VALUES
-- ('','');
-- INSERT INTO `Join` (`id`,`Major ID`,`University ID`) VALUES
-- ('','','');