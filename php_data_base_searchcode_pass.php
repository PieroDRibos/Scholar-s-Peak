<?php

require 'php_config.php';

if (isset($_POST['email']) && isset($_POST['code']) && isset($_POST['name'])) {

    $email = $_POST['email'];
    $code = $_POST['code'];
    $name = $_POST['name'];

    //SQL query to get results from database
    $sql    = "INSERT INTO friendly_names (email, code, name) VALUES (?, ?, ?)";
    $stmt   = $conn->prepare($sql);
    $stmt->bind_param('sss', $email, $code, $name);

    if($stmt->execute()) {

        $res = "OK";
        $res_error = json_encode($res);
        $conn->close();
        exit ($res_error);
        
    }
    else {

        $res = "ERROR";
        $res_error = json_encode($res);
        $conn->close();
        exit ($res_error);

    }

}
else {

    $conn->close();

}

?>