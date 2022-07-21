<?php

// get database connection
include_once 'database.php';

// instantiate user object
include_once 'user.php';

$database = new Database();
$db = $database->getConnection();

$user = new User($db);

// set user property values
$user->username = $_POST['username'];
$user->password = base64_encode($_POST['password']);
$user->created = date('Y-m-d H:i:s');

// create the user
if($user->signup()){
    include 'index.html';
}

else{
    echo '<script>alert("Username already exists")</script>';
    include 'index.html';

}

?>