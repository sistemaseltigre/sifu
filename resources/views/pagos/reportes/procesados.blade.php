 @extends('plantilla.layaout')
 @section('content')
 <script src="{{asset('js/scripts/verificar_mensualidad.js')}}"> </script>
 <div class="col-md-12 col-sm-12 col-xs-12">
  <div class="x_panel">
    <div class="x_title">
      <h2>Reporte de Pagos Procesados</h2>
      <ul class="nav navbar-right panel_toolbox">
        <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
        </li> 
      </ul>
      <div class="clearfix"></div>
    </div>
    <div class="x_content">
      <div class="col-xs-12 col-sm-12">
        <div class="btn-group">
          <a class="btn btn-sm btn-default" type="button" data-placement="top" data-toggle="tooltip" data-original-title="Imprimir"  href="{{ asset('pdf/pagos_procesados') }}"><i class="fa fa-print fa-2x"></i></a>
        </div>
        <hr>
        <div class="table-responsive">
          <table id="datatables" class="table table-striped jambo_table table-condensed">
           <thead>
             <tr>
               <th colspan="2">Datos Del Alumno</th>
               <th colspan="3">Información de Pago</th>
               <th></th>
             </tr>
             <tr>
               <th class="col-sm-2">Cedula</th>
               <th class="col-sm-2">Nombre</th>               
               <th class="col-sm-2">Pago N#</th>
               <th class="col-sm-2">Fecha</th>
               <th class="col-sm-2">Monto</th>
               <th class="col-sm-1">Detalles</th>
             </tr>
           </thead>
           <tbody id="contenido">   
             @foreach ($pagos as $pago)
             <tr>
               <td>{{ $pago->alumno->cedula }}</td>
               <td>{{ $pago->alumno->nombre }}</td>
               <td>{{ sprintf('%08d',$pago->id) }}</td>
               <td>{{ $pago->fecha }}</td>
               <td>{{ $pago->monto }}</td>
               <td><i class="fa fa-cog" aria-hidden="true"></i></td>
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
    <div class="clearfix"></div>
  </div>
</div>
</div>

@stop