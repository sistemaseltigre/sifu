<div class="table-responsive">
  <table id="datatables-example" class="table table-striped table-bordered" width="100%" cellspacing="0">
   <thead>
    <tr>
     <th class="col-sm-3">Monto de Inscripcion</th>
     <th class="col-sm-3">Monto del Seguro</th>
     <th class="col-sm-3">Cuotas Mensuales</th>
     <th class="col-sm-3">Otro</th>
     <th class="col-sm-1">Editar</th>
     <th class="col-sm-1">Eliminar</th>
   </tr>
 </thead>
 <tbody id="contenido">   
   @foreach ($cuotas as $cuota)
   <tr>
     <td>{{ $cuota->inscripcion }}</td>
     <td>{{ $cuota->seguro }}</td>
     <td>{{ $cuota->cuota }}</td>
     <td>{{ $cuota->otro }}</td>
     <td><button class="btn btn-success" onclick="modificar('{{ $cuota->idcuota }}')"> <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Editar</button></td> 
     <td><button class="btn btn-danger" onclick="eliminar('{{ $cuota->idcuota }}')"> <i class="fa fa-trash" aria-hidden="true"></i> Eliminar</button></td>
   </tr>
   @endforeach      
 </tbody>
</table>
</div>