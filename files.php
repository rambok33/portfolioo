<?php
  $name = $_POST['name'];
  $email = $_POST['email'];

  $text = $_POST['text'];
  $textarea = $_POST['textarea'];

   $conn = new mysql('localhost','root','','test1');
   if($conn->connect_error){
    die('Connection Failed : ' .$conn->connect_error);
   }else{

    $stmt = $conn->prepare("insert into Registration(name, email, text, textarea) values(?,?,?,?)") ;
    $stmt->bind_param("ssss",$name,$email,$text,$textarea);
    $stmt->execute();
    echo "Registration Succcessfully";
    $stmt->close();
    $conn->close();
  }
?>