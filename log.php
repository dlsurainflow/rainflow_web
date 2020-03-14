<?php
$uName = $_POST["username"];
$pWord = $_POST["password"];
$servername = "localhost";
$username = "root";
$password = "";

// Create connection
	$conn = mysqli_connect($servername, $username, $password);
// Check connection
	if (!$conn) {
		die("Connection failed: " . mysqli_connect_error());
	}
	echo "<h1><b>Connected successfully</b></h2><br>";
	echo "<h2><b>", $uName, "</b></h2>";
	
	if(!mysqli_select_db($conn, 'test'))
	{
		echo "<br>Database Not Selected ";
	}
	
	$check = mysqli_query($conn,"SELECT * FROM login_details WHERE username = '$uName' and password = '$pWord'");
	$checkrows=mysqli_num_rows($check);
	
	if($checkrows > 0)
	{
		header("refresh:2; url = index.html");
	}
	else
	{
		echo "User not found! Please type in the correct login details.";
		header("refresh:2; url = login.html");
	}
?>