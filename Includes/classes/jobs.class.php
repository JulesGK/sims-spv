<?php
// Open connection to the database
//$db = mysqli_connect("localhost", "admin", "password", "admin");
$db= mysqli_connect("studentmysql.miun.se", "arkh2000", "qc18cg6j", "arkh2000");

if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    exit();
}

?>