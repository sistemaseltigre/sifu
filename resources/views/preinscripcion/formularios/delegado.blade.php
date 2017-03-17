<span class="section">Información del representante legal.</span>
{{ csrf_field() }}
  <fieldset>
  <ul class="to_do">
  <li>
    <center><p>
     <h4>click aqui <input type="checkbox" class="flat"> para completar la información con los datos cargados en el paso anterior</h4></p></center>
    </li>
  </ul>
    <div class="form-group">
      <label class="col-lg-3 control-label">Cédula</label>
      <div class="col-lg-6">
        <input type="number" class="form-control" id="txtCedular" name="txtCedular" placeholder="Cedula del representante legal" value="{{ isset($delegado) ? $delegado->cedula : "" }}">
      </div>
    </div>
    <div class="form-group">
      <label class="col-lg-3 control-label">Nombre Completo</label>
      <div class="col-lg-6">
        <input type="text" class="form-control" id="txtNombrer" name="txtNombrer" placeholder="Ingrese Nombre Completo" value="{{ isset($delegado) ? $delegado->nombre : "" }}">
      </div>
    </div>
    <div class="form-group">
      <label class="col-lg-3 control-label">Parentesco</label>
      <div class="col-lg-6">
        <input type="text" class="form-control" id="txtParentesco" name="txtParentesco" placeholder="Ingrese el parentesco" value="{{ isset($delegado) ? $delegado->parentesco : "" }}">
      </div>
    </div>
    <div class="form-group">
      <label class="col-lg-3 control-label">Teléfono Principal</label>
      <div class="col-lg-6">
        <input type="number" class="form-control" id="txtTelefono1r" name="txtTelefono1r" placeholder="Telefono Principal" value="{{ isset($delegado) ? $delegado->telefono_principal : "" }}">
      </div>
    </div>
    <div class="form-group">
      <label class="col-lg-3 control-label">Teléfono Secundario</label>
      <div class="col-lg-6">
        <input type="number" class="form-control" id="txtTelefono2r" name="txtTelefono2r" placeholder="Telefono secundario (Opcional) " value="{{ isset($delegado) ? $delegado->telefono_opcional : "" }}"> 
      </div>
    </div>
    <div class="form-group">
      <label class="col-lg-3 control-label">Correo Electrénico</label>
      <div class="col-lg-6">
        <input type="text" class="form-control" id="txtEmailr" name="txtEmailr" placeholder="Direccion de correo electronico" value="{{ isset($delegado) ? $delegado->email : "" }}">
      </div>
    </div>
    <div class="form-group">
      <label class="col-lg-3 control-label">Dirección</label>
      <div class="col-lg-6">
        <textarea class="form-control" name="txtDireccionr" id="txtDireccionr">{{ isset($delegado) ? $delegado->direccion : "" }}</textarea>
      </div>
    </div>
  </fieldset>
