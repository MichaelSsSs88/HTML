<?php
include("config.php");

    function conexionMySql() {
        $conectar = mysqli_connect(SERVER, USER, PASS, BD);
        if(!$conectar){//para saber si es verdadero
            echo "No se pudo conectar a la base de datos" .mysqli_connect_error();

        }
        else{
                echo "Conexion exitosa" ;
        }

        mysqli_set_charset($conectar, "utf8");
        return $conectar;
    }
        
    conexionMySql();
?>