@extends('plantilla.layaout')
@section('content')
<script src="{{asset('js/scripts/inscripcion.js')}}"> </script>
<div class="col-md-12 col-sm-12 col-xs-12">
  <div class="x_panel">
    <div class="x_title">
      <h2>Datos del Colegio</h2>
      <ul class="nav navbar-right panel_toolbox">
        <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
        </li> 
      </ul>
      <div class="clearfix"></div>
    </div>
    <div class="x_content">

      <form enctype="multipart/form-data" class="form-horizontal col-md-12" method="post" action="{{ asset('/config_colegio/update') }}" name="frmRegistro" id="frmRegistro">
        <div class="col-sm-3 col-xs-12">
          <img src="{{ asset('logos/'.Session::get('imagen')) }}" class="img-responsive" style="height: 150px;">
          <input type="file" name="txtLogo" id="txtLogo" class="form-control">
        </div>
        <div class="col-sm-8 col-xs-12">
          {{ csrf_field() }}
          <input type="hidden" name="id" value="{{ $colegio->id }}">
          <fieldset>                    
            <div class="form-group">
              <label class="col-lg-3  col-xs-12 control-label">Codigo</label>
              <div class="col-lg-5 col-xs-12">
                <input type="text" class="form-control" id="txtCodigo" name="txtCodigo" value="{{ $colegio->codigo }}" readonly="">
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-3 col-xs-12 control-label">Colegio</label>
              <div class="col-lg-5 col-xs-12">
                <input type="text" class="form-control" id="txtColegio" name="txtColegio" value="{{ $colegio->colegio }}">
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-3 col-xs-12 control-label">Nombre de Contacto</label>
              <div class="col-lg-5 col-xs-12">
                <input type="text" class="form-control" id="txtNombre" name="txtNombre" value="{{ $colegio->nombre_contacto }}">
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-3 col-xs-12 control-label">Email</label>
              <div class="col-lg-5 col-xs-12">
                <input type="text" class="form-control" id="txtEmail" name="txtEmail" value="{{ $colegio->email }}">
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-3 col-xs-12 control-label">Teléfono</label>
              <div class="col-lg-5 col-xs-12">
                <input type="number" class="form-control" id="txtTelefono" name="txtTelefono" value="{{ $colegio->telefono }}">
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-3 col-xs-12 control-label">Dirección</label>
              <div class="col-lg-5 col-xs-12">
                <textarea class="form-control" name="txtDireccion" id="txtDireccion">{{ $colegio->direccion }}</textarea>
              </div>
            </div>
            <div class="form-group">            
              <div class="col-sm-offset-4">
                <button class="btn btn-primary block-center">Actualizar Datos del colegio</button>
              </div>
            </div>

          </fieldset>

        </div>
      </form>
    </div>
  </div>
</div>
@stop