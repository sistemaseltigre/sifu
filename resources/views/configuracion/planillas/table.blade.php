<div class="table-responsive">
  <table id="datatables" class="table table-striped jambo_table table-condensed">
   <thead>
    <tr>
     <th class="col-sm-4">Formato</th>
     <th class="col-sm-3">Acceso</th>
     <th class="col-sm-3">Opcion</th>
   </tr>
 </thead>
 <tbody id="contenido">
 @if(isset($planillas))   
   @foreach ($planillas as $planilla)
   <tr>
     <td>{{ $planilla->formato }}</td>     
     <td>
       @foreach ($planilla->accesos as $acceso)  
       @if($acceso->rol_id==2)     
       Profesores
       @elseif($acceso->rol_id==3)
       Alumnos
       @elseif($acceso->rol_id==4)
       Representantes
       @endif
       @endforeach
     </td>
     <td><a class="btn btn-success btn-sm" href="{{ asset('/configurar/planilla/editar-formato/'.$planilla->id) }}"> <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Editar</a> 
     <button class="btn btn-danger btn-sm" onclick="eliminar('{{ $planilla->id }}')"> <i class="fa fa-trash" aria-hidden="true"></i> Eliminar</button></td>
   </tr>
   @endforeach    
   @endif  
 </tbody>
</table>
</div>
<script type="text/javascript">
 $(document).ready(function(){
  $('#datatables').DataTable();
});
</script>