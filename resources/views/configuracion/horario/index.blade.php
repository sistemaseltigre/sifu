@extends('plantilla.layaout')
@section('content')
<script src="js/scripts/horario.js"> </script>
<div class="col-sm-8">
  <div class="x_panel">
    <div class="x_title">
      <h2>Crea tus horarios</h2>
      <div class="clearfix"></div>
    </div>
    <div class="x_content">    
      <form name="frmHorario" id="frmHorario" class="form-lineal">
        {{ csrf_field() }}
        <div class="row">    
          <div class="col-sm-4 col-xs-12">
            <div class="form-group">
              <label class="col-lg-5 control-label pill-left">Profesor</label>
              <div class="col-lg-10">
                <select name="cmbProfesor" id="cmbProfesor" class="form-control">
                  <option>Seleccione</option>
                  @foreach ($profesor as $prof)
                  <option value="{{ $prof->idprofesor }}">{{ $prof->nombre_profesor }}</option>
                  @endforeach
                </select>
              </div>
            </div>    
          </div>
          <div class="col-sm-4 col-xs-12">
            <div class="form-group">
              <label class="col-lg-5 control-label pill-left">Grados</label>
              <div class="col-lg-10">
                <select name="cmbGrado" id="cmbGrado" class="form-control">
                  <option>Seleccione</option>
                  @foreach ($grado as $grados)
                  <option value="{{ $grados->idgrado }}">{{ $grados->grado }}</option>
                  @endforeach
                </select>
              </div>
            </div>    
          </div>
          <div class="col-sm-4 col-xs-12">
            <div class="form-group">
              <label class="col-lg-5 control-label pill-left">Materias</label>
              <div class="col-lg-10">
                <select name="cmbMateria" id="cmbMateria" class="form-control">
                  <option>Seleccione</option>
                </select>
              </div>
            </div>    
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4 col-xs-12">
            <div class="form-group">
              <label class="col-lg-5 control-label pill-left">Dias</label>
              <div class="col-lg-10">
               <select name="cmbDia" id="cmbDia" class="form-control">
                <option>Seleccione</option>
                <option value="2013-12-30">Lunes</option>
                <option value="2013-12-31">Martes</option>
                <option value="2014-01-01">Miercoles</option>
                <option value="2014-01-02">Jueves</option>
                <option value="2014-01-03">Viernes</option>
                <option value="2014-01-04">Sabado</option>
                <option value="2014-01-05">Domingo</option>
              </select>
            </div>
          </div>    
        </div>
        <div class="col-sm-4 col-xs-12">
          <div class="form-group">
            <label class="col-lg-7 control-label pill-left">Hora Inicial</label>
            <div class="col-lg-10">
              <div class='input-group date' id='horaInicio'>
                <input type='text' class="form-control" name="txtHoraInicio" id="txtHoraInicio" />
                <span class="input-group-addon">
                  <span class="glyphicon glyphicon-time"></span>
                </span>
              </div>
            </div>
          </div>   
        </div>
        <div class="col-sm-4 col-xs-12">
          <div class="form-group">
            <label class="col-lg-7 control-label pill-left">Hora Final</label>
            <div class="col-lg-10">
              <div class='input-group date' id='horaFinal'>
                <input type='text' class="form-control" name="txtHoraFinal" id="txtHoraFinal" />
                <span class="input-group-addon">
                  <span class="glyphicon glyphicon-time"></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4 col-sm-offset-5">
          <div class="col-lg-10">
            <button class="btn btn-primary btn-sm" type="button" id="btnProcesar">Guardar</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
</div>
<div class="col-sm-4">
  <div class="x_panel">
    <div class="x_title">
      <h2>Secciones</h2>
      <div class="clearfix"></div>
    </div>
    <div class="x_content">   
      <div id="seccion_reload">
        <table class="table table-condensed" style="table-layout:fixed">
          <thead >
            <tr>
              <td class="col-sm-3">Sección</td>
              <td class="col-sm-4">Horas Asignadas</td>
              <td class="col-sm-4">Horas Restantes</td>
            </tr>
          </thead>          
        </table>
        <div style="overflow-y:auto; height: 114px;">
          <table class="table table-condensed" style="table-layout:fixed">
            <tbody id="contenido_seccion">

            </tbody>
          </table>
        </div>
      </div> 
    </div>
  </div>
</div>
<div class="clearfix"></div>
<div class="x_panel">
  <div class="x_title">
  <div class="clearfix"></div>
  </div>
  <div class="x_content">
    <div class="row" id="horario">

    </div>
  </div>
</div>
<div id="fullCalModal" class="modal fade">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span> <span class="sr-only">close</span></button>
        <h4 id="modalTitle" class="modal-title"></h4>
      </div>
      <div id="modalBody" class="modal-body"></div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" id="btnEliminar">Eliminar</button>
        <button type="button" class="btn btn-success" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>

@stop

