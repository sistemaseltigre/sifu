@extends('plantilla.layaout')
@section('content')
<script src="js/scripts/materia.js"> </script>
<div class="panel panel-default">
  <div class="panel-heading"><button class="btn btn-primary btn-sm" type="button" onclick="agregar();">Nuevo <i class="fa fa-plus-circle"></i> </button></div>
  <div class="panel-body" id="contenido-materia">   
    @include('configuracion.materia.table') 
  </div>
</div>

<div class="modal fade" id="modal-materia" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">X</span></button>
      </div>
      <div class="modal-body form"> 
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">M&oacute;dulo Materia</h3>
          </div>
          <div class="panel-body">
            <form class="form-horizontal" id="frmMateria"> 
              {{ csrf_field() }}
              <input type="hidden" name="id">
              <fieldset>      
                <legend>Parametros de la Materia y Prelaci&oacute;n</legend>      
                <div class="form-group">
                <label class="col-lg-3 text-left">Grado Academico</label>
                  <div class="col-lg-9">
                    <select name="cmbGrado" id="cmbGrado" class="form-control">
                      <option value="default">Seleccione</option>
                      @foreach ($grados as $grado)
                      <option value="{{ $grado->idgrado }}">{{ $grado->grado }}</option>
                      @endforeach
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-lg-3  text-left">Materia</label>
                  <div class="col-lg-9">
                    <input type="text" class="form-control" id="txtMateria" name="txtMateria" placeholder="Ingrese identificador de la Materia">
                  </div>
                </div>     
                <div class="form-group">
                  <label class="col-lg-3  text-left">Horas del Curso</label>
                  <div class="col-lg-9">
                    <div class='input-group date' id='horaCurso'>
                      <input type='text' class="form-control" name="txtHoras" id="txtHoras" />
                      <span class="input-group-addon">
                        <span class="glyphicon glyphicon-time"></span>
                      </span>
                    </div>
                  </div>
                </div>   
                <div class="form-group">
                  <label class="col-lg-3 text-left">Prelaci&oacute;n</label>
                  <div class="col-lg-9">
                    <select name="cmbPrelacion" id="cmbPrelacion" class="form-control">
                      <option>Seleccione</option>                       
                    </select>
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