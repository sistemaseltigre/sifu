@extends('plantilla.layaout')
@section('content')
<script src="{{ asset('/js/scripts/periodo.js') }}"> </script>
<div class="panel panel-default">
  <div class="panel-heading"><button class="btn btn-primary btn-sm" type="button" onclick="agregar();">Nuevo <i class="fa fa-plus-circle"></i> </button></div>
  <div class="panel-body" id="lista">   
    @include('configuracion.periodo.table')    

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
            <h3 class="panel-title">Periodo Academico</h3>
          </div>
          <div class="panel-body">
            <form class="form-horizontal" id="formulario"> 
              {{ csrf_field() }}
              <input type="hidden" name="id">
              <fieldset>  
                <div class="col-xs-6">                  
                  <div class="form-group">
                    <label class="col-lg-3 control-label pill-left">Desde</label>
                    <div class="col-lg-8">
                      <div class='input-group date' id='desde'>
                      <input type='text' class="form-control" name="txtDesde" id="txtDesde" />
                        <span class="input-group-addon">
                          <span class="fa fa-calendar"></span>
                        </span>
                      </div>
                    </div>
                  </div>   
                </div>
                <div class="col-xs-6">
                  <div class="form-group">
                    <label class="col-lg-3 control-label pill-left">Desde</label>
                    <div class="col-lg-8">
                      <div class='input-group date' id='hasta'>
                        <input type='text' class="form-control" name="txtHasta" id="txtHasta" />
                        <span class="input-group-addon">
                          <span class="fa fa-calendar"></span>
                        </span>
                      </div>
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