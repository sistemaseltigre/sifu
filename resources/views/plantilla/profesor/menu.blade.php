   <li>
    <a href="#"><i class="fa fa-cog"></i> Configuración<span class="fa arrow"></span></a>
    <ul class="nav child_menu">
      <li>
        <a href="{{ asset('/profesor/materias') }}">Materias</a>
      </li>  
            {{--     <li>
                  <a href="{{ asset('/config_profesor') }}">Actualizar Datos</a>
                </li>                
                <li>
                  <a href="{{ asset('/config_grado') }}">Cambiar Clave</a>
                </li> --}}
              </ul>
              <!-- /.nav-second-level -->
            </li>
            <li>
              <a href="{{ asset('/profesor/cargar_notas') }}"><i class="fa fa-list-alt"></i> Cargar Notas</a>             
            </li>
            <li>
              <a href="{{ asset('/profesor/horario') }}"><i class="fa fa-calendar"></i> Mi Horario</a>
            </li>
            <li>
              <a href="{{ asset('mensajes') }}"><i class="fa fa-envelope"></i> Mensajes <span class="fa fa-chevron-down"></span></a>     
             {{--  <ul class="nav nav-second-level">
                <li>
                  <a href="flot.html">Entrada</a>
                </li>
                <li>
                  <a href="morris.html">Salida</a>
                </li>
              </ul> --}}
              <!-- /.nav-second-level -->
            </li>
            <li>
              <a href="#"><i class="fa fa-calendar-o"></i> Eventos <span class="fa fa-chevron-down"></span></a>
              <ul class="nav child_menu">
                <li>
                  <a href="{{ asset('/eventos/mis-eventos') }}">Mis Eventos</a>
                </li>
                <li>
                  <a href="{{ asset('/eventos/todos-los-eventos') }}">Todos los Eventos</a>
                </li>
              </ul> 
            </li>
            <li>
              <a href="#"><i class="fa fa-file"></i> Reportes<span class="fa arrow"></span></a>
              {{-- <ul class="nav nav-second-level">
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
            <li>
  <a href="#"><i class="fa fa-desktop" aria-hidden="true"></i> Aula Virtual <span class="fa fa-chevron-down"></span></a>
  <ul class="nav child_menu">
    <li>
      <a href="{{ asset('crear_aula') }}">Crear</a>
    </li>
  </ul> 
  <!-- menu aula virtual -->
</li>

