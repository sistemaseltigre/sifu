@extends('plantilla.layaout')
@section('content')
<script src="{{ asset('/js/scripts/banco.js') }}"> </script>
<div class="panel panel-default">
  <div class="panel-heading"><button class="btn btn-primary btn-sm" type="button" onclick="agregar();">Nuevo <i class="fa fa-plus-circle"></i> </button></div>
  <div class="panel-body" id="lista">   
    @include('configuracion.banco.table')    

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
            <h3 class="panel-title">M&oacute;dulo Bancos</h3>
          </div>
          <div class="panel-body">
            <form class="form-horizontal" id="formulario"> 
              {{ csrf_field() }}
              <input type="hidden" name="id">
              <fieldset>                    
                <div class="form-group">
                  <label class="col-lg-3 control-label">Banco:</label>
                  <div class="col-lg-8">
                    <input type="text" class="form-control" id="txtBanco" name="txtBanco" placeholder="Nombre de la Entidad Bancaria">
                  </div>
                </div>  
                <div class="form-group">
                  <label class="col-lg-3 control-label">N# de Cuenta:</label>
                  <div class="col-lg-8">
                    <input type="text" class="form-control" id="txtCuenta" name="txtCuenta" placeholder="Numero de cuenta de 20 Digitos">
                  </div>
                </div>    
<div class="form-group">
                  <label class="col-lg-3 control-label">Tipo de Cuenta:</label>
                  <div class="col-lg-8">
                    <select name="cmbTipo" class="form-control">
                    <option value="default">Seleccione</option>
                    <option value="Ahorro">Ahorro</option>
                    <option value="Corriente">Corriente</option>
                    </select>
                  </div>
                </div>    
                <div class="form-group">
                  <label class="col-lg-3 control-label">Titular:</label>
                  <div class="col-lg-8">
                    <input type="text" class="form-control" id="txtTitular" name="txtTitular" placeholder="Titular de la cuenta Bancaria">
                  </div>
                </div>    
                <div class="form-group">
                  <label class="col-lg-3 control-label">RIF/DNI:</label>
                  <div class="col-lg-8">
                    <input type="text" class="form-control" id="txtCedula" name="txtCedula" placeholder="RIF o DNI del titular">
                  </div>
                </div>  
                <div class="form-group">
                  <label class="col-lg-3 control-label">Email:</label>
                  <div class="col-lg-8">
                    <input type="text" class="form-control" id="txtEmail" name="txtEmail" placeholder="Correo electronico del titular">
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