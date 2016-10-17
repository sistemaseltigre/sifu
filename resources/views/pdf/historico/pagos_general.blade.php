<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <!-- Meta, title, CSS, favicons, etc. -->
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    html {
      margin: 0;
    }

    body {font-family: Arial, Helvetica, sans-serif;
      margin: 25mm 8mm 2mm 8mm;
    }

    .table {     font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
    font-size: 12px;    margin: 45px;     width:100%; text-align: left;    border-collapse: collapse; }

    .table th {     font-size: 13px;     font-weight: normal;     padding: 8px;     background: #011246;
      border-top: 4px solid #cecece;    border-bottom: 1px solid #cecece; color: #ffffff; }

      .table tr:nth-child(odd) {background-color: #EFFBEF;}

      .table tr:nth-child(even) {background-color: #FAFAFA;}
      img{
        width: 100px;
        height: 100px;
        position: relative;
        margin-left: 60px;
      }
      span{
        font-size: 19px;
        float:left;
        margin-left: 110px;
        position: relative;

      }
      h3{
        text-align: center;
      }
      .cabecera {     font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
      font-size: 12px;    margin: 15px;     width:100%; text-align: left;    border-collapse: collapse; }
      .cabecera th {     font-size: 13px;     font-weight: normal;     padding: 5px;      color: #000000; text-align: justify; }
      #border{
        border:1px solid #cecece;
        border-radius: 0.5em;
      }
    </style>

  </head>
  <body>
   <div id="border">
    <table id="cabecera" class="cabecera">
     <thead>
       <tr>
         <th colspan="3" style="font-size:17px: color: #011246"><b>Datos del Representante</b></th>
       </tr>
       <tr>
         <th><b>Cédula:</b> {{ $alumno->representante->cedula }} </th>
         <th colspan="2"><b>Nombre:</b> {{ $alumno->representante->nombre }} </th>
       </tr>
       <tr>
         <th colspan="3" style="padding-top: 30px; font-size:17px: color: #011246"><b>Datos del Alumno</b></th>
       </tr>
       <tr>
         <th><b>Cédula:</b> {{ $alumno->cedula }} </th>
         <th><b>Nombres:</b> {{ $alumno->nombre }} </th>
         <th><b>Apellidos:</b> {{ $alumno->apellido }} </th>
       </tr>
     </thead>
   </table>

   <table class="table table-condesed" id="contenido-pago">
     <thead>
      <tr>
        <th>N# pago</th>
        <th>Fecha de Pago</th>
        <th>Monto</th>
      </tr>      
    </thead>
    <tbody>
      @foreach ($pagos as $pago)
      <tr>
       <td>{{ sprintf("%08d", $pago->id) }}</td>
       <td>{{ App\Fecha::getDate($pago->fecha) }}</td>
       <td>{{ $pago->monto }}</td>
     </tr>
     @endforeach
   </tbody>
 </table>
</div>
</body>
</html>