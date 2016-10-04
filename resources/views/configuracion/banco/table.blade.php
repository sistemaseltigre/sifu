<div class="table-responsive">
          <table id="datatables" class="table table-striped jambo_table table-condensed" >
             <thead>
                <tr>
                   <th class="col-sm-2">Cuenta</th>
                   <th class="col-sm-2">Banco</th>
                   <th class="col-sm-1">Tipo de Cuenta</th>
                   <th class="col-sm-2">Nombre del Titular</th>
                    <th class="col-sm-1">Cedula</th>
                     <th class="col-sm-2">Email</th>
                   <th class="col-sm-1">Opcion</th>
               </tr>
           </thead>
           <tbody id="contenido">  
           @if (isset($bancos))
               @foreach ($bancos as $banco)
               <tr>
                   <td>{{ $banco->cuenta }}</td>
                   <td>{{ $banco->banco }}</td>
                   <td>{{ $banco->tipo }}</td>
                   <td>{{ $banco->titular }}</td>
                   <td>{{ $banco->cedula }}</td>
                   <td>{{ $banco->email }}</td>
                   <td>
                   <button title="Editar Usuario" class="btn btn-success btn-sm" onclick="modificar('{{ $banco->idbanco }}')"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                   <button title="Eliminar Usuario" class="btn btn-danger btn-sm" onclick="eliminar('{{ $banco->idbanco }}')"><i class="fa fa-trash-o" aria-hidden="true"></i> </button>
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