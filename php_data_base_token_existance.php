<?php

require 'php_config.php';

if (isset($_POST['token'])) {

    $token = "";
    $token = $_POST['token'];

    $tokenCount = "";
    $t_error = "";
    $t_result = "";

    $tokenQuery = "SELECT * FROM users WHERE token=? LIMIT 1";
    $stmt = $conn->prepare($tokenQuery);
    $stmt->bind_param('s', $token);
    $stmt->execute();
    $result = $stmt->get_result();
    $tokenCount = $result->num_rows;
    $user = $result->fetch_assoc();
    $stmt->close();

    if ($tokenCount > 0) {
            
        $t_error = "OK";
        $t_result = json_encode($t_error);
        $conn->close();
        exit ($t_result);


    }
    else {

        $t_error = "ERROR";
        $t_result = json_encode($t_error);
        $conn->close();
        exit ($t_result);

    }

}
else {

    $conn->close();

}

?>