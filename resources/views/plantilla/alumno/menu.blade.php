   <li>
    <a href="#"><i class="fa fa-cog"></i> Configuración <span class="fa fa-chevron-down"> </span></a>
    <ul class="nav child_menu">
      <li>
        <a href="{{ asset('/alumnos/datos_personales') }}">Datos Personales</a>
      </li>             
    </ul>             
  </li>
  <li>
    <a href="{{ asset('mensajes') }}"><i class="fa fa-envelope"></i> Mensajes</a>  
  </li>
  <li>
  <a href="{{ asset('eventos/mostrar-eventos') }}"><i class="fa fa-calendar-o"></i> Eventos</a>
  </li>
  <li>
   <a href="#"><i class="fa fa-file"></i> Reportes <span class="fa fa-chevron-down">           
   </span></a>
   <ul class="nav child_menu">
    <h3>Alumnos</h3>
    <li><a href="{{ asset('alumno/horario') }}">Horario</a></li>
    <li><a href="{{ asset('alumno/getNotas') }}">Notas</a></li>
  </ul>

</li>

