<?php

require 'php_config.php';

if (isset($_POST['username'])) {

    $username = $_POST['username'];

    $userCount = "";
    $n_error = "";
    $username_error = "";

    $usernameQuery = "SELECT * FROM users WHERE username=? LIMIT 1";
    $stmt = $conn->prepare($usernameQuery);
    $stmt->bind_param('s',$username);
    $stmt->execute();
    $result = $stmt->get_result();
    $userCount = $result->num_rows;
    $stmt->close();

    if ($userCount > 0) {

        $n_error = "ERROR";
        $username_error = json_encode($n_error);
        $conn->close();
        exit ($username_error);

    }
    else {

        $n_error = "OK";
        $username_error = json_encode($n_error);
        $conn->close();
        exit ($username_error);

    }

}
else {

    $conn->close();

}

?>