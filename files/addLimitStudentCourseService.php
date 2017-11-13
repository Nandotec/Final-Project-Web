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
    $uEmail = $_SESSION['uEmail'];
    $sql = "SELECT * FROM CourseStudent WHERE email = '$uEmail'";
    $results = $conn -> query($sql);
    if($results -> num_rows < 6){
      $response = "false";
      echo json_encode($response);
    }
    else
    {
      $response = "true";
      echo json_encode($response);
    }
  }
?>