<?php
  session_start();
  session_unset();
  session_destroy();
  $response = array('active' => 'false');
  echo json_encode($response);
 ?>
