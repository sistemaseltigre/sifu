<div class="table-responsive">
  <table id="datatables" class="table table-striped jambo_table table-condensed">
   <thead>
    <tr>
      <th class="col-sm-2">Grado Academico</th>
      <th class="col-sm-2">Materia</th>
      <th class="col-sm-2">Horas Curso</th>
      <th class="col-sm-1">Prelaci&oacute;n</th>
      <th class="col-sm-1">Editar</th>
      <th class="col-sm-1">Eliminar</th>
    </tr>
  </thead>
  <tbody id="contenido">   
  @foreach ($materias as $materia)
   <tr>
     <td>{{ $materia['grado']}}</td>
     <td>{{ $materia['materia'] }}</td>
     <td>{{ $materia['horas'] }}</td>
     <td>{{ $materia['prelacion'] }}</td>
     <td><button class="btn btn-success btn-sm" onclick="modificar('{{ $materia['idmateria'] }}')"> <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Editar</button></td> 
     <td><button class="btn btn-danger btn-sm" onclick="eliminar('{{ $materia['idmateria'] }}')"> <i class="fa fa-trash" aria-hidden="true"></i> Eliminar</button></td>
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