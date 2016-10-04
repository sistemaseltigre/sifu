<div class="table-responsive">
  <table id="datatables-example" class="table table-striped jambo_table table-condensed" width="100%" cellspacing="0">
   <thead>
    <tr>
     <th class="col-sm-2">Materia</th>
     <th class="col-sm-2">Tipo</th>
     <th class="col-sm-2">Cortes</th>
     <th class="col-sm-2">Maxima Puntuacion</th>
     <th class="col-sm-2">Opcion</th>
   </tr>
 </thead>
 <tbody id="contenido">  
   @if(isset($listas))
   @foreach($listas as $lista)
   <tr>
    <td>{{ $lista->materia->materia }}</td>
    <td>{{ $lista->tipo }}</td>
    <td>{{ $lista->cortes }}</td>
    <td>{{ $lista->maximanota }}</td>
    <td>
      <button class="btn btn-success" title="Editar Materia" onclick="modificar('{{ $lista->idconfig_materias }}')"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
      <button class="btn btn-danger" title="Eliminar Configuracion" onclick="eliminar('{{ $lista->idconfig_materias }}','{{ $lista->materia->idmateria }}')"><i class="fa fa-minus-circle" aria-hidden="true"></i></button>
    </td>
  </tr>
  @endforeach
  @endif
</tbody>
</table>
</div>