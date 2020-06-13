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
  <link rel="stylesheet" type="text/css" href="{{ asset('css/all.css') }}"> 
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1" crossorigin="anonymous">
  <script>
    var app_url = {!! json_encode(url('/')) !!};
  </script>
  <script src="{{ asset('js/all.js') }}"></script>
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

      <form enctype="multipart/form-data" class="form-horizontal col-md-12" method="post" action="{{ asset('/colegio/registro/create') }}" name="frmRegistro" id="frmRegistro" >
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
     <div class="col-lg-6 col-lg-offset-4">
     <input type="checkbox" name="politicas" id="politicas" onclick="marcar();"> Aceptar Politicas de SIFU <a href="#" onclick="politicas()">Ver Politicas </a>
      <div class="col-lg-12"><small>Marque en la casilla para aceptar las politicas y habilitar el registro.</small></div>
     </div>
   </div>
   <div class="form-group">
    <button class="btn btn-primary btn-lg btn-block" id="btnRegistrar" disabled="">Registrarse</button>
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

<div class="modal fade" id="modal" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">X</span></button>
      </div>
      <div class="modal-body form">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">Politicas SIFU</h3>
          </div>
          <div class="panel-body">
           <p>
           Al acceder a este sitio el usuario acepta las siguientes condiciones y políticas de uso.
           </p>
<p>SIMPLEPANAS SAS, no se responsabiliza del entendimiento, interpretación y/o uso por parte de los
usuario del contenido presentado en SIFU. El contenido es desarrollado por SIMPLEPANAS SAS, sin
comprometer el pensamiento o la opinión de sus anunciantes o sitios vinculados. SIMPLEPANAS SAS se
reserva la facultad de modificar el contenido, presentación, configuración y/o los servicios ofrecidos -por si mismo notificando previamente al cliente.</p>

<p>El cliente admite que ningún tercero es responsable por perjuicios que se deriven directa o
indirectamente de la existencia, uso, acceso, imposibilidad de uso o imposibilidad de acceso a la
presente página o a cualquiera de sus vínculos o enlaces.</p>

<p>SIMPLEPANAS SAS no ofrecen garantía sobre la exactitud e integridad de la información,
consecuentemente el cliente acepta que él es el único responsable por las decisiones que adopte con
base en la información o en los materiales de esta página o de sus vínculos o enlaces.</p>

<p>El cliente responderá por los daños y perjuicios de toda naturaleza que SIFU pueda sufrir, directa o
indirectamente, como consecuencia del incumplimiento de cualquiera de las obligaciones derivadas de
las Condiciones de Uso o de la ley en relación con la utilización de este sitio web.</p>

<p>SIMPLEPANAS SAS, no asume responsabilidad alguna por los daños y perjuicios de toda naturaleza que
pudieran derivarse de la utilización de los servicios y de los contenidos por parte del cliente que puedan derivarse de la falta de veracidad, vigencia, exhaustividad y/o autenticidad de la información que el cliente proporciona a otros usuarios acerca de sí mismos y, en particular, aunque no de forma exclusiva, por los daños y perjuicios de toda naturaleza que puedan derivarse de la suplantación de la personalidad de un tercero efectuada por un usuario en cualquier clase de comunicación realizada a través de éste sitio web.</p>

<p>La inclusión de vínculos a otros sitios a través de SIFU no implica ninguna relación diferente al “vínculo" mismo. Todas las transacciones realizadas en dichos vínculos son responsabilidad exclusiva del cliente y de la entidad relacionada.</p>

<p>El cliente reconoce que el contenido (incluidos entre otros: texto, software, música, sonido, fotografías, vídeo, gráficos u otro material) producida comercialmente y distribuida de forma electrónica y presentada a los usuarios de SIFU, está protegido por derechos de autor, marcas, patentes u otros bienes mercantiles o formas diferentes del derecho de propiedad y toda la responsabilidad recae sobre el cliente.</p>

<p>El origen de la información cargada en SIFU es responsabilidad del cliente, su manejo, actualización,
distribución, confidencialidad, integridad y asegurar la disponibilidad de la información.</p>

<p>SIMPLEPANAS SAS es responsable de monitorear cada una de las razones sociales registradas durante el
DEMO de 30, días con el fin de garantizar la veracidad de las mismas.</p>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-primary btn-3d" data-dismiss="modal"> Aceptar</button>
      </div>
    </div>
  </div>
</div>
</body>
