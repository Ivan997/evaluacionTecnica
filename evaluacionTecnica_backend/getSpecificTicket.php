<?php
    // header('Content-Type: application/json');

    $ticket         = $_REQUEST['ticket'];

    // echo $ticket;

    include 'conexion.php';
    $query      = "SELECT * FROM `sold_item` join sale join customer WHERE sale_id = $ticket AND sale.id = sale_id AND sale.customer_id = customer.id;";
    $resultado  = $mysqli->query($query);
    $sales      = array();
    $count      = 0;

    // echo '<br>'.$query.'<br>';

    // print_r($resultado);
    // echo "Orden del conjunto de resultados... <br>";
    while ($fila = $resultado->fetch_assoc()) {

        foreach ($fila as $key=>$val){
            // echo $key.' -> '.$val.'<br>';
            $sales[$key] = $val;
        }

        // $users[$count] = array(
        //     'Nombres'       => $fila['Nombres'],
        //     'Edad'          => $fila['Edad'],
        //     'Ciudad'        => $fila['Ciudad'],
        //     'Hobbie'        => $fila['Hobbie']
        // );
        $count = $count + 1;
        // echo '<br><br>count: '.$count.' <br>';
    }

    // echo json_encode($sales);
    // echo '<pre>';
    // print_r($sales);\

    $result = array(
        'result'    => 'success',
        'data'      => $sales,
    );

    echo json_encode($result);




?>