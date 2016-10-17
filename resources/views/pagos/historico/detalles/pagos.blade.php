<form class="form-horizontal" id="formulario"> 
  {{ csrf_field() }}
  <div class="col-sm-12 col-xs-12">  
  <div class="btn-group">
    <a class="btn btn-sm btn-primary" type="button" title="Imprimir"  href="{{ asset('pdf/detalles_pagos_general/'.$pagos->id) }}"><i class="fa fa-print fa-2x"></i></a>
  </div>
</div>
  <div class="col-sm-12 col-xs-12">   
   <div class="panel panel-default">
    <div class="panel-body">
     <h4 class="pull-left"><b>Datos del representante</b></h4>
     <hr>
     <div class="row">
      <div class="col-sm-4">
        <b>Cedula</b>: {{ $pagos->alumno->representante->cedula }}
      </div>
      <div class="col-sm-4">
        <b>Nombre</b>: {{ $pagos->alumno->representante->nombre }}
      </div>
    </div>
    <br>
    <h4 class="pull-left"><b>Datos del Alumno</b></h4>
    <hr>
    <div class="row">
      <div class="col-sm-4">
      <b>Cedula</b>: {{ $pagos->alumno->cedula }}
      </div>
      <div class="col-sm-4">
        <b>Nombres</b>:{{ $pagos->alumno->nombre }}
      </div>
      <div class="col-sm-4">
        <b>Apellidos</b>:{{ $pagos->alumno->apellido }}
      </div>
    </div>
    <br>
    <h4 class="pull-left"><b>Pago N# {{ sprintf("%08d", $pagos->id) }}</b></h4>
    <hr>
    <div class="row">
      <div class="col-sm-4">
        <b>Fecha</b>: {{ App\Fecha::getDate($pagos->fecha) }}
      </div>
      <div class="col-sm-4">
        <b>Monto Pagado</b>: {{ $pagos->monto }}
      </div>          
    </div>
    <br>
    <h4 class="pull-left"><b>Detalles del Pago</b></h4>
    <hr>
    <div class="row">
     <table class="table table-condesed" id="contenido-pago">
      <tr>
        <th>Tipo de Pago</th>
        <th>Banco</th>
        <th>Monto</th>
        <th>Referencia</th>
         <th>estatus</th>
      </tr>
      @foreach ($pagos->detalles as $detalle)
       <tr>
         <td>{{ $detalle->tipo }}</td>
         @if($detalle->banco=='N/A')
         <td>{{ $detalle->banco }}</td>
         @else
          <td>{{ $detalle->bancos->banco}}</td>
         @endif
         <td>{{ $detalle->monto }}</td>
         <td>{{ $detalle->referencia }}</td>
         <td>{{ $detalle->estatus }}</td>
       </tr>
      @endforeach
    </table>
  </div>
</div>
</div>
</div>
</form> 