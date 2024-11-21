<?php

 include('header.php');

 require('conectar.php');

 try {
    $sel = "SELECT nome, email, id_cliente FROM $db.$tb ORDER BY nome desc";
      
    $result = $conx->query($sel);
      
    // BUSQUE E IMPRIMA TODOS OS DADOS como lista, tabela etc.
     
    echo "<h2>Relação de Clientes</h2>"; 
     
    while($linha = $result->fetch(PDO::FETCH_ASSOC)){
          
    // Montagem da linha de impressão com Array e Operador ponto (.).
          
       echo "<p><b>Cliente: </b>" 
            . $linha['id_cliente'] . " - "
            . $linha['nome'] . " - "
            . $linha['email']
            . "</p>"; 
     }
     
 } 
 catch(PDOException $e) {
      echo "<div>Impressão não realizada...</div>";
 }
 //echo "<p><a href='javascript:history.back()'>Voltar</a></p>";
 echo "<p><button onclick='javascript:history.back()'>Voltar</button>";

 include('footer.php');

?>
     