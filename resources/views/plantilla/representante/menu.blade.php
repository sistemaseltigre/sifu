   <li>
    <a href="#"><i class="fa fa-cog"></i> Configuración <span class="fa fa-chevron-down"> </span></a>
    <ul class="nav child_menu">
      <li>
        <a href="{{ asset('/profesor/materias') }}">Datos Personales</a>
      </li>             
    </ul>             
  </li>
  <li>
    <a href="#"><i class="fa fa-credit-card-alt"></i> Pagos <span class="fa fa-chevron-down"></span></a>
    <ul class="nav child_menu">
      <li><a href="{{ asset('/pagos/registrar') }}">Registrar Pagos</a></li>
    </ul>
  </li>
  <li>
    <a href="{{ asset('mensajes') }}"><i class="fa fa-envelope"></i> Mensajes</a>  
  </li>
  <li>
   <a href="#"><i class="fa fa-file"></i> Reportes <span class="fa fa-chevron-down">           
  </span></a>
  <ul class="nav child_menu">
  <h3>Alumnos</h3>
    <li><a href="{{ asset('representante/horario') }}">Horario</a></li>
    <h3>Pagos</h3>
    <li><a href="{{ asset('/pagos/historico') }}">Historico</a></li>
    <h3>Planillas</h3>
    <li><a href="{{ asset('reportes/planillas/certificado-de-estudios') }}">Certificado de Estudios</a></li>
    {{-- <li><a href="{{ asset('/pagos/pendientes') }}">Boleta de Retiro</a></li>
    <li><a href="{{ asset('/pagos/pendientes') }}">Paz y Salvo</a></li>
    <li><a href="{{ asset('/pagos/pendientes') }}">Certificado de Buena Conducta</a></li>
    <li><a href="{{ asset('/pagos/pendientes') }}">Planilla de Inscripción</a></li> --}}
  </ul>

  </li>

