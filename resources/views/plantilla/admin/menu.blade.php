
<li><a><i class="fa fa-cog"></i> Personaliza tu Colegio <span class="fa fa-chevron-down"></span></a>
  <ul class="nav child_menu">
    <li>
      <a href="{{ asset('/config_colegio') }}">Mi Colegio</a>
    </li> 
    <li>
      <a href="{{ asset('/config_administrador') }}">Administradores</a>
    </li> 
    <li>
      <a href="{{ asset('/config_periodo') }}">Crear Periodo</a>
    </li>                 
    <li>
      <a href="{{ asset('/config_grado') }}">Crear Grados</a>
    </li>              
    <li>
      <a href="{{ asset('/config_seccion') }}">Crear Secciones</a>
    </li>          
    <li>
      <a href="{{ asset('/config_materia') }}">Configurar Materias</a>
    </li>     
    <li>
      <a href="{{ asset('/config_profesor') }}">Configurar Profesores</a>
    </li>   
    <li>
      <a href="{{ asset('/config_banco') }}">Configurar Bancos</a>
    </li>
    <li><a><i class="fa fa-credit-card"></i> Configurar Pagos <span class="fa fa-chevron-down"></span></a>
      <ul class="nav child_menu">
        <li><a href="{{ asset('/config_monto_inscripcion') }}">Inscripción</a></li>
        <li><a href="{{ asset('/config_cuotas') }}">Cuotas</a></li>
      </ul>
    </li>   
    <li>
      <a href="{{ asset('/preinscripcion') }}">Registrar Alumnos</a>
    </li>         
    <li>
      <a href="{{ asset('/lista_preinscripcion') }}">Formalizar Inscripcion</a>
    </li>   
  </ul>
</li>

<li>
  <a href="#"><i class="fa fa-credit-card-alt"></i> Pagos <span class="fa fa-chevron-down"></span></a>
  <ul class="nav child_menu">
    <li><a href="{{ asset('/pagos/registrar') }}">Registrar Pagos</a></li>
    <li><a href="{{ asset('/pagos/verificar_pagos') }}">Verificar Pagos</a></li>
    <li><a href="{{ asset('/pagos/procesados') }}">Pagos Procesados</a></li>
    <li><a href="{{ asset('/pagos/pendientes') }}">Pagos Pendientes</a></li>
    <li><a href="{{ asset('/pagos/historico') }}">Buscar</a></li>
  </ul>
  <!-- /.nav-second-level -->
</li>
<li>
  <a href="#"><i class="fa fa-calendar"></i> Horarios <span class="fa fa-chevron-down"></span></a>
  <ul class="nav child_menu">                
    <li>
      <a href="{{ asset('/config_horarios') }}">Crear Horario</a>
    </li>
    <li>
      <a href="{{ asset('/config_horarios/consultar') }}">Consultar Horario</a>
    </li>

  </ul>
  <!-- /.nav-second-level -->
</li>
<li>
  <a href="{{ asset('mensajes') }}"><i class="fa fa-envelope"></i> Mensajes <span class="fa fa-chevron-down"></span></a>            
  <!-- /.nav-second-level -->
</li>
<li>
  <a href="#"><i class="fa fa-file"></i> Reportes <span class="fa fa-chevron-down">           
  </span></a>
  <ul class="nav child_menu">
  <h3>Alumnos</h3>
    <li><a href="{{ asset('reportes/alumnos/inscritos') }}">Inscritos</a></li>
    <li><a href="{{ asset('reportes/alumnos/seccion') }}">Por Sección</a></li>
    <li><a href="{{ asset('reportes/alumnos/morosos') }}">Morosos</a></li>
    <h3>Historico</h3>
    <li><a href="{{ asset('/reportes/historico/metodo-pago') }}">Metodo de Pago</a></li>
    <li><a href="{{ asset('/reportes/historico/tipo-pago') }}">Tipo de Pago</a></li>
    <h3>Planillas</h3>
    <li><a href="{{ asset('reportes/planillas/certificado-de-estudios') }}">Certificado de Estudios</a></li>
    {{-- <li><a href="{{ asset('/pagos/pendientes') }}">Boleta de Retiro</a></li>
    <li><a href="{{ asset('/pagos/pendientes') }}">Paz y Salvo</a></li>
    <li><a href="{{ asset('/pagos/pendientes') }}">Certificado de Buena Conducta</a></li>
    <li><a href="{{ asset('/pagos/pendientes') }}">Planilla de Inscripción</a></li> --}}
  </ul>

</li> 
<li>
            <a href="#"><i class="fa fa-file"></i> Aula Virtual <span class="fa fa-chevron-down"></span></a>
                <ul class="nav child_menu">
                <li>
                  <a href="{{ asset('crear_aula') }}">Crear</a>
                </li>
              </ul> 
              <!-- menu aula virtual -->
            </li>