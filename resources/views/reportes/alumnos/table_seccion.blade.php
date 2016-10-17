<div class="btn-group">
    <a class="btn btn-sm btn-default" type="button" data-placement="top" data-toggle="tooltip" data-original-title="Imprimir"  href="{{ asset('pdf/alumnos/seccion/'.$seccion_id) }}"><i class="fa fa-print fa-2x"></i></a>
  </div>
  <hr>
<div class="table-responsive">
  <table id="datatables" class="table table-striped jambo_table table-condensed">
   <thead>
    <tr>
     <th class="col-sm-2">Cédula</th>
     <th class="col-sm-2">Nombre</th>
     <th class="col-sm-2">Apellido</th>
     <th class="col-sm-2">Grado</th>
     <th class="col-sm-2">Condición</th>
   </tr>
 </thead>
 <tbody id="contenido">   
   @if(isset($alumnos))
   @foreach ($alumnos as $alumno)
   <tr>
     <td>{{ $alumno->alumno->cedula }}</td>
     <td>{{ $alumno->alumno->nombre }}</td>
     <td>{{ $alumno->alumno->apellido }}</td>
     <td>{{ $alumno->alumno->grado->grado }}</td>
     <td>{{ $alumno->inscrito->condicion }}</td>
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