CREATE DATABASE EducationBoard_DB;
use EducationBoard_DB;

CREATE TABLE Users(
  firstName varchar(25) NOT NULL,
  lastName varchar(25) NOT NULL,
  email varchar(25) NOT NULL,
  password varchar(128) NOT NULL,
  country varchar(25) NOT NULL,
  gender varchar(10) NOT NULL,
  type varchar(10) NOT NULL,
  PRIMARY KEY(firstname, lastname, email)
);

CREATE TABLE Courses(
  firstName varchar(25) NOT NULL,
  lastName varchar(25) NOT NULL,
  courseName varchar(25) NOT NULL,
  courseId varchar(25) NOT NULL,
  numStudents varchar(25) NOT NULL,
  PRIMARY KEY(courseId)
);

CREATE TABLE CourseStudent(
  courseId varchar(25) NOT NULL,
  email varchar(25) NOT NULL,
  firstScore integer,
  secondScore integer,
  finalScore integer,
  PRIMARY KEY(courseId, email)
);

CREATE TABLE Announcements(
  courseName varchar(25) NOT NULL,
  content varchar(256) NOT NULL,
  PRIMARY KEY(courseName, content)
);

CREATE TABLE DiscussionBoard(
  courseName varchar(25) NOT NULL,
  email varchar(25) NOT NULL,
  content varchar(256) NOT NULL,
  PRIMARY KEY(courseName, content)
);

CREATE TABLE Homework(
  courseName varchar(25) NOT NULL,
  content varchar(256) NOT NULL,
  PRIMARY KEY(courseName, content)
);

INSERT INTO Users(firstName, lastName, email, password, country, gender, type)
  VALUES ("Juan", "Ulloa", "juan@gmail.com", "JuanUlloa07", "Mexico", "Masculine", "Student");
INSERT INTO Users(firstName, lastName, email, password, country, gender, type)
  VALUES ("Jesus", "Guadiana", "jesus@gmail.com", "Jesus07", "Mexico", "Masculine", "Teacher");

INSERT INTO Courses(firstName, lastName, courseName, courseId, numStudents)
  VALUES("Jesus", "Guadiana", "Mathematics", "MA101", 1);
INSERT INTO Courses(firstName, lastName, courseName, courseId, numStudents)
  VALUES("Jesus", "Guadiana", "Physics", "PH101", 1);
INSERT INTO Courses(firstName, lastName, courseName, courseId, numStudents)
  VALUES("Jesus", "Guadiana", "Web Development", "WD101", 0);

INSERT INTO CourseStudent (courseId, email, firstScore, secondScore, finalScore)
  VALUES("MA101", "juan@gmail.com", 0, 0, 0);
INSERT INTO CourseStudent (courseId, email, firstScore, secondScore, finalScore)
  VALUES("PH101", "juan@gmail.com", 100, 10, 1);

