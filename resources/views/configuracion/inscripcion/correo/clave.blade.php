<div class="container">
  <div class="row">
    <br><br><br>
    <div class="col-md-5 col-md-offset-3">
      <div class="panel panel-yellow" >            
        <div class="panel-heading" style="background-color: #ffffff"></div>
        <div class="panel-body">
          <h4><p>Bienvenido a SIFU, {{ $nombre }}  usted ha sido registrado en la plataforma del colegio {{ $colegio }} en calidad de {{ $rol }}</p></h4>

            <p>Recuerda que puedes ingresar a través de este enlace               
              <a href="https://www.sifusp.com/login/{{ $enlace }}" target="blank_">sifusp.com/login/{{ $enlace }}</a>    o a través de nuestra web <a href="https://www.sifusp.com." target="blank_">www.sifusp.com</a> 
            </p>
            <p>A continuacion encontrara sus datos de acceso:<br></p>
            <p><b>Usuario: </b>{{ $usuario }}</p>
            <p><b>Clave Temporal:</b> {{ $clave }}</p>
            <h3>Por favor asegúrese de cambiar su clave por una de su preferencia.</h3>
          </div> 
        </div>
      </div>
    </div>
  </div>
