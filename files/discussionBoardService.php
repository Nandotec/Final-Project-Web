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
    $uCourseName = $_SESSION["uCourseName"];
    $uEmail = $_SESSION["uEmail"];
    $uContent = $_POST["uContent"];
    $sql = "INSERT INTO DiscussionBoard(courseName, email, content) VALUES ('$uCourseName', '$uEmail', '$uContent')";
    if ($dbConnection -> query($sql) === TRUE){
      $response = array("email" => $uEmail, "content" => $uContent);
      echo json_encode($response);
    } else {
        header("HTTP/1.1 Couldn't make insert.");
        die("Please try again.");
  }
}
?>