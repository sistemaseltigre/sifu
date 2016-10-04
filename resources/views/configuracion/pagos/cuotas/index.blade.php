@extends('plantilla.layaout')
@section('content')
<script src="js/scripts/cuotas.js"> </script>
<div class="panel panel-default" id="nueva-cuota">
  <div class="panel-heading"><button class="btn  btn-primary btn-sm" type="button" id="btnNuevo">Crear Metodos de Pagos <i class="fa fa-plus-circle"></i> </button> <span class="pull-right" style="color:red">Periodo Activo:<strong>{{ $periodo->periodo }}</strong></span></div>
  <div class="panel-body">
  <input type="hidden" name="periodo_id" id="periodo_id" value="{{ $periodo->idperiodo }}"> 
  <input type="hidden" name="periodo" id="periodo" value="{{ $periodo->periodo }}">    
    @include('configuracion.pagos.cuotas.table') 
  </div>
</div>

@stop