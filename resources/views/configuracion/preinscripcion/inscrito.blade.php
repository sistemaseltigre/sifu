<div class="table-responsive">
  <table id="table-inscrito" class="table table-striped jambo_table table-condensed" width="100%" cellspacing="0">

   <thead>
     <tr>
       <th colspan="2">Datos del Padre/Madre</th>
       <th colspan="2">Datos del Representante Legal</th>
       <th colspan="3">Datos del Alumno</th>
     </tr>
     <tr>
      <th class="col-sm-1">Cedula </th>
      <th class="col-sm-2">Nombre</th>
      <th class="col-sm-1">Cedula</th>
      <th class="col-sm-2">Nombre</th>      
      <th class="col-sm-1">Cedula</th>
      <th class="col-sm-2">Nombre</th>
      <th class="col-sm-1">Grado a Cursar</th>
    </tr>
  </thead>
  <tbody id="contenido">   
    @foreach ($inscritos as $inscrito)
    <tr>
     <td>{{ $inscrito->representante->cedula }}</td>
     <td>{{ $inscrito->representante->nombre }}</td>
     <td>{{ $inscrito->delegado->cedula }}</td>
     <td>{{ $inscrito->delegado->nombre }}</td>
     <td>{{ $inscrito->cedula }}</td>
     <td>{{ $inscrito->nombre }}</td>
     <td>{{ $inscrito->grado->grado }}</td>
   </tr>
   @endforeach      
 </tbody>
</table>
</div>
  