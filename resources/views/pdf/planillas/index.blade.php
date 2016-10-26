 <!DOCTYPE html>
 <html lang="en">
 <head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <!-- Meta, title, CSS, favicons, etc. -->
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    .header,
    .footer {
      width: 100%;
      text-align: center;
      position: fixed;
    }
    .header {
      top: 10px;
    }
    .footer {
      bottom: 250px;
    }
    .pagenum:before {
      content: counter(page);
    }
    h3{
     font-size: 22px;
   }
   html {
    margin: 20mm;
  }

</style>
</head>
<body>
 <?php $resultado = $planillas->contenido;
    $resultado = str_replace("var_cedula", $alumno->cedula, $resultado);
    $resultado = str_replace("var_nombres", $alumno->nombre, $resultado);
    $resultado = str_replace("var_apellidos", $alumno->apellido, $resultado);
    $resultado = str_replace("var_grado", $alumno->grado->grado, $resultado);
    $resultado = str_replace("var_seccion", $seccion->seccion->seccion, $resultado);
    $resultado = str_replace("var_periodo", $periodo->periodo, $resultado);

    ?>
      {!! $resultado !!}
</body>
</html>