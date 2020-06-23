<?php

require_once("../../lib/movieDAO.php");


	$consecutive_number = $_POST['consecutive_number'];

$movieDAO = new MovieDAO();

	$res = $movieDAO->get_valid_consecutive_number($consecutive_number);

echo $res['COUNT(id_movies)'];

$movieDAO->__destruct();


?>