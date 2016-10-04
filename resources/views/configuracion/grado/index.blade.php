@extends('plantilla.layaout')
@section('content')
<script src="js/scripts/grado.js"> </script>
<div class="panel panel-default">
<div class="panel-heading"><button class="btn btn-primary btn-sm" type="button" onclick="agregar();">Nuevo <i class="fa fa-plus-circle"></i> </button> <span class="pull-right" style="color:red"> <b>Periodo Activo: {{ $periodo }}</b></span></div>
  <div class="panel-body" id="contenido-grado">   
    @include('configuracion.grado.table') 
  </div>
</div>

<div class="modal fade" id="modal-grado" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">X</span></button>
      </div>
      <div class="modal-body form"> 
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">M&oacute;dulo grado</h3>
          </div>
          <div class="panel-body">
            <form class="form-horizontal" id="frmGrado"> 
              {{ csrf_field() }}
              <input type="hidden" name="id">
              <input type="hidden" name="periodo_id" value="{{ $periodo_id }}">
              <fieldset>                    
                <legend> Periodo Activo: {{ $periodo }}</legend>
                <div class="form-group">
                  <label class="col-lg-5 control-label">Grado Escolar</label>                  
                  <div class="col-lg-6">
                    <input type="text" class="form-control" id="txtGrado" name="txtGrado" placeholder="Ingrese identificador de el grado escolar">
                  </div>
                </div>   
                <div class="form-group">
                  <label class="col-lg-5 control-label">Grado Escolar Requerido</label>                  
                  <div class="col-lg-6">
                    <div id="gradoRequerido">
                      <select class="form-control" name="cmbGrado" id="cmbGrado">
                        <option value=''>Ninguno</option>
                        @foreach ($grados as $grado)
                        <option value='{{ $grado['idgrado'] }}'>{{ $grado['grado'] }}</option>
                        @endforeach
                      </select>
                    </div>
                  </div>
                </div>            
              </fieldset>
            </form> 
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button type="button" id="btnSave" onclick="grabar()" class="btn btn-primary btn-3d"><i class="fa fa-database"></i> Grabar</button>
        <button type="button" class="btn btn-danger btn-3d" data-dismiss="modal"><i class="fa fa-times-circle-o"></i> Cancelar</button>
      </div>
    </div>
  </div>
</div>
@stop