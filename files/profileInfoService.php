<?php
  session_start();
  header('Content-type: application/json');

  /*Data information*/
  $serverName = "localhost";
  $userName = "root";
  $passWord = "root";
  $dbName = "EducationBoard_DB";

  $dbConnection = new mysqli($serverName, $userName, $passWord, $dbName);
  if ($dbConnection -> connect_error){
    header("HTTP/1.1 500 bad db connection, portal down");
    die("Server is not running.");
  } else {
    $activeSession = $_SESSION['uEmail'];
    $sql = "SELECT * FROM Users WHERE email = '$activeSession'";
    $results = $dbConnection -> query($sql);
    if ($results -> num_rows > 0){
      while ($row = $results -> fetch_assoc()){
        $response = array("firstName" => $row["firstName"], "lastName" => $row["lastName"], "email" => $row["email"], "country" => $row["country"], "gender" => $row["gender"]);
      }
      echo json_encode($response);
    } else {
      header("HTTP/1.1 406 User not found");
      die("Credentials not registered.");
    }
  }
?>