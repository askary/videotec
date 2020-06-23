<?php

require_once("../../lib/movieDAO.php");


	$consecutive_number_of_category = $_POST['number_of_categories'];

$movieDAO = new MovieDAO();

	$res = $movieDAO->get_valid_consecutive_number_of_category($consecutive_number_of_category);

echo $res['COUNT(id_movies)'];

$movieDAO->__destruct();


?>