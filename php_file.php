<?php

if (isset($_REQUEST['user'])) {
    
    $command = escapeshellcmd('python3 citations.py ' . $_REQUEST["user"]);
    $output = shell_exec($command);
    exit ($output);

}

?>