@extends('plantilla.layaout')
@section('content')
<script src="js/scripts/aulaVirtual/aulaVirtual.js"> </script>
<div class="panel panel-default">
  <div class="panel-heading"><button class="btn btn-primary  btn-sm" type="button" data-toggle="modal" data-target="#modal-crear_aula">
  Nuevo <i class="fa fa-plus-circle"></i>
</button></div>
  <div class="panel-body" id="contenido-administrador">   
    @include('aulaVirtual.aulas')
  </div>
</div>

<div class="modal fade" id="modal-crear_aula" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">X</span></button>
      </div>
      <div class="modal-body form"> 
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">Aula virtual</h3>
          </div>
          <div class="panel-body">
            <form class="form-horizontal" id="frmAulavirtual"> 
            {{ csrf_field() }}
              <input type="hidden" name="id">
              <fieldset>                    
                <div class="form-group">
                <label class="col-lg-2 control-label">Asunto</label>
                  <div class="col-lg-10">
                    <input type="text" class="form-control" id="asunto_aula" name="asunto_aula" placeholder="Recuperacion de objetivo 6">
                  </div>
                </div>
                <div class="form-group">
                <label class="col-lg-2 control-label">Descripcion</label>
                  <div class="col-lg-10">
                    <textarea style="overflow:auto;resize:none" name="desc_aula" id="desc_aula" class="form-control" placeholder="Descripcion breve de la clase"></textarea>
                  </div>
                </div>
                <div class="form-group">
                <label class="col-lg-2 control-label">Cantidad</label>
                  <div class="col-lg-10">
                    <input type="number" class="form-control" id="cant_aula" name="cant_aula" placeholder="Ingrese numero de estudiantes">
                  </div>
                </div>
                <div class="form-group">
                <label class="col-lg-2 control-label">Fecha</label>
                  <div class="col-lg-10">
                    <input type="date" class="form-control" id="fecha_aula" name="fecha_aula" placeholder="Ingrese Direccion de correo electronico">
                    <i>*La fecha es para habilitar el aula virtual solo por el dia seleccionado</i>
                  </div>
                </div>
                <input type="hidden" name="iduser" id="iduser" value="{{ Auth::user()->id }}">
              </fieldset>
            </form> 
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button type="button" id="btnSave" onclick="crear_aula()" class="btn btn-primary btn-3d"><i class="fa fa-database"></i> Crear</button>
        <button type="button" class="btn btn-danger btn-3d" data-dismiss="modal"><i class="fa fa-times-circle-o"></i> Cancelar</button>
      </div>
    </div>
  </div>
</div>
@stop