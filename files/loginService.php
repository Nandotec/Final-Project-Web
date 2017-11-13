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
    $uEmail = $_POST["uEmail"];
    $uPassword = $_POST["uPassword"];
    $_SESSION['uEmail'] = $_POST["uEmail"];
    $sql = "SELECT * FROM Users WHERE email = '$uEmail' AND password = '$uPassword'";
    $results = $dbConnection -> query($sql);
    if ($results -> num_rows > 0){
      while ($row = $results -> fetch_assoc()){
        $response = array("firstName" => $row["firstName"], "lastName" => $row["lastName"]);
        $_SESSION['uType'] = $row["type"];
      }
      echo json_encode($response);
    } else {
      header("HTTP/1.1 406 User not found");
      die("Credentials not registered.");
    }
  }
?>