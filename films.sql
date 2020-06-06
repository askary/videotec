-- MySQL Workbench Synchronization
-- Generated: 2020-06-01 23:54
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: Askary

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `film_library` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE IF NOT EXISTS `film_library`.`categories` (
  `id_categories` INT(11) NOT NULL AUTO_INCREMENT,
  `category` TEXT(45) NOT NULL,
  `creation_date` DATETIME NOT NULL,
  `status` TINYINT(4) NOT NULL,
  PRIMARY KEY (`id_categories`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `film_library`.`movies` (
  `id_movies` INT(11) NOT NULL AUTO_INCREMENT,
  `id_categories` INT(11) NOT NULL,
  `consecutive_number` TEXT(45) NOT NULL,
  `movie` TEXT(45) NOT NULL,
  `img` TEXT(45) NULL DEFAULT NULL,
  `consecutive_number_of_category` TEXT(45) NOT NULL,
  `creation_date` DATETIME NOT NULL,
  `status` TINYINT(4) NOT NULL,
  PRIMARY KEY (`id_movies`),
  INDEX `fk_movies_categories_idx` (`id_categories` ASC) VISIBLE,
  CONSTRAINT `fk_movies_categories`
    FOREIGN KEY (`id_categories`)
    REFERENCES `film_library`.`categories` (`id_categories`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
