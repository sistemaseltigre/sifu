<div class="table-responsive">
  <table id="datatables" class="table table-striped jambo_table table-condensed">
   <thead>
    <tr>
     <th class="col-sm-4">Grado Escolar</th>
     <th class="col-sm-4">Grado Requerido</th>
     <th class="col-sm-1">Editar</th>
     <th class="col-sm-1">Eliminar</th>
   </tr>
 </thead>
 <tbody id="contenido">  
   @foreach ($grados as $grado)
   <tr>
     <td>{{ $grado['grado'] }}</td>
     <td>{{ $grado['requerido'] }}</td>
     <td><button class="btn btn-success btn-sm" onclick="modificar('{{ $grado['idgrado']}}')"> <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Editar</button></td> 
     <td><button class="btn btn-danger btn-sm" onclick="eliminar('{{ $grado['idgrado']}}')"> <i class="fa fa-trash" aria-hidden="true"></i> Eliminar</button></td>
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