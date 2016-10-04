<table class="table table-striped table-hover ">
  <thead>
    <tr>
      <th class="col-sm-2">Identificador</th>
      <th class="col-sm-2">Nombres</th>
      <th class="col-sm-2">Apellidos</th>
      <th class="col-sm-2">Fécha de Nacimiento</th>
      <th class="col-sm-2">Grado a Cursar</th>
      <th class="col-sm-2">Opcion</th>
    </tr>
  </thead>
  <tbody id="contenido">  
    @if(isset($datos))
    @foreach ($datos as $row)
    <tr>
     <td>{{ $row['cedula'] }}</td>
     <td>{{ $row['nombre'] }}</td>
     <td>{{ $row['apellido'] }}</td>
     <td>{{ $row['fechaNacimiento'] }}</td>
     <td>{{ $row['grado'] }}</td>
     <td><button class="btn btn-success btn-sm" type="button" onclick="modificar('{{ $row['idalumno']}}')"> <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Editar</button></td> 
     <td><button class="btn btn-danger btn-sm"  type="button" onclick="eliminar('{{ $row['idalumno']}}')"> <i class="fa fa-trash" aria-hidden="true"></i> Eliminar</button></td>
   </tr>
   @endforeach      
   @endif
 </tbody>
</table> 