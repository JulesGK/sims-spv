<?php
// Open connection to the database
$db = mysqli_connect("localhost", "admin", "password", "admin");


if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    exit();
}
?>

