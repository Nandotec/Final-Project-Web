<?php
	session_start();
	if($_SESSION['uType'] == "Teacher")
	{
		$response = array('type' => 'Teacher');
	}
	else if ($_SESSION['uType'] == "Student")
	{
		$response = array('type' => 'Student');
	}
	echo json_encode($response);
?>