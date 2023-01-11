<?php

require 'php_config_constants.php';

$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

if ($conn->connect_error) {
    die('Database errors:' . $conn->connect_error);
}

?>