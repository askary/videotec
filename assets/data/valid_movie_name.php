<?php

require_once("../../lib/movieDAO.php");


	$name = utf8_decode($_POST['name']);

$movieDAO = new MovieDAO();

	$res = $movieDAO->get_valid_name_movie($name);

echo $res['COUNT(id_movies)'];

$movieDAO->__destruct();


?>