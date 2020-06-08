<?php
require_once("../../lib/movieDAO.php");


	$name =utf8_decode($_POST['name']);
	$consecutive_number = $_POST['consecutive_number'];
	$number_of_categories = $_POST['number_of_categories'];
	$category = $_POST['category'];		
//echo 'valor: name:'.$name.", consecutive_number:".$consecutive_number.", number_of_categories:".$number_of_categories.", category:".$category;
$movieDAO = new MovieDAO(); 
	$movieDAO->insert_movie($category,$name,$consecutive_number ,$number_of_categories);

$movieDAO->__destruct();
?>


