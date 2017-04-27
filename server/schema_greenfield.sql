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
  `name` MEDIUMTEXT NOT NULL,
  `address` MEDIUMTEXT NOT NULL,
  `state` MEDIUMTEXT NOT NULL,
  `description` varchar(12000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `admission_rate` DECIMAL NOT NULL,
  `tuition` INTEGER NOT NULL,
  `size` INTEGER NOT NULL,
  `average_gpa` DECIMAL NOT NULL,
  `average_sat_score` INTEGER NOT NULL,
  `sports_division` INTEGER NOT NULL,
  `website_url` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_url` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Majors'
-- 
-- ---

DROP TABLE IF EXISTS `Majors`;
		
CREATE TABLE `Majors` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `major` MEDIUMTEXT NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Join'
-- 
-- ---

DROP TABLE IF EXISTS `majors_universities`;
		
CREATE TABLE `Join` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `major_id` INTEGER NOT NULL,
  `university_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `majors_universities` ADD FOREIGN KEY (major_id) REFERENCES `Majors` (`id`);
ALTER TABLE `majors_universities` ADD FOREIGN KEY (university_id) REFERENCES `Universities` (`id`);

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