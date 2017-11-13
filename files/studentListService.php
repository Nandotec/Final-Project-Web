<?php
  session_start();
  header('Content-type: application/json');

  /*Data information*/
  $serverName = "localhost";
  $userName = "root";
  $passWord = "root";
  $dbName = "educationboard_db";

  $dbConnection = new mysqli($serverName, $userName, $passWord, $dbName);
  if ($dbConnection -> connect_error){
    header("HTTP/1.1 500 bad db connection, portal down");
    die("Server is not running.");
  } else {
    $uCourseName = $_POST["uCourseName"];
    $responseArray = array();
    $sql = "SELECT Users.firstName AS firstName, Users.lastName AS lastName, Users.email AS email, firstScore AS firstScore, secondScore AS secondScore, finalScore AS finalScore, Courses.courseId AS courseId FROM Users, CourseStudent, Courses WHERE Courses.courseName = '$uCourseName' AND Courses.courseId = CourseStudent.courseId AND CourseStudent.email = Users.email";
    $results = $dbConnection -> query($sql);
    if ($results -> num_rows > 0){
      while ($row = $results -> fetch_assoc()){
        $response = array("firstName" => $row["firstName"], "lastName" => $row["lastName"], "email" => $row["email"],
          "firstScore" => $row["firstScore"], "secondScore" => $row["secondScore"], "finalScore" => $row["finalScore"], "courseId" => $row["courseId"]);
        array_push($responseArray, $response);
      }
      echo json_encode($responseArray);
    } else {
      header("HTTP/1.1 406 User not found");
      die("No entries.");
    }
  }
?>