<div class="table-responsive">
  <table id="datatables-example" class="table table-striped jambo_table table-condensed" width="100%" cellspacing="0">
   <thead>
    <tr>
     <th class="col-sm-3">Materia</th>
     <th class="col-sm-3">Opcion</th>
   </tr>
 </thead>
 <tbody id="contenido">  
  @foreach($materias as $materia)
  <tr>
    <td>{{ $materia->materia->materia }}</td>
    <td><button class="btn btn-success" onclick="agregar('{{ $materia->materia->idmateria }}');"><i class="fa fa-cogs" aria-hidden="true"></i></button></td>
  </tr>
  @endforeach
</tbody>
</table>
</div>