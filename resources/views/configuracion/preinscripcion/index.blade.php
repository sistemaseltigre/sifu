@extends('plantilla.layaout')
@section('content')
<script src="js/scripts/grado.js"> </script>

<ul class="nav nav-tabs">
  <li class="active"><a href="#pendientes" data-toggle="tab">Alumnos Pendientes</a></li>
  <li><a href="#inscrito" data-toggle="tab">Alumnos Inscritos</a></li>
</ul>
<div id="myTabContent" class="tab-content">
  <div class="tab-pane fade active in" id="pendientes">
    <div class="panel panel-default">
      <div class="panel-heading"></div>
      <div class="panel-body" id="contenido-pendiente">   
        @include('configuracion.preinscripcion.pendiente')
      </div>
    </div>
  </div>
  <div class="tab-pane fade" id="inscrito">
    <div class="panel panel-default">
      <div class="panel-heading"></div>
      <div class="panel-body" id="contenido-pendiente">   
        @include('configuracion.preinscripcion.inscrito')
      </div>
    </div>
  </div>
</div>

<script type="text/javascript">
 $(document).ready(function(){
  $('#table-inscrito').DataTable();
  $('#table-pendiente').DataTable();
});
</script>   



@stop