<?php

require 'php_config.php';

if (isset($_POST['email'])) {

    $email = $_POST['email'];

    $emailCount = "";
    $name_code = "";
    $table = "";
    $final_table = array();
    $i = 0;

    $emailQuery = "SELECT * FROM friendly_names WHERE email=?";
    $stmt = $conn->prepare($emailQuery);
    $stmt->bind_param('s',$email);
    $stmt->execute();
    $result = $stmt->get_result();
    $emailCount = $result->num_rows;
    $name_code = $result->fetch_all();
    $stmt->close();

    if ($emailCount > 0) {

        while ($i != $emailCount) {

            $table = $name_code[$i];
            $final_table[$i] = $table[3] . ":" . $table[2];

            $i = $i + 1;

            if (isset($final_table) && $i == $emailCount) {

                $name_code = json_encode($final_table);
                $conn->close();
                exit ($name_code);
    
            }   
            
        }

    }
    else {

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