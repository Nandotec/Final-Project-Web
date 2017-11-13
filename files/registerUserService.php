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
    $uPassword = $_POST["uPassword"];
    $uFirstName = $_POST["uFirstName"];
    $uLastName = $_POST["uLastName"];
    $uEmail = $_POST["uEmail"];
    $uCountry = $_POST["uCountry"];
    $uGender = $_POST["uGender"];
    $uType = $_POST["uType"];
    $sql = "SELECT * FROM Users WHERE email = '$uEmail'";
    $results = $conn -> query($sql);
    if($results -> num_rows > 0){
      header("HTTP/1.1 409 User already exists");
      die("Attempt to create another credential.");
    } else {
      $sql = "INSERT INTO Users (firstName, lastName, email, password, country, gender, type) VALUES ('$uFirstName', '$uLastName', '$uEmail', '$uPassword', '$uCountry', '$uGender', '$uType')";
      if ($conn -> query($sql) === TRUE){
        $_SESSION['uEmail'] = $_POST["uEmail"];
        $_SESSION['uType'] = $_POST["uType"];
        $response = array("firstName" => $uFirstName, "lastName" => $uLastName, "userName" => $uId, "email" => $uEmail, "country" => $uCountry, "gender" => $uGender, "type" => $uType);
        echo json_encode($response);
      } else {
        header("HTTP/1.1 Couldn't make insert.");
        die("Please try again.");
      }
    }
  }
?>
