<?php

require 'php_config.php';

if (isset($_POST['email'])) {

    $email = $_POST['email'];

    $userCount = "";
    $e_error = "";
    $email_error = "";

    $emailQuery = "SELECT * FROM users WHERE email=? LIMIT 1";
    $stmt = $conn->prepare($emailQuery);
    $stmt->bind_param('s',$email);
    $stmt->execute();
    $result = $stmt->get_result();
    $userCount = $result->num_rows;
    $stmt->close();

    if ($userCount > 0) {

        $e_error = "ERROR";
        $email_error = json_encode($e_error);
        $conn->close();
        exit ($email_error);

    }
    else {

        $e_error = "OK";
        $email_error = json_encode($e_error);
        $conn->close();
        exit ($email_error);

    }

}
else {

    $conn->close();

}

?>