<?php

require 'php_config.php';

if (isset($_POST['email'])) {

    $email = $_POST['email'];

    $userCount = "";
    $e_error = "";
    $email_error = "";

    /* We wrote these in XAMPP - Data Base - Structure section and executed them in oerder the code below to work!*/
    /* ALTER TABLE friendly_names ADD CONSTRAINT friendly_names.id FOREIGN KEY (email) REFERENCES users (email) ON DELETE CASCADE; */
    /* ALTER TABLE tokens ADD CONSTRAINT tokens.id FOREIGN KEY (email) REFERENCES users (email) ON DELETE CASCADE; */

    $emailQuery = "DELETE FROM users WHERE email=?";
    $stmt = $conn->prepare($emailQuery);
    $stmt->bind_param('s', $email);
    $stmt->execute();
    $result = $stmt->get_result();
    $stmt->close();

    $emailQuery = "SELECT * FROM users WHERE email=?";
    $stmt = $conn->prepare($emailQuery);
    $stmt->bind_param('s', $email);
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