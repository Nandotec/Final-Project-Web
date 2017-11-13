<?php
  session_start();
  if(isset($_SESSION['Last-Activity']))
  {
  	 if(time() - $_SESSION['Last-Activity'] > 600)
  	 {
  	 	session_unset();
    	session_destroy();
    	$response = array('active' => 'false');
  	 }
  	 else
  	 {
  	 	$_SESSION['Last-Activity'] = time();
  	 	$response = array('active' => 'true');
  	 }
   }
  else
  {
  	$_SESSION['Last-Activity'] = time();
  	$response = array('active' => 'true');
  } 
  echo json_encode($response);
 ?>
