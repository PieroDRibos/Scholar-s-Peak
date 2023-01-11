<?php

require 'php_config.php';

if (isset($_POST['password']) && isset($_POST['url_token'])) {

    $password = "";
    $token = "";

    $password = $_POST['password'];
    $token = $_POST['url_token'];

    $user = "";
    $email = "";

    $tokenQuery = "SELECT * FROM tokens WHERE token=? LIMIT 1";
    $stmt = $conn->prepare($tokenQuery);
    $stmt->bind_param('s', $token);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();
    $stmt->close();

    $email = $user['email'];

    //Password encryption
    $password = password_hash($password, PASSWORD_DEFAULT);

    //SQL query to get results from database
    $sql = "UPDATE users SET password=? WHERE email=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('ss', $password, $email);
    $stmt->execute();

    if($stmt->execute()) {

        //SQL query to DELETE results from database
        $sql = "DELETE FROM tokens WHERE email=?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param('s', $email);
        $stmt->execute();
        $stmt->close();

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