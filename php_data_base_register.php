<?php

require 'php_config.php';
require_once 'php_emailtoken.php';

if (isset($_POST['firstname']) || isset($_POST['lastname']) || isset($_POST['username']) || isset($_POST['email']) || isset($_POST['password'])) {

	/* Get data from Client side using $_POST array */
	$firstname = $_POST['firstname'];
	$lastname = $_POST['lastname'];
	$username = $_POST['username'];
	$email = $_POST['email'];
	$password = $_POST['password'];

	//Password encryption
	$password = password_hash($password, PASSWORD_DEFAULT);
	//Token generation for E-mail verification
	$token = bin2hex(random_bytes(50));
	$verified = false;

	//SQL query to get results from database
	$sql    = "INSERT INTO users (firstname, lastname, username, email, verified, token, password) VALUES (?, ?, ?, ?, ?, ?, ?)";
	$stmt   = $conn->prepare($sql);
	$stmt->bind_param('ssssiss', $firstname, $lastname, $username, $email, $verified, $token, $password);

	if($stmt->execute()) {

		$res = "RESPONSE: OK";
		$res_error = json_encode($res);

		//Send verification E-mail to the user
		sendVerificationEmail($email, $token);
		$conn->close();
		exit ($res_error);
		
	}
	else {

		$res = "RESPONSE: ERROR";
		$res_error = json_encode($res);
		$conn->close();
		exit ($res_error);

	}

}
else {

    $conn->close();

}

?>