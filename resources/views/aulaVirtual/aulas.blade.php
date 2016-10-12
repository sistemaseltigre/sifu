<div class="table-responsive">
          <table id="datatables" class="table table-striped jambo_table table-condensed">
             <thead>
                <tr>
                   <th class="col-sm-1">Asunto</th>
                   <th class="col-sm-2">Descripcion</th>
                   <th class="col-sm-2">Cantidad</th>
                   <th class="col-sm-2">Fecha</th>
                   <th class="col-sm-2">Opciones</th>
               </tr>
           </thead>
           <tbody id="contenido">
           <?php  
           $idusuario = Auth::user()->id;$aulas = \App\aulaVirtual\aulaVirtualModel::where('idusuario', '=', $idusuario)->paginate(5);   ?>
               @foreach ($aulas as $aula)
               <tr>
                   <td>{{ $aula->asunto }}</td>
                   <td>{{ $aula->descripcion }}</td>
                   <td>{{ $aula->cantidad }}</td>
                   <td>{{ $aula->fecha }}</td>
                   <td><button class="btn btn-success btn-sm" onclick=""> <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Entrar</button></td>
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