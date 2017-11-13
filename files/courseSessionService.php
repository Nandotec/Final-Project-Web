<?php
	session_start();
	header('Content-type: application/json');
	$_SESSION["uCourseName"] = $_POST["course"];
	echo json_encode("Success");
?>