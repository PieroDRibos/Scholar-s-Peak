<?php

require 'php_config.php';
require_once 'php_emailtokenreset.php';

if (isset($_POST['email'])) {

    $email = "";

    $email = $_POST['email'];

    //Token generation for E-mail verification and token encryption
    $token = uniqid(md5(time()));

    //SQL query to get results from database
    $sql    = "INSERT INTO tokens (email, token) VALUES (?, ?)";
    $stmt   = $conn->prepare($sql);
    $stmt->bind_param('ss', $email, $token);

    if($stmt->execute()) {

        $res = "RESPONSE: OK";
        $res_error = json_encode($res);

        //Send reset password E-mail to the user
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