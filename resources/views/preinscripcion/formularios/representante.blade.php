<span class="section">Información Padre/Madre del alumno.</span>
{{ csrf_field() }}
    <fieldset>
      <div class="form-group">
        <label class="col-lg-3 control-label">Cédula</label>
        <div class="col-lg-6">
          <input type="number" class="form-control" id="txtCedula" name="txtCedula" placeholder="Cedula del padre o la madre">
        </div>
      </div>
      <div class="form-group">
        <label class="col-lg-3 control-label">Nombre Completo</label>
        <div class="col-lg-6">
          <input type="text" class="form-control" id="txtNombre" name="txtNombre" placeholder="Ingrese Nombre Completo">
        </div>
      </div>
      <div class="form-group">
        <label class="col-lg-3 control-label">Profesión</label>
        <div class="col-lg-6">
          <input type="text" class="form-control" id="txtProfesion" name="txtProfesion" placeholder="Profesion o Actividad que realiza">
        </div>
      </div>
      <div class="form-group">
        <label class="col-lg-3 control-label">Teléfono Principal</label>
        <div class="col-lg-6">
          <input type="number" class="form-control" id="txtTelefono1" name="txtTelefono1" placeholder="Telefono Principal">
        </div>
      </div>
      <div class="form-group">
        <label class="col-lg-3 control-label">Teléfono Secundario</label>
        <div class="col-lg-6">
          <input type="number" class="form-control" id="txtTelefono2" name="txtTelefono2" placeholder="Telefono secundario (Opcional) ">
        </div>
      </div>
      <div class="form-group">
        <label class="col-lg-3 control-label">Correo Electrónico</label>
        <div class="col-lg-6">
          <input type="text" class="form-control" id="txtEmail" name="txtEmail" placeholder="Direccion de correo electronico">
        </div>
      </div>
      <div class="form-group">
        <label class="col-lg-3 control-label">Dirección</label>
        <div class="col-lg-6">
          <textarea class="form-control" name="txtDireccion" id="txtDireccion"></textarea>
        </div>
      </div>
    </fieldset>
 