<?php

use SebastianBergmann\Environment\Console;

require 'php_config.php';

session_start();

if (isset($_POST['email']) || isset($_POST['username'])) {

    $username = "";

    if (isset($_POST['email'])) {

        $username = $_POST['email'];

    }

    if (isset($_POST['username'])) {

        $username = $_POST['username'];

    }

    $user = "";
    $loged_in_user = "";

    $username_emailQuery = "SELECT * FROM users WHERE email=? OR username=? LIMIT 1";
    $stmt = $conn->prepare($username_emailQuery);
    $stmt->bind_param('ss',$username, $username);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();
    $stmt->close();

    $_SESSION['id'] = $user['id'];
    $_SESSION['firstname'] = $user['firstname'];
    $_SESSION['lastname'] = $user['lastname'];
    $_SESSION['username'] = $user['username']; 
    $_SESSION['email'] = $user['email'];
    $_SESSION['verified'] = $user['verified'];

    if(isset($_SESSION)) {

        $loged_in_user = json_encode($_SESSION);
        $conn->close();
        exit ($loged_in_user);

    }

}
else {

    $conn->close();

}

?>