<style>
  body {font-family: Arial, Helvetica, sans-serif;}

  .table {     font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
  font-size: 12px;    margin: 15px;     width:100%; text-align: left;    border-collapse: collapse; }

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
   <h4>Metodo Seleccionado >> {{ $metodo->descripcion }}</h4>
 <div class="table-responsive">
 <table id="datatables" class="table table-striped jambo_table table-condensed">
   <thead>
    <tr>
     <th class="col-sm-1">Cédula</th>
     <th class="col-sm-2">Nombre</th>
     <th class="col-sm-2">Apellido</th>
     <th class="col-sm-1">Grado</th>
     <th class="col-sm-1">Monto Pagado</th>
   </tr>
 </thead>
 <tbody id="contenido">   
   @if(isset($alumnos))
   <?php $total=0;?>
   @foreach ($alumnos as $alumno)
   <tr>
     <td>{{ $alumno->alumno->cedula }}</td>
     <td>{{ $alumno->alumno->nombre }}</td>
     <td>{{ $alumno->alumno->apellido }}</td>
     <td>{{ $alumno->alumno->grado->grado }}</td>
     @foreach ($alumno->pagos as $pago)
     @foreach ($pago->detalles as $detalle)
     @if($detalle->estatus=='procesado')
     <?php $total+= $detalle->monto; ?>
     @endif
     @endforeach     
     @endforeach
     <td>{{ $total }}</td>
   </tr>
   @endforeach    
   @endif  
 </tbody>
</table>
</div>