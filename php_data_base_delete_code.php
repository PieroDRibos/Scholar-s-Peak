<?php

require 'php_config.php';

if (isset($_POST['email']) && isset($_POST['code'])) {

    $email = $_POST['email'];
    $code = $_POST['code'];

    $userCount = "";
    $e_error = "";
    $email_error = "";
    $counter = 0;

    $emailQuery = "DELETE FROM friendly_names WHERE email=? AND code=? LIMIT 1";
    $stmt = $conn->prepare($emailQuery);
    $stmt->bind_param('ss', $email, $code);
    $stmt->execute();
    $result = $stmt->get_result();
    $stmt->close();

    $emailQuery = "SELECT * FROM friendly_names WHERE email=? AND code=? LIMIT 1";
    $stmt = $conn->prepare($emailQuery);
    $stmt->bind_param('ss', $email, $code);
    $stmt->execute();
    $result = $stmt->get_result();
    $userCount = $result->num_rows;
    $stmt->close();

    if ($userCount > 0) {

        $e_error = "ERROR";
        $email_error = json_encode($e_error);

    }
    else {

        $counter = $counter + 1;

        $e_error = "OK";
        $email_error = json_encode($e_error);

    }

    if ($counter == 1) {

        $conn->close();
        exit ($email_error);

    }else {

        $e_error = "ERROR";
        $email_error = json_encode($e_error);
        $conn->close();
        exit ($email_error);

    }

}
else {

    $conn->close();

}

?>