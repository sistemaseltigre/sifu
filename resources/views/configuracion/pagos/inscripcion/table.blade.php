<div class="table-responsive">
  <table id="datatables-example" class="table table-striped jambo_table table-condensed">
   <thead>
    <tr>
     <th class="col-sm-3">Monto de Inscripción</th>
     <th class="col-sm-3">Monto del Seguro</th>
     <th class="col-sm-3">Otro</th>
     <th class="col-sm-1">Editar</th>
     <th class="col-sm-1">Eliminar</th>
   </tr>
 </thead>
 <tbody id="contenido">   
   @foreach ($monto_inscripcion as $monto)
   <tr>
     <td>{{ $monto->inscripcion }}</td>
     <td>{{ $monto->seguro }}</td>
     <td>{{ $monto->otro }}</td>
     <td><button class="btn btn-success btn-sm" onclick="modificar('{{ $monto->id }}')"> <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Editar</button></td> 
     <td><button class="btn btn-danger btn-sm" onclick="eliminar('{{ $monto->id }}')"> <i class="fa fa-trash" aria-hidden="true"></i> Eliminar</button></td>
   </tr>
   @endforeach      
 </tbody>
</table>
</div>