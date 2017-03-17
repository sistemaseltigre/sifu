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
    margin: 10mm;
  }

</style>
</head>
<body>
 <?php $resultado = $planillas->contenido;
 if(Session::get('imagen'))
 {
  $logo=asset('/logos/'.Session::get('imagen'));
}
else
{
  $logo=asset('/img/logo.png');
}
$resultado = str_replace("var_logo", "<img src=\"$logo\" style=\"width:100px; height:100px\"> ", $resultado);
$resultado = str_replace("var_logo", "<img src=\"$logo\" style=\"width:100px; height:100px\"> ", $resultado);
    //periodo
      $resultado = str_replace("var_periodo", $periodo->periodo, $resultado);
    //Alumno
      $resultado = str_replace("A_cedula", $alumno->cedula, $resultado);
      $resultado = str_replace("A_nombres", $alumno->nombre, $resultado);
      $resultado = str_replace("A_apellidos", $alumno->apellido, $resultado);
      $resultado = str_replace("A_grado", $alumno->grado->grado, $resultado);
      $resultado = str_replace("A_seccion", $seccion->seccion->seccion, $resultado);
      $resultado = str_replace("A_direccion", $alumno->direccion, $resultado);
      $resultado = str_replace("A_religion", $alumno->religion, $resultado);
      $resultado = str_replace("A_comunion", $alumno->comunion, $resultado);
      $resultado = str_replace("A_peso", $alumno->peso, $resultado);
      $resultado = str_replace("A_talla", $alumno->talla, $resultado);
      $resultado = str_replace("A_altura", $alumno->altura, $resultado);
      $resultado = str_replace("A_zapato", $alumno->zapato, $resultado);
      $resultado = str_replace("A_observacion", $alumno->observacion, $resultado);

    //representante
      $resultado = str_replace("R_cedula", $r->cedula, $resultado);
      $resultado = str_replace("R_nombres", $r->nombre, $resultado);
      $resultado = str_replace("R_profesion", $r->profesion, $resultado);
      $resultado = str_replace("R_telefonoPrincipal", $r->telefono_principal, $resultado);
      $resultado = str_replace("R_telefonoOpcional", $r->telefono_opcional, $resultado);
      $resultado = str_replace("R_email", $r->email, $resultado);
      $resultado = str_replace("R_direccion", $r->direccion, $resultado);

//representante
      $resultado = str_replace("D_cedula", $d->cedula, $resultado);
      $resultado = str_replace("D_nombres", $d->nombre, $resultado);
      $resultado = str_replace("D_parentesco", $d->parentesco, $resultado);
      $resultado = str_replace("D_telefonoPrincipal", $d->telefono_principal, $resultado);
      $resultado = str_replace("D_telefonoOpcional", $d->telefono_opcional, $resultado);
      $resultado = str_replace("D_email", $d->email, $resultado);
      $resultado = str_replace("D_direccion", $d->direccion, $resultado);

?>
{!! $resultado !!}
</body>
</html>