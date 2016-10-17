 @extends('plantilla.layaout')
 @section('content')
 <div class="col-md-12 col-sm-12 col-xs-12">
  <div class="x_panel">
    <div class="x_title">
      <h2>Alumnos Morosos</h2>

      <ul class="nav navbar-right panel_toolbox">
        <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
        </li> 
      </ul>
      <div class="clearfix"></div>
    </div>
    <div class="x_content">
    <div class="btn-group">
          <a class="btn btn-sm btn-default" type="button" data-placement="top" data-toggle="tooltip" data-original-title="Imprimir"  href="{{ asset('pdf/alumnos/morosos') }}"><i class="fa fa-print fa-2x"></i></a>
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
       <th class="col-sm-2">Cantidad Pendiente</th>
     </tr>
   </thead>
   <tbody id="contenido">   
     @foreach ($alumnos as $alumno)   
     <tr>
       <td>{{ $alumno->cedula }}</td>
       <td>{{ $alumno->nombre }}</td>
       <td>{{ $alumno->apellido }}</td>
       <td>{{ $alumno->grado }}</td>      
       <td>{{ $alumno->total }}</td>
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
    </div>
  </div>
</div>

@stop