@extends('plantilla.layaout')
@section('content')
<script src="js/scripts/cuota.js"> </script>
<div class="panel panel-primary">
  <div class="panel-heading"><button class="btn  btn-3d btn-warning" type="button" onclick="agregar();">Nuevo <i class="fa fa-plus-circle"></i> </button> <span class="pull-right">Periodo Activo:<strong>{{ $periodo->periodo }}</strong></span></div>
  <div class="panel-body" id="contenido-cuota">   
    @include('configuracion.cuota.table') 
  </div>
</div>

<div class="modal fade" id="modal-cuota" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">X</span></button>
      </div>
      <div class="modal-body form"> 
        <div class="panel panel-primary">
          <div class="panel-heading">
          <h3 class="panel-title">Modulo Cuotas</h3>
          </div>
          <div class="panel-body">
            <form class="form-horizontal" id="frmCuota"> 
              {{ csrf_field() }}
              <input type="hidden" name="periodo_id" value="{{ $periodo->idperiodo }}">
              <input type="hidden" name="id">
              <fieldset>                    
                <div class="form-group">
                  <label class="col-lg-3 control-label">Inscripcion</label>
                  <div class="col-lg-6">
                   <input type="text" class="form-control" id="txtInscripcion" name="txtInscripcion" placeholder="Monto de la Inscripcion">
                 </div>
               </div>
               <div class="form-group">
                <label class="col-lg-3 control-label">Cuotas Mensual</label>
                <div class="col-lg-6">
                  <input type="text" class="form-control" id="txtCuota" name="txtCuota" placeholder="Cuota de la Mensualidad">
                </div>
              </div>     .
              <div class="form-group">
                <label class="col-lg-3 control-label">Seguro</label>
                <div class="col-lg-6">
                  <input type="text" class="form-control" id="txtSeguro" name="txtSeguro" placeholder="Seguro Estudiantil">
                </div>
              </div> 
              <div class="form-group">
                <label class="col-lg-3 control-label">Otro</label>
                <div class="col-lg-6">
                  <input type="text" class="form-control" id="txtOtro" name="txtOtro" placeholder="Otro pago">
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