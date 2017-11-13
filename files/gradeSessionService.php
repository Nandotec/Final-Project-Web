<?php
	session_start();
	header('Content-type: application/json');
	$_SESSION["uGradingEmail"] = $_POST["uGradingEmail"];
	$_SESSION["uGradingCourse"] = $_POST["uGradingCourse"];
	echo json_encode("Success");
?>