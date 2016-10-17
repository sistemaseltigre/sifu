<!--carga las cuotas que debe el alumno -->
<div class="col-sm-8 col-xs-12 col-sm-offset-2">  
  <div class="btn-group">
    <a class="btn btn-sm btn-primary" type="button" title="Imprimir"  href="{{ asset('pdf/pagos_general/'.$alumno->idalumno) }}"><i class="fa fa-print fa-2x"></i></a>
    <button class="btn btn-sm btn-success" type="button" title="Detalles de Mensualidad" onclick="detalles_mensualidad()"><i class="fa fa-search fa-2x"></i></button>
  </div>
</div>
<form class="form-horizontal" id="formulario"> 
  {{ csrf_field() }}
  <div class="col-sm-8 col-xs-12 col-sm-offset-2">   
   <div class="panel panel-default">
    <div class="panel-body">
     <h4 class="pull-left"><b>Datos del representante</b></h4>
     <hr>
     <div class="row">
      <div class="col-sm-4">
        <b>Cedula</b>: {{ $alumno->representante->cedula }}
      </div>
      <div class="col-sm-4">
        <b>Nombre</b>: {{ $alumno->representante->nombre }}
      </div>
    </div>
    <br>
    <h4 class="pull-left"><b>Datos del Alumno</b></h4>
    <hr>
    <div class="row">
      <div class="col-sm-4">
        <b>Cedula</b>: {{ $alumno->cedula }}
      </div>
      <div class="col-sm-4">
        <b>Nombres</b>:{{ $alumno->nombre }}
      </div>
      <div class="col-sm-4">
        <b>Apellidos</b>:{{ $alumno->apellido }}
      </div>
    </div>
    <hr>
    <div class="row">
     <table class="table table-condesed" id="contenido-pago">
       <thead>
        <tr>
          <th>N# pago</th>
          <th>Fecha de Pago</th>
          <th>Monto</th>
          <th>Opcion</th>
        </tr>      
      </thead>
      <tbody>
        @foreach ($pagos as $pago)
        <tr>
         <td>{{ sprintf("%08d", $pago->id) }}</td>
         <td>{{ App\Fecha::getDate($pago->fecha) }}</td>
         <td>{{ $pago->monto }}</td>
         <td> <button class="btn btn-sm btn-success" type="button" title="Detalles de pago"><i class="fa fa-search" id="btnDetallesPagos" onclick="detalles_pagos('{{ $pago->id }}');" value="{{ $pago->id }}"> Detalles</i></button></td>
       </tr>
       @endforeach
     </tbody>
   </table>
 </div>
</div>
</div>
</div>
</form>

<script type="text/javascript">
 $(document).ready(function(){
  $('#contenido-pago').DataTable({
    "searching": false,
    "lengthChange": false
  });
});
</script>
<div class="modal fade" id="modal" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">X</span></button>
      </div>
      <div class="modal-body form"> 
        <div id="contenido-detalles">

        </div>
      </div>

      <div class="modal-footer">

      </div>
    </div>
  </div>
</div>


<div class="modal fade" id="modal-mensualidad" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">X</span></button>
      </div>
      <div class="modal-body form"> 
       <form class="form-horizontal" id="formulario"> 
        {{ csrf_field() }}
        <div class="col-sm-12 col-xs-12">  
          <div class="btn-group">
            <a class="btn btn-sm btn-primary" type="button" title="Imprimir"  href="{{ asset('pdf/mensualidad/'.$alumno->idalumno) }}"><i class="fa fa-print fa-2x"></i></a>
          </div>
        </div>
        <div class="col-sm-12 col-xs-12">   
         <div class="panel panel-default">
          <div class="panel-body">
           <h4 class="pull-left"><b>Datos del representante</b></h4>
           <hr>
           <div class="row">
            <div class="col-sm-4">
              <b>Cedula</b>: {{ $alumno->representante->cedula }}
            </div>
            <div class="col-sm-4">
              <b>Nombre</b>:{{ $alumno->representante->nombre }}
            </div>
          </div>
          <br>
          <h4 class="pull-left"><b>Datos del Alumno</b></h4>
          <hr>
          <div class="row">
            <div class="col-sm-4">
              <b>Cedula</b>: {{ $alumno->cedula }}
            </div>
            <div class="col-sm-4">
              <b>Nombres</b>:{{ $alumno->nombre }}
            </div>
            <div class="col-sm-4">
              <b>Apellidos</b>:{{ $alumno->apellido }}
            </div>
          </div>
          <br>
          <h4 class="pull-left"><b>Detalles de Mensualidades</b></h4>
          <hr>
          <div class="row">
            <table class="table table-condesed" id="contenido-mensualidad">
              <tr>
                <th>Fecha</th>
                <th>Monto</th>
                <th>estatus</th>
              </tr>
              <tbody>
               @foreach ($cuotas as $cuota)
               <tr>
                <td>{{ App\Fecha::getDate($cuota->detalles->fecha) }}</td>
                <td>{{ $cuota->detalles->monto }}</td>
                <td>{{ $cuota->estatus }}</td>             
              </tr>
              @endforeach
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</form> 
</div>

<div class="modal-footer">

</div>
</div>
</div>
</div>
