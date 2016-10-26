<div class="table-responsive">
          <table id="datatables" class="table table-striped jambo_table table-condensed" >
             <thead>
                <tr>
                   <th class="col-sm-4">Documentos</th>
                   <th class="col-sm-2">Opcion</th>
               </tr>
           </thead>
           <tbody id="contenido">  
           @if (isset($documentos))
               @foreach ($documentos as $documento)
               <tr>
                   <td>{{ $documento->nombre }}</td>
                   <td>
                   <button title="Editar Usuario" class="btn btn-success btn-sm" onclick="modificar('{{ $documento->id }}')"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                   <button title="Eliminar Usuario" class="btn btn-danger btn-sm" onclick="eliminar('{{ $documento->id }}')"><i class="fa fa-trash-o" aria-hidden="true"></i> </button>
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