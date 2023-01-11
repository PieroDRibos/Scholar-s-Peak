<?php

require 'php_config.php';

if (isset($_POST['email']) || isset($_POST['username'])) {

    $username = "";
    $password = "";

    if (isset($_POST['email'])) {

        $username = $_POST['email'];

    }

    if (isset($_POST['username'])) {

        $username = $_POST['username'];

    }

    if (isset($_POST['password'])) {

        $password = $_POST['password'];

    }

    $userCount = "";
    $n_e_error = "";
    $username_email_error = "";

    $username_emailQuery = "SELECT * FROM users WHERE email=? OR username=? LIMIT 1";
    $stmt = $conn->prepare($username_emailQuery);
    $stmt->bind_param('ss', $username, $username);
    $stmt->execute();
    $result = $stmt->get_result();
    $userCount = $result->num_rows;
    $user = $result->fetch_assoc();
    $stmt->close();

    if ($userCount > 0) {

        if(password_verify($password, $user['password'])) {
            
            $n_e_error = "OK";
            $username_email_error = json_encode($n_e_error);
            $conn->close();
            exit ($username_email_error);

        }
        else {

            $n_e_error = "OK_ERROR";
            $username_email_error = json_encode($n_e_error);
            $conn->close();
            exit ($username_email_error);

        }

    }
    else {

        $n_e_error = "ERROR";
        $username_email_error = json_encode($n_e_error);
        $conn->close();
        exit ($username_email_error);

    }

}
else {

    $conn->close();

}

?>