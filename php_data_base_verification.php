<?php

require 'php_config.php';

if (isset($_POST['url_token'])) {

    $url_token = $_POST['url_token'];
    $token = $url_token;

    $user = "";
    $loged_in_user = "";

    $tokenQuery = "SELECT * FROM users WHERE token=? LIMIT 1";
    $stmt = $conn->prepare($tokenQuery);
    $stmt->bind_param('s',$token);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();
    $stmt->close();

    $sql = "SELECT * FROM users WHERE token='$token' LIMIT 1";
    $result = mysqli_query($conn, $sql);

    if(mysqli_num_rows($result) > 0){
        
        $user = mysqli_fetch_Assoc($result);
        $update_query = "UPDATE users SET verified=1 WHERE token='$token'";

        if(mysqli_query($conn, $update_query)) {

            $_SESSION['id'] = $user['id'];
            $_SESSION['firstname'] = $user['firstname'];
            $_SESSION['lastname'] = $user['lastname'];
            $_SESSION['username'] = $user['username']; 
            $_SESSION['email'] = $user['email'];
            $_SESSION['verified'] = 1;

        }

    }

}

if(isset($_SESSION)) {

    $loged_in_user = json_encode($_SESSION);
    $conn->close();
    exit ($loged_in_user);

}
else {

    $conn->close();

}

?>