
  <div class="table-responsive">
  <table id="datatables" class="table table-striped jambo_table table-condensed">
     <thead>
      <tr>
       <th class="col-sm-1">Cedula</th>
       <th class="col-sm-2">Nombre</th>
       <th class="col-sm-2">Telefono</th>
       <th class="col-sm-2">Email</th>
       <th class="col-sm-1">Edad</th>
       <th class="col-sm-2">Direccion</th>
       <th class="col-sm-1">Editar</th>
       <th class="col-sm-1">Eliminar</th>
     </tr>
   </thead>
   <tbody id="contenido">   
     @foreach ($datos as $profesor)
     <tr>
       <td>{{ $profesor->cedula_profesor }}</td>
       <td>{{ $profesor->nombre_profesor }}</td>
       <td>{{ $profesor->telefono_profesor }}</td>
       <td>{{ $profesor->email_profesor }}</td>
       <td>{{ $profesor->edad_profesor }}</td>
       <td>{{ $profesor->direccion_profesor }}</td>
       <td><button class="btn btn-success btn-sm" onclick="modificar('{{ $profesor->idprofesor }}')"> <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Editar</button></td> 
       <td><button class="btn btn-danger btn-sm" onclick="eliminar('{{ $profesor->idprofesor }}')"> <i class="fa fa-trash" aria-hidden="true"></i> Eliminar</button></td>
     </tr>
     @endforeach      
   </tbody>
 </table>
</div>

      <script type="text/javascript">
 $(document).ready(function(){
  $('#datatables').DataTable();
});
</script>