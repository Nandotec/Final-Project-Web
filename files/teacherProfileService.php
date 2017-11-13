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
    $uCourseName = $_POST["uCourseName"];
    $sql = "SELECT * FROM Users, Courses WHERE courseName = '$uCourseName' AND Users.firstName = Courses.firstName AND Users.lastName = Courses.lastName";
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