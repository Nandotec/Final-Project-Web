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
    $uCourseName = $_SESSION["uCourseName"];
    $responseArray = array();
    $sql = "SELECT * FROM Homework WHERE courseName = '$uCourseName'";
    $results = $dbConnection -> query($sql);
    if ($results -> num_rows > 0){
      while ($row = $results -> fetch_assoc()){
        $response = array("content" => $row["content"]);
        array_push($responseArray, $response);
      }
      echo json_encode($responseArray);
    } else {
      header("HTTP/1.1 406 User not found");
      die("No entries.");
    }
  }
?>