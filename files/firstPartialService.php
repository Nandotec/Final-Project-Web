<?php
  session_start();
  header('Content-type: application/json');

  /*Data information*/
  $serverName = "localhost";
  $userName = "root";
  $passWord = "root";
  $dbName = "EducationBoard_DB";

  $conn = new mysqli($serverName, $userName, $passWord, $dbName);

  if($conn -> connect_error){
    header("HTTP/1.1 500 Bad Connection");
    die("Server is not running.");
  } else {
    $uGrade = $_POST["uGrade"];
    $uCourseId = $_SESSION["uGradingCourse"];
    $uGradeSession = $_SESSION["uGradingEmail"];
    $sql = "UPDATE CourseStudent SET firstScore = '$uGrade' WHERE courseId = '$uCourseId' AND email = '$uGradeSession'";
      if ($conn -> query($sql) === TRUE){
        echo json_encode("success");
      } else {
        header("HTTP/1.1 Couldn't make update.");
        die("Please try again.");
      }
  }
?>
