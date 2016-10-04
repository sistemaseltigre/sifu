<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="">
  <meta name="_token" content="{{ csrf_token() }}"/>
  <title>S.I.F.U</title>
  <link rel="stylesheet" type="text/css" href="{{ elixir('css/all.css') }}"> 
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1" crossorigin="anonymous">
  <script>
    var app_url = {!! json_encode(url('/')) !!};
  </script>
  <script src="{{ elixir('js/all.js') }}"></script>
  <script src="{{ asset('js/scripts/registro.js') }}"></script>

</head>

<body>

  <div class="col-sm-6 col-sm-offset-3">
    <div class="row " style="background:#ffffff">
      <div class="col-sm-4 col-sm-offset-2">
        <img src="{{ asset('img/logo.png') }}" class="img-responsive pull-left" width="80%">
      </div>
      <div class="col-sm-6" class="center-block">
        <br><br><br>
        <h3>Registrese en SIFU</h3>
      </div>
      
      <form enctype="multipart/form-data" class="form-horizontal col-md-12" method="post" action="{{ asset('/colegio/registro/create') }}" name="frmRegistro" id="frmRegistro">
       {{ csrf_field() }}
       <br>
       <div class="form-group">
         <label class="col-lg-4 control-label">C&oacute;digo:</label>
         <div class="col-lg-8">
          <input type="number" class="form-control input-md" placeholder="Código numerico identificador del colegio N.I.T/RIF" name="txtCodigo" id="txtCodigo"> 
          <div id="error" style="display:none">error</div>
        </div>
      </div>
      <div class="form-group">
       <label class="col-lg-4 control-label">Nombre del Colegio:</label>
       <div class="col-lg-8">
         <input type="text" class="form-control input-md" placeholder="Nombre del Colegio" name="txtColegio" id="txtColegio">
       </div>
     </div>
     <div class="form-group">
      <label class="col-lg-4 control-label">Nombre de Contacto:</label>
      <div class="col-lg-8">
        <input type="text" class="form-control input-md" placeholder="Nombre de Contacto" name="txtNombre" id="txtNombre">
      </div>
    </div>
    <div class="form-group">
      <label class="col-lg-4 control-label">E-mail:</label>
      <div class="col-lg-8">
        <input type="email" class="form-control input-md" placeholder="Correo Electronico" name="txtEmail" id="txtEmail">
      </div>
    </div>
    <div class="form-group">
      <label class="col-lg-4 control-label">Numero de Contacto:</label>
      <div class="col-lg-8">
        <input type="tel" class="form-control input-md" placeholder="Numero Telefonico" name="txtTelefono" id="txtTelefono">
      </div>
    </div>
    <div class="form-group">
      <label class="col-lg-4 control-label">Pais:</label>
      <div class="col-lg-8">
        <select class="form-control chosen-select input-md" style="height:46px;" name="cmbPais" id="cmbPais">
          <option value="default">Seleccione</option>
          <option value="1">Venezuela</option>
          <option value="2">Colombia</option>
        </select>.
      </div>
    </div>
    <div class="form-group">
      <label class="col-lg-4 control-label">Usuario:</label>
      <div class="col-lg-8">
        <input type="text" class="form-control input-md" placeholder="Usuario para Acceder al Sistema" name="txtUsuario" id="txtUsuario">
      </div>
    </div>
    <div class="form-group">
      <label class="col-lg-4 control-label">Clave de Acceso:</label>
      <div class="col-lg-8">
        <input type="password" class="form-control input-md" placeholder="Contraseña de acceso" name="txtPassword" id="txtPassword">
      </div>
    </div>
    <div class="form-group">
      <label class="col-lg-4 control-label">Repita Clave de Acceso:</label>
      <div class="col-lg-8">
        <input type="password" class="form-control input-md" placeholder="Repita Contraseña de acceso" name="txtPassword2" id="txtPassword2">
      </div>
    </div>
    <div class="form-group">
      <label class="col-lg-4 control-label">Logo del Colegio:</label>
      <div class="col-lg-8">
        <input type="file" class="form-control input-md" placeholder="Logotipo del colegio" name="txtLogo" id="txtLogo">
      </div>
      <div class="col-lg-12" id="showImage">

      </div>

    </div>
    <div class="form-group">
      <div class="col-lg-4">
      <span class="pull-right" id="captcha_img">{!! Captcha::img(); !!}</span>
      </div>
      <div class="col-lg-8">
        <input type="text" class="form-control input-md" placeholder="Ingrese Captcha" name="txtCaptcha" id="txtCaptcha">
      </div>
    </div>
    <div class="form-group">
      <button class="btn btn-primary btn-lg btn-block" id="btnRegistrar">Registrarse</button>
      <a class="btn btn-success btn-lg btn-block" href="{{ asset('/login/') }}" >Iniciar Sesion</a>
    </div>
  </form> 

</div>
  <div class="row" style="background:#ffffff">
 <blockquote>
<div class="container">

  <small>Ingresar usuario y clave valido para ingresar al sistema.</small>
  <small>Una vez Registrado, recibira un correo electronico para poder acceder al sistema.</small>

</div>
</blockquote>
</div>
</div>
</body>