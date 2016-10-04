@extends('plantilla.layaout')
@section('content')
<script src="js/scripts/seccion.js"> </script>
<div class="panel panel-default">
  <div class="panel-heading"><button class="btn btn-primary btn-sm" type="button" onclick="agregar();">Nuevo <i class="fa fa-plus-circle"></i> </button></div>
  <div class="panel-body" id="contenido-seccion">   
    @include('configuracion.seccion.table') 
  </div>
</div>

<div class="modal fade" id="modal-seccion" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">X</span></button>
      </div>
      <div class="modal-body form"> 
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">M&oacute;dulo Secci&oacute;n</h3>
          </div>
          <div class="panel-body">
            <form class="form-horizontal" id="frmSeccion"> 
              {{ csrf_field() }}
              <input type="hidden" name="id">
              <fieldset>                    
                <div class="form-group">
                  <label class="col-lg-3 control-label">Grado Academico</label>
                  <div class="col-lg-6">
                    <select name="cmbGrado" id="cmbGrado" class="form-control">
                      <option value="default">Seleccione</option>
                      @foreach ($grados as $grado)
                      <option value="{{ $grado->idgrado }}">{{ $grado->grado }}</option>
                      @endforeach
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-lg-3 control-label">Secci&oacute;n</label>
                  <div class="col-lg-6">
                    <input type="text" class="form-control" id="txtSeccion" name="txtSeccion" placeholder="Ingrese identificador de la seccion">
                  </div>
                </div> 
                <div class="form-group">
                  <label class="col-lg-3 control-label">Capacidad</label>
                  <div class="col-lg-6">
                    <input type="text" class="form-control" id="txtCapacidad" name="txtCapacidad" placeholder="Capacidad de alumnos de la Seccion">
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