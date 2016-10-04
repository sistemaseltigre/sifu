<div class="navbar-default sidebar" role="navigation">
        <div class="sidebar-nav navbar-collapse">
        <h4 class="text-center">Nombre del Colegio</h4>
          <ul class="nav" id="side-menu">

            <li>
              <a href="#"><i class="fa fa-cog"></i> Configuración<span class="fa arrow"></span></a>
              <ul class="nav nav-second-level">
                <li>
                  <a href="{{ asset('/config_profesor') }}">Profesor</a>
                </li>                
                <li>
                  <a href="{{ asset('/config_grado') }}">Grados</a>
                </li>                
                <li>
                  <a href="{{ asset('/config_seccion') }}">Secciones</a>
                </li>                
                <li>
                  <a href="{{ asset('/config_materia') }}">Materias</a>
                </li>
                <li>
                  <a href="{{ asset('/lista_preinscripcion') }}">Inscripcion</a>
                </li>
                <li>
                  <a href="{{ asset('/config_cuota') }}">Cuotas</a>
                </li>
                <li>
                  <a href="morris.html">Bancos</a>
                </li>
              </ul>
              <!-- /.nav-second-level -->
            </li>
            <li>
              <a href="#"><i class="fa fa-credit-card-alt"></i> Pagos<span class="fa arrow"></span></a>
              <ul class="nav nav-second-level">
                <li>
                  <a href="flot.html">Registrar Pagos</a>
                </li>
                <li>
                  <a href="morris.html">Mostrar Pagos</a>
                </li>
              </ul>
              <!-- /.nav-second-level -->
            </li>
            <li>
              <a href="#"><i class="fa fa-calendar"></i> Horarios<span class="fa arrow"></span></a>
              <ul class="nav nav-second-level">                
                <li>
                  <a href="{{ asset('/config_horarios') }}">Crear Horario</a>
                </li>
                <li>
                  <a href="morris.html">Mostrar Horarios</a>
                </li>
              </ul>
              <!-- /.nav-second-level -->
            </li>
            <li>
            <a href="#"><i class="fa fa-envelope"></i> Mensajes<span class="fa arrow"></span></a>
              <ul class="nav nav-second-level">
                <li>
                  <a href="flot.html">Entrada</a>
                </li>
                <li>
                  <a href="morris.html">Salida</a>
                </li>
              </ul>
              <!-- /.nav-second-level -->
            </li>
            <li>
            <a href="#"><i class="fa fa-file"></i> Reportes<span class="fa arrow"></span></a>
              <ul class="nav nav-second-level">
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
              </ul>
              <!-- /.nav-second-level -->
            </li>
          </ul>
        </div>
        <!-- /.sidebar-collapse -->
      </div>