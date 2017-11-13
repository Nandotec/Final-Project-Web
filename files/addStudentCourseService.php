<?php
  session_start();
  header('Content-type: application/json');

  /*Data information*/
  $serverName = "localhost";
  $userName = "root";
  $passWord = "root";
  $dbName = "educationboard_db";

  $conn = new mysqli($serverName, $userName, $passWord, $dbName);

  if($conn -> connect_error){
    header("HTTP/1.1 500 Bad Connection");
    die("Server is not running.");
  } else {
    $uId = $_POST["uCourseId"];
    $uEmail = $_SESSION["uEmail"];
    $sql = "INSERT INTO CourseStudent(courseId, email, firstScore, secondScore, finalScore) VALUES ('$uId', '$uEmail', '0', '0', '0')";
    if ($conn -> query($sql) === TRUE){
        $response = "success";
        echo json_encode($response);
      } else {
        header("HTTP/1.1 Couldn't make insert.");
        die("Please try again.");
      }
    }
?>
