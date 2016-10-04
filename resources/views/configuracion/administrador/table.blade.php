<div class="table-responsive">
          <table id="datatables" class="table table-striped jambo_table table-condensed">
             <thead>
                <tr>
                   <th class="col-sm-1">Cedula</th>
                   <th class="col-sm-2">Nombre</th>
                   <th class="col-sm-2">Tel&eacute;fono</th>
                   <th class="col-sm-2">Email</th>
                   <th class="col-sm-1">Editar</th>
                   <th class="col-sm-1">Eliminar</th>
               </tr>
           </thead>
           <tbody id="contenido">   
               @foreach ($datos as $admin)
               <tr>
                   <td>{{ $admin->cedula }}</td>
                   <td>{{ $admin->nombre }}</td>
                   <td>{{ $admin->telefono }}</td>
                   <td>{{ $admin->email }}</td>
                   <td><button class="btn btn-success btn-sm" onclick="modificar('{{ $admin->idadministrador }}')"> <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Editar</button></td> 
                   <td><button class="btn btn-danger btn-sm" onclick="eliminar('{{ $admin->idadministrador }}')"> <i class="fa fa-trash" aria-hidden="true"></i> Eliminar</button></td>
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