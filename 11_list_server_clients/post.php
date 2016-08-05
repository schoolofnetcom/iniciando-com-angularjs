<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');


$date = listAll();
echo json_encode($date);exit;

function conn(){
    $conn = new \PDO("mysql:host=localhost;dbname=test_angular","root","root");
    return $conn;
}

function listAll(){
    $db = conn();
    $query = "Select * from `client` order by `id` DESC";
    $stmt = $db->prepare($query);
    $stmt->execute();
    return $stmt->fetchAll(\PDO::FETCH_ASSOC);
}




