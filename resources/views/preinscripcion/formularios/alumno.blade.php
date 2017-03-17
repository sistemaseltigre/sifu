<span class="section">Formulario de Alumnos</span>

<button class="btn btn-primary btn-sm" type="button" onclick="agregar();">Nuevo</button>
<br>
<div id="contenido-alumno"> 
  @include('preinscripcion.formularios.alumno.table')
</div>

<div class="modal fade" id="modal-alumno" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">X</span></button>
      </div>
      <div class="modal-body form"> 
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">M&oacute;dulo Alumno</h3>
          </div>
          <div class="panel-body">
            <form class="form-horizontal" id="frmAlumno"> 
              {{ csrf_field() }}
              <input type="hidden" name="id">
              <fieldset>                    
                <div class="form-group">
                  <label class="col-lg-4 control-label">Identificador</label>
                  <div class="col-lg-8">
                    <input type="number" class="form-control" id="txtCedulaa" name="txtCedula" placeholder="Ingrese Identificador unico del Alumno (Solo Numero)">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-lg-4 control-label">Nombres</label>
                  <div class="col-lg-8">
                    <input type="text" class="form-control" id="txtNombrea" name="txtNombre" placeholder="Ingrese Nombres Completo">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-lg-4 control-label">Apellidos</label>
                  <div class="col-lg-8">
                  <input type="text" class="form-control" id="txtApellido" name="txtApellido" placeholder="Ingrese Apellidos Completo">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-lg-4 control-label">Grado a Cursar</label>
                  <div class="col-lg-8">
                    <select name="cmbGrado" id="cmbGrado" class="form-control">
                      <option value="default">Seleccione</option>
                      @if(isset($grados))                      
                      @foreach ($grados as $grado)
                      <option value="{{ $grado->idgrado }}">{{ $grado->grado }}</option>
                      @endforeach
                      @endif
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-lg-4 control-label">Nacionalidad</label>
                  <div class="col-lg-8">
                    <input type="text" class="form-control" id="txtNacionalidad" name="txtNacionalidad" placeholder="Nacionalidad del Alumno">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-lg-4 control-label pill-left">Fecha Nacimiento</label>
                  <div class="col-lg-8">
                    <div class='input-group date' id='FechaNacimiento'>
                      <input type='text' class="form-control" name="txtFecha" id="txtFecha" />
                      <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-lg-4 control-label">Genero</label>
                  <div class="col-lg-8">
                    <select class="form-control" name="cmbGenero" id="cmbGenero">
                      <option value="default">Seleccione...</option>
                      <option value="masculino">Masculino</option>
                      <option value="femenino">Femenino</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-lg-4 control-label">Comunion</label>
                  <div class="col-lg-8">
                    <select class="form-control" name="cmbComunion" id="cmbComunion">
                      <option value="default">Seleccione...</option>
                      <option value="si">Si</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-lg-4 control-label">Plantel Procedencia</label>
                  <div class="col-lg-8">
                    <input type="text" class="form-control" id="txtProcedencia" name="txtProcedencia" placeholder="Plantel de Procedencia">
                  </div>
                </div>
                
                <div class="form-group">
                  <label class="col-lg-4 control-label">Email</label>
                  <div class="col-lg-8">
                    <input type="text" class="form-control" id="txtEmaila" name="txtEmail" placeholder="Ingrese Direccion de correo electronico">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-lg-4 control-label">Dirección</label>
                  <div class="col-lg-8">
                    <textarea class="form-control" id="txtDirecciona" name="txtDireccion"></textarea>
                  </div>
                </div>
                <h4>Información complementaria</h4>
                <div class="form-group">
                  <label class="col-lg-4 control-label">Peso</label>
                  <div class="col-lg-8">
                    <input type="text" class="form-control" id="txtPeso" name="txtPeso" placeholder="Ingrese peso del alumno">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-lg-4 control-label">Talla</label>
                  <div class="col-lg-8">
                    <input type="text" class="form-control" id="txtTalla" name="txtTalla" placeholder="Ingrese talla del alumno">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-lg-4 control-label">Altura</label>
                  <div class="col-lg-8">
                    <input type="text" class="form-control" id="txtAltura" name="txtAltura" placeholder="Ingrese altura del alumno">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-lg-4 control-label">Zapato</label>
                  <div class="col-lg-8">
                    <input type="text" class="form-control" id="txtZapato" name="txtZapato" placeholder="Ingrese talla de zapato del alumno">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-lg-4 control-label">Observacion</label>
                  <div class="col-lg-8">
                    <textarea class="form-control" id="txtObservacion" name="txtObservacion"></textarea>
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