 @extends('plantilla.layaout')
 @section('content')
 <div class="col-md-12 col-sm-12 col-xs-12">
  <div class="x_panel">
    <div class="x_title">
      <h2>Registro de Pagos  <small>Mensualidad periodo </small></h2>

      <ul class="nav navbar-right panel_toolbox">
        <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
        </li> 
      </ul>
      <div class="clearfix"></div>
    </div>
    <div class="x_content">
      <div class="well ">
        <div class="col-xs-12 col-sm-4  col-sm-offset-4">
          <select class="form-control chosen-select" name="cmbAlumno" id="cmbAlumno" >
            <option>Seleccione</option>
          </select>
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="row">
      </div>
    </div>
  </div>
</div>
@stop