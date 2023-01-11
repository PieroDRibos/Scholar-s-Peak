<?php

require 'php_config.php';

if (isset($_POST['code']) && isset($_POST['email'])) {

    $code = $_POST['code'];
    $email = $_POST['email'];

    $codeCount = "";
    $name_code = "";
    $c_error = "";
    $code_error = "";
    $i = 0;
    $j = 0;

    $codeQuery = "SELECT * FROM friendly_names WHERE code=?";
    $stmt = $conn->prepare($codeQuery);
    $stmt->bind_param('s',$code);
    $stmt->execute();
    $result = $stmt->get_result();
    $codeCount = $result->num_rows;
    $name_code = $result->fetch_all();
    $stmt->close();

    if ($codeCount > 0) {

        while ($i != $codeCount) {

            $email_check = $name_code[$i];

            if ($i != 0) {

                $j = $j + 1;

            }
            
            if ($email == $email_check[1]) {

                $c_error = "ERROR";
                $code_error = json_encode($c_error);
                $conn->close();
                exit ($code_error);

            }
            elseif ($j == $codeCount) {

                $c_error = "OK";
                $code_error = json_encode($c_error);
                $conn->close();
                exit ($code_error);

            }
            elseif ($codeCount == 1) {

                $c_error = "OK";
                $code_error = json_encode($c_error);
                $conn->close();
                exit ($code_error);

            }

            $i = $i + 1;

        }

    }
    else {

        $c_error = "OK";
        $code_error = json_encode($c_error);
        $conn->close();
        exit ($code_error);

    }

}
else {

    $conn->close();

}

?>