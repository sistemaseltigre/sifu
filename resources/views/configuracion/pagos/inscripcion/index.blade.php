@extends('plantilla.layaout')
@section('content')
<script src="js/scripts/monto_inscripcion.js"> </script>
<div class="panel panel-default">
  <div class="panel-heading"><button class="btn  btn-primary btn-sm" type="button" onclick="agregar();">Nuevo <i class="fa fa-plus-circle"></i> </button> <span class="pull-right" style="color:red">Periodo Activo:<strong>{{ $periodo->periodo }}</strong></span></div>
  <div class="panel-body" id="contenido-monto-inscripcion">   
    @include('configuracion.pagos.inscripcion.table') 
  </div>
</div>

<div class="modal fade" id="modal" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">X</span></button>
      </div>
      <div class="modal-body form"> 
        <div class="panel panel-primary">
          <div class="panel-heading">
          <h3 class="panel-title">configurar monto de inscripción</h3>
          </div>
          <div class="panel-body">
            <form class="form-horizontal" id="formulario"> 
              {{ csrf_field() }}
              <input type="hidden" name="periodo_id" value="{{ $periodo->idperiodo }}">
              <input type="hidden" name="id">
              <fieldset>                    
                <div class="form-group">
                  <label class="col-lg-3 control-label">Inscripción</label>
                  <div class="col-lg-6">
                   <input type="number" class="form-control" id="txtInscripcion" name="txtInscripcion" placeholder="Monto de la Inscripcion">
                 </div>
               </div>     
              <div class="form-group">
                <label class="col-lg-3 control-label">Seguro</label>
                <div class="col-lg-6">
                  <input type="number" class="form-control" id="txtSeguro" name="txtSeguro" placeholder="Seguro Estudiantil">
                </div>
              </div> 
              <div class="form-group">
                <label class="col-lg-3 control-label">Otro</label>
                <div class="col-lg-6">
                  <input type="number" class="form-control" id="txtOtro" name="txtOtro" placeholder="Otro pago relacionado a inscripción">
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