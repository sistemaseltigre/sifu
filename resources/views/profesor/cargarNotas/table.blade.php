<div class="table-responsive">
  <table id="datatables-example" class="table table-striped jambo_table table-condensed" width="100%" cellspacing="0">
   <thead>
    <tr>
     <th class="col-sm-3">Materia Asignada</th>
     <th class="col-sm-3">Seccion</th>
     <th class="col-sm-3">Opcion</th>
   </tr>
 </thead>
 <tbody id="contenido">  
  @foreach($materias as $materia)
  <tr>
    <td>{{ $materia->materia }}</td>
    <td>{{ $materia->seccion}}</td>
    <td><a class="btn btn-success" href="{{ asset('profesor/lista_alumnos/'.$materia->idmateria.'/'.$materia->idseccion) }}"><i class="fa fa-list-alt" aria-hidden="true"></i></a></td>
  </tr>
  @endforeach
</tbody>
</table>
</div>