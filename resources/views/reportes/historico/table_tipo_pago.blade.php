<div class="btn-group">
  <a class="btn btn-sm btn-default" type="button" data-placement="top" data-toggle="tooltip" data-original-title="Imprimir"  href="{{ asset('pdf/historico/tipo_pago/'.$tipo) }}"><i class="fa fa-print fa-2x"></i></a>
</div>
<hr>
<div class="table-responsive">
  <table id="datatables" class="table table-striped jambo_table table-condensed">
   <thead>
    <tr>
     <th class="col-sm-1">Cédula</th>
     <th class="col-sm-2">Nombre</th>
     <th class="col-sm-2">Apellido</th>
     <th class="col-sm-1">Fecha</th>
     <th class="col-sm-1">Monto Pagado</th>
   </tr>
 </thead>
 <tbody id="contenido">   
   @if(isset($detalles))   
   @foreach ($detalles as $detalle)
   <tr>
     <td>{{ $detalle->pago->alumno->cedula }}</td>
     <td>{{ $detalle->pago->alumno->nombre }}</td>
     <td>{{ $detalle->pago->alumno->apellido }}</td>
     <td>{{ App\Fecha::getDate($detalle->pago->fecha) }}</td>
     <td>{{ $detalle->monto }}</td>
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