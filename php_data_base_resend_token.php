<?php

require 'php_config.php';
require_once 'php_emailtoken.php';

$email = "";

/* Get data from Client side using $_POST array */
if (isset($_POST['email'])) {

    $email = $_POST['email'];
    $user = "";

    $emailQuery = "SELECT * FROM users WHERE email=? LIMIT 1";
    $stmt = $conn->prepare($emailQuery);
    $stmt->bind_param('s',$email);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();
    $stmt->close();

    $sql = "SELECT * FROM users WHERE email='$email' LIMIT 1";
    $result = mysqli_query($conn, $sql);

    if(mysqli_num_rows($result) > 0){

        $res = "RESPONSE: OK";
        $res_error = json_encode($res);
        
        $user = mysqli_fetch_Assoc($result);

        $token = "";

        $token = $user['token'];

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