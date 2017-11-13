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
    $firstName = $_POST["uFirstName"];
    $lastName = $_POST["uLastName"];
    $uId = $_POST["uId"];
    $uName = $_POST["uName"];
    $sql = "INSERT INTO Courses(firstName, lastName, courseName, courseId, numStudents) VALUES('$firstName', '$lastName', '$uName', '$uId', 0)";
    if ($conn -> query($sql) === TRUE){
      $response = array("success" => "true");
      echo json_encode($response);
    } else {
      header("HTTP/1.1 Couldn't make insert.");
       die("Please try again.");
    } 
  }
?>
