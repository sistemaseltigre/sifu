<style>
  body {font-family: Arial, Helvetica, sans-serif;}

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
    .cabecera th {     font-size: 13px;     font-weight: normal;     padding: 3px; 
      border-top: 1px solid #cecece;    border-bottom: 1px solid #cecece; color: #000000; text-align: justify; }
    </style>

    <table id="cabecera" class="cabecera">
     <thead>
       <tr>
         <th rowspan="2"><img src="{{ asset('logos/'.Session::get('imagen')) }}"></th>
         <th><b>Colegio</b> {{  Session::get('colegio') }}</th>
         <th><b>Código:</b> {{ $colegio->codigo }} </th>
       </tr>
       <tr>
         <th><b>Teléfono:</b> {{ $colegio->telefono }}</th>
         <th><b>Teléfono Opcional:</b> {{ $colegio->telefono1 }}</th>
       </tr>
       <tr>
         <th colspan="3"><b>Dirección:</b> {{ $colegio->direccion }}</th>
       </tr>
     </thead>
   </table>
   <table id="detalles" class="table table-striped jambo_table table-condensed">
     <thead>
       <tr>
         <th colspan="2">Datos Del Alumno</th>
         <th colspan="3">Información de Pago</th>
       </tr>
       <tr>
         <th class="col-sm-2">Cedula</th>
         <th class="col-sm-2">Nombre</th>
         <th class="col-sm-2">Pago N#</th>
         <th class="col-sm-2">Fecha</th>
         <th class="col-sm-2">Monto</th>
       </tr>
     </thead>
     <tbody id="contenido">   
       @foreach ($pagos as $pago)
       <tr>
         <td>{{ $pago->alumno->cedula }}</td>
         <td>{{ $pago->alumno->nombre }}</td>
         <td>{{ sprintf('%08d',$pago->id) }}</td>
         <td>{{ App\fecha::getDate($pago->fecha) }}</td>
         <td>{{ $pago->monto }}</td>
       </tr>
       @endforeach 
     </tbody>
   </table>