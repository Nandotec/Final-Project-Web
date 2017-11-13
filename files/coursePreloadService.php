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
    $firstName = $_POST["uFirstName"];
    $lastName = $_POST["uLastName"];
    $responseArray = array();
    $sql = "SELECT DISTINCT courseName FROM Courses WHERE firstName = '$firstName' AND lastName = '$lastName'";
    $results = $dbConnection -> query($sql);
    if ($results -> num_rows > 0){
      while ($row = $results -> fetch_assoc()){
        $response = array("courseName" => $row["courseName"]);
        array_push($responseArray, $response);
      }
      echo json_encode($responseArray);
    } else {
      header("HTTP/1.1 406 User not found");
      die("No entries.");
    }
  }
?>