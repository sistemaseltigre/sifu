<div class="table-responsive">
  <table id="datatables" class="table table-striped table-bordered jambo_table table-condensed">
   <thead>
    <tr>
     <th class="col-sm-2">Periodo Academico</th>
     <th class="col-sm-2">Estatus</th>
     <th class="col-sm-1">Opcion</th>
   </tr>
 </thead>
 <tbody id="contenido">  
   @if (isset($periodos))
   @foreach ($periodos as $periodo)
   <tr>
     <td>{{ $periodo->periodo }}</td>
     <td>
       @if($periodo->estatus=='inactivo')
       <h4><span class="label label-success" style="color:#ffffff">{{ $periodo->estatus }}</span></h4>
       @else
       <h4><span class="label label-primary" style="color:#ffffff">{{ $periodo->estatus }}</span></h4>
       @endif
     </td>
     <td>
       @if($periodo->estatus=='inactivo')
       <a title="Activar Periodo" href="{{ asset('/config_periodo/activar/'.$periodo->idperiodo) }} " class="btn btn-primary"><i class="fa fa-check" aria-hidden="true"></i></a>
       @else
       <a title="Desactivar Periodo" href="{{ asset('/config_periodo/desactivar/'.$periodo->idperiodo) }} " class="btn btn-warning"><i class="fa fa-times" aria-hidden="true"></i></a>
       @endif
       <button title="Editar Periodo" class="btn btn-success" onclick="modificar('{{ $periodo->idperiodo }}')"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
       <button title="Eliminar Periodo" class="btn btn-danger" onclick="eliminar('{{ $periodo->idperiodo }}')"><i class="fa fa-trash-o" aria-hidden="true"></i> </button>
       @if(Auth::user()->idusuario==1)
       <button title="Migrar Datos" class="btn btn-info" onclick="importar('{{ $periodo->idperiodo }}')"><i class="fa fa-random" aria-hidden="true"></i></button>
      @endif
     </td>
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