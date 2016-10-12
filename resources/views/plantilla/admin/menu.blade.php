<li><a><i class="fa fa-cog"></i> Personaliza tu Colegio <span class="fa fa-chevron-down"></span></a>
  <ul class="nav child_menu">
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
  <a href="#"><i class="fa fa-credit-card-alt"></i> Pagos <span class="fa fa-chevron-down"></a>
              {{-- <ul class="nav nav-second-level">
                <li>
                  <a href="flot.html">Registrar Pagos</a>
                </li>
                <li>
                  <a href="morris.html">Mostrar Pagos</a>
                </li>
              </ul> --}}
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
                <li>
                 {{--  <a href="morris.html">Mostrar Horarios</a> --}}
               </li>
             </ul>
             <!-- /.nav-second-level -->
           </li>
           <li>
            <a href="{{ asset('mensajes') }}"><i class="fa fa-envelope"></i> Mensajes <span class="fa fa-chevron-down"></span></a>            
            <!-- /.nav-second-level -->
          </li>
          <li>
            <a href="#"><i class="fa fa-file"></i> Reportes <span class="fa fa-chevron-down"></span></a>
             {{--  <ul class="nav nav-second-level">
                <li>
                  <a href="flot.html">Notas</a>
                </li>
                <li>
                  <a href="morris.html">Profesores</a>
                </li>
                <li>
                  <a href="morris.html">Alumnos</a>
                </li>
                <li>
                  <a href="morris.html">pagos</a>
                </li>
              </ul> --}}
              <!-- /.nav-second-level -->
            </li>
            <!--menu aula virtual-->
              <li>
            <a href="#"><i class="fa fa-file"></i> Aula Virtual <span class="fa fa-chevron-down"></span></a>
                <ul class="nav nav-second-level">
                <li>
                  <a href="{{ asset('crear_aula') }}">Crear</a>
                </li>
              </ul> 
              <!-- menu aula virtual -->
            </li>