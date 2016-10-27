@extends('plantilla.layaout')
@section('content')
<div class="col-md-12 col-sm-12 col-xs-12">
  <div class="x_panel">
    <div class="x_title">
      <h2>Cambiar Contraseña</h2>
      <ul class="nav navbar-right panel_toolbox">
        <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
        </li> 
      </ul>
      <div class="clearfix"></div>
    </div>
    <div class="x_content">

    <form class="form-horizontal col-md-12" method="post" action="{{ asset('/cambiar-clave/update') }}" name="frmRegistro" id="frmRegistro">
        <div class="col-sm-8 col-xs-12 col-sm-offset-2">
          {{ csrf_field() }}
          <fieldset>                    
            <div class="form-group">
              <label class="col-lg-3  col-xs-12 control-label">Contraseña Actual</label>
              <div class="col-lg-5 col-xs-12">
                <input type="password" class="form-control" id="txtClaveActual" name="txtClaveActual" >
              </div>
            </div>
            <hr>
            <div class="form-group">
              <label class="col-lg-3  col-xs-12 control-label">Contraseña Nueva</label>
              <div class="col-lg-5 col-xs-12">
                <input type="password" class="form-control" id="txtClaveNueva" name="txtClaveNueva" >
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-3  col-xs-12 control-label">Repetir Contraseña</label>
              <div class="col-lg-5 col-xs-12">
                <input type="password" class="form-control" id="txtClaveNueva2" name="txtClaveNueva2" >
              </div>
            </div>
            
            <div class="form-group">            
              <div class="col-sm-offset-4">
                <button class="btn btn-primary block-center">Modificar Contraseña</button>
              </div>
            </div>
            @if (Session::has('error'))
            <div class="alert alert-danger">{{ Session::get('error') }}</div>
            @endif
            @if (Session::has('valido'))
        <div class="alert alert-success">{{ Session::get('valido') }}</div>
        @endif
          </fieldset>

        </div>
      </form>
    </div>
  </div>
</div>
@stop