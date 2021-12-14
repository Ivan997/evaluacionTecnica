<?php
    $host = 'localhost';
    $user = 'root';
    $pass = '';
    $db   = 'evaluacion_tecnica';

    $mysqli = new mysqli("localhost", $user, $pass, $db);
    if ($mysqli->connect_errno) {
        echo "Fallo al conectar a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
    }
    // echo $mysqli->host_info . "<br>";
?>