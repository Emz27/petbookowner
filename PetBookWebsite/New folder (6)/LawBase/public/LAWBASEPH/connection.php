<?php
$servername = "mysql.hostinger.ph";
$username = "u628581949_law";
$password = "BurgerKing123";
$dbname = "u628581949_law";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if(!$conn){
	die("Connection failed: " . mysqli_connect_error());
}
?>