@extends('plantilla.layaout')
@section('content')
<script src="{{ asset('js/scripts/config_materias.js') }}"> </script>
<div class="panel panel-default">
  <div class="panel-heading"><b>Configurar Materias</b></div>
  <div class="panel-body" id="contenido-materia">   
    @include('profesor.materias.table') 
  </div>
  @if(isset($listas))
  <div class="panel-body" id="listas">   
    @include('profesor.materias.lista') 
  </div>
  @endif
</div>

<div class="modal fade" id="config" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">X</span></button>
      </div>
      <div class="modal-body form"> 
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">Configuración de Materias</h3>
          </div>
          <div class="panel-body">
            <form class="form-horizontal" id="frmConfig"> 
              {{ csrf_field() }}
              <input type="hidden" name="id">
              <fieldset>                    
                <div class="form-group">
                  <label class="col-lg-5 control-label">Ponderacion:</label>                  
                  <div class="col-lg-6">
                    <select class="form-control" name="cmbPonderacion" id="cmbPonderacion">
                      <option value="default">Seleccione...</option>
                      <option value="porcentaje">Porcentaje (100%)</option>
                      <option value="puntos">Puntos (1-20)</option>
                      {{-- <option value="letras">Letras</option> --}}
                    </select>
                  </div>
                </div>   
                <div class="form-group">
                  <label class="col-lg-5 control-label">Cortes a Evaluar</label>
                  <div class="col-lg-6">
                    <input type="text" name="txtCortes" id="txtCortes" class="form-control">
                  </div>
                </div>     
                <div class="form-group" id="nota">
                  <label class="col-lg-5 control-label">Maxima Nota</label>
                  <div class="col-lg-6">
                    <input type="text" name="txtNota" id="txtNota" class="form-control">
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