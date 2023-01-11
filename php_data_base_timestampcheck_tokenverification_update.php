<?php

require 'php_config.php';

$dataQuery = "DELETE FROM users WHERE timestamp <= CURRENT_DATE - INTERVAL 3 DAY AND verified=0";
$stmt = $conn->prepare($dataQuery);
$stmt->execute();
$stmt->close();

$dataQuery = "DELETE FROM tokens WHERE timestamp <= CURRENT_DATE - INTERVAL 3 DAY";
$stmt = $conn->prepare($dataQuery);
$stmt->execute();
$stmt->close();

$tokenVerificationUpdate = "UPDATE users SET token='-' WHERE verified=1";
$stmt = $conn->prepare($tokenVerificationUpdate);
$stmt->execute();
$stmt->close();

$conn->close();

?>