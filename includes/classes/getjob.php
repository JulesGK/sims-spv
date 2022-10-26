<?php

include("jobs.class.php"); ?>


<?php
function fetch_data(){
    global $db;
    $query= "SELECT * FROM occupation ORDER BY work_id DESC";
    $exec = mysqli_query($db,$query);
    if (mysqli_num_rows($exec) <= 0) {
        return $row = ['salary'];
    }
    else {
        return mysqli_fetch_all($exec, MYSQLI_ASSOC);
    }
}

/*
$fetchData = fetch_data();
show_data($fetchData);
function show_data($fetchData){
    foreach ($fetchData as $data) {
        echo "<td>".$data['salary']."</td>";
    }
}
*/


?>