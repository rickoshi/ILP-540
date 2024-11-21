<?php
    $host = "localhost";
    $user = "root";
    $pass = "";

    $db = "banco_form";
    $tb = "tabela_form";

    try {             
       $conx = new PDO("mysql:host=$host;dbname=$db", $user, $pass);  
       $conx->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); 
       echo "Conexão ok!<br>"; 
    }
    catch(PDOException $e) {
       echo "Falha na conexão com o DB:<br />" . $e->getMessage();
    }  
?>
