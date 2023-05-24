<?php

//cek post
if (!$_SERVER["REQUEST_METHOD"] == "POST") {
    header("location: index.html");
exit();
} elseif (isset($_POST['cancel'])){
    header("location: index.html");
    exit();
}

//koneksi ke db
$con = mysqli_connect("localhost","root","","db_metime");

//tampung semua var form
$nama = $_POST['suname'];
$email = $_POST['suemail'];
$password = $_POST['supass'];
$id = uniqid();

//make query
$query_str = "insert into data_user (id_user,name,email,password,authority) values ('$id', '$nama','$email','$password]','user')";

//eksekusi
$query = mysqli_query($con, $query_str);

?>