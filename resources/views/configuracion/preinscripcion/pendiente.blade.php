<div class="table-responsive">
  <table id="table-pendiente" class="table table-striped jambo_table table-condensed" width="100%" cellspacing="0">
   <thead>
     <tr>
       <th colspan="2">Datos del Padre/Madre</th>
       <th colspan="2">Datos del Representante Legal</th>
       <th colspan="4">Datos del Alumno</th>
       <th colspan="2">Opciones</th>
     </tr>
     <tr>
      <th class="col-sm-1">Cédula </th>
      <th class="col-sm-2">Nombre</th>
      <th class="col-sm-1">Cédula</th>
      <th class="col-sm-2">Nombre</th>      
      <th class="col-sm-1">Cédula</th>
      <th class="col-sm-2">Nombres</th>
       <th class="col-sm-2">Apellidos</th>
      <th class="col-sm-1">Grado a Cursar</th>
      <th class="col-sm-1">Edit</th>
      <th class="col-sm-1">Inscribir</th>
      <th class="col-sm-1">Rechazar</th>
    </tr>
  </thead>
  <tbody id="contenido">   
    @foreach ($pendientes as $pendiente)
    <tr>
     <td>{{ $pendiente->representante->cedula }}</td>
     <td>{{ $pendiente->representante->nombre }}</td>
     <td>{{ $pendiente->delegado->cedula }}</td>
     <td>{{ $pendiente->delegado->nombre }}</td>
     <td>{{ $pendiente->cedula }}</td>
     <td>{{ $pendiente->nombre }}</td>
     <td>{{ $pendiente->apellido }}</td>
     <td>{{ $pendiente->grado->grado }}</td>     
     <td><a class="btn btn-success btn-sm" href="{{ asset('preinscripcion/edit/'.$pendiente->representante->idrepresentante)}}"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a></td>
     <td><a href="{{ asset('/inscripcion/'.$pendiente->cedula.'/'.$pendiente->idalumno)}}" class="btn btn-primary btn-sm"> <i class="fa fa-check-square" aria-hidden="true"></i></a></td> 
     <td><button class="btn btn-danger btn-sm" onclick="eliminar('{{ $pendiente->idalumno }}')">    <i class="fa fa-minus-square" aria-hidden="true"></i></button></td>
   </tr>
   @endforeach      
 </tbody>
</table>
</div>

