CREATE DATABASE burgers_db;

-- Make it so all of the following code will affect <database_name_db> --
USE burgers_db;

-- Creates the table <table_name> within <database_name_db> --
CREATE TABLE `burgers` (

  -- Create a numeric column called "id" which automatically increments and cannot be null --
  `id` INTEGER(10) AUTO_INCREMENT NOT NULL,

  -- Create a string column called "movie" which cannot be null --
  `burger_name` VARCHAR(255) NOT NULL,

  -- Create a boolean column called "five_times" that sets the default value to FALSE if nothing is entered --
  `devoured` BOOLEAN NOT NULL,

  -- Make an integer column called "data" --
  `date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

  -- Set the primary key of the table to id --
  PRIMARY KEY (ID)

);


