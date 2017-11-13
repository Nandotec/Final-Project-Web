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
    $uEmail = $_SESSION["uEmail"];
    $uCourseId = $_POST["uCourseId"];
    $sql = "DELETE FROM CourseStudent WHERE courseId= '$uCourseId' AND email = '$uEmail'";
    if ($dbConnection -> query($sql) === TRUE){
        $response = "success";
        echo json_encode($response);
      } else {
        header("HTTP/1.1 Couldn't make delete.");
        die("Please try again.");
      }
  }
?>
