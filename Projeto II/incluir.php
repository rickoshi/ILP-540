<?php

 if(isset($_POST) & !empty($_POST)){

    extract($_POST);     

    $data = filter_input_array(INPUT_GET, [
        'user2' => FILTER_SANITIZE_STRING,
        'email2' => FILTER_SANITIZE_EMAIL,
    ]);  
    extract($data); 
    echo "Oi $nome2, seu email é $email2.<br/>";
 

     
    require("conectar.php"); 

    // USE PLACEHOLDERS no lugar das variáveis $nome e $email! 
   
    try {             
       $incl = "INSERT INTO $db.$tb (nome, email) VALUES ('$nome', '$email')";

       $res = $conx->prepare($incl);

       // USE PLACEHOLDERS e BINDPARAM() aqui para proteger os dados...  

       $res->execute(); 

       // Volta para o formulário...   
 
       header("Location: ./formulario.php");        
     }
     catch(PDOException $e) {   

       echo "<div>Inclusão não realizada...</div>";  

       // Usar Session para enviar a mensagem à página inicial. 
         
       header("Location: ./formulario.php");      
     } 
 } 
     
 $conx = null;

?>
    