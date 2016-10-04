@extends('plantilla.layaout')
@section('content')
<script src="js/scripts/profesor.js"> </script>
<div class="panel panel-default">
  <div class="panel-heading"><button class="btn btn-primary btn-sm" type="button" onclick="agregar();">Nuevo <i class="fa fa-plus-circle"></i> </button></div>
  <div class="panel-body" id="contenido-profesor">   
    @include('configuracion.profesor.table')
  </div>
</div>

<div class="modal fade" id="modal-profesor" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">X</span></button>
      </div>
      <div class="modal-body form"> 
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">M&oacute;dulo Profesor</h3>
          </div>
          <div class="panel-body">
            <form class="form-horizontal" id="frmProfesor"> 
            {{ csrf_field() }}
              <input type="hidden" name="id">
              <fieldset>                    
                <div class="form-group">
                <label class="col-lg-2 control-label">Cedula</label>
                  <div class="col-lg-10">
                    <input type="text" class="form-control" id="txtCedula" name="txtCedula" placeholder="Ingrese Cedula">
                  </div>
                </div>
                <div class="form-group">
                <label class="col-lg-2 control-label">Nombre</label>
                  <div class="col-lg-10">
                    <input type="text" class="form-control" id="txtNombre" name="txtNombre" placeholder="Ingrese Nombre Completo">
                  </div>
                </div>
                <div class="form-group">
                <label class="col-lg-2 control-label">Tel&eacute;fono</label>
                  <div class="col-lg-10">
                    <input type="text" class="form-control" id="txtTelefono" name="txtTelefono" placeholder="Ingrese Numero de Telefono">
                  </div>
                </div>
                <div class="form-group">
                <label class="col-lg-2 control-label">Email</label>
                  <div class="col-lg-10">
                    <input type="text" class="form-control" id="txtEmail" name="txtEmail" placeholder="Ingrese Direccion de correo electronico">
                  </div>
                </div>
                <div class="form-group">
                <label class="col-lg-2 control-label">Direcci&oacute;n</label>
                  <div class="col-lg-10">
                    <textarea class="form-control" id="txtDireccion" name="txtDireccion"></textarea>
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