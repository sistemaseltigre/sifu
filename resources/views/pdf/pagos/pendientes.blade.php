<table id="datatables" class="table table-striped jambo_table table-condensed">
           <thead>
             <tr>
               <th colspan="2">Datos Del Alumno</th>
               <th colspan="2">Información de Pago</th>
               <th></th>
             </tr>
             <tr>
               <th class="col-sm-2">Cedula</th>
               <th class="col-sm-2">Nombre</th>
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
               <td>{{ $pago->fecha }}</td>
               <td>{{ $pago->monto }}</td>
               <td><i class="fa fa-cog" aria-hidden="true"></i></td>
             </tr>
             @endforeach 
           </tbody>
         </table>