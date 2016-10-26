        <div class="table-responsive">
        <table id="datatables-example" class="table table-striped table-bordered jambo_table table-condensed" width="100%" cellspacing="0">
         <thead>
          <tr>
           <th class="col-sm-1">Cedula</th>
           <th class="col-sm-2">Nombre</th>         
           @for ($i = 0; $i < $cortes; $i++)
           <th class="col-sm-1">Corte {{ $i+1 }} ( {{ $maximanota }} {{ $tipo }} ) </th>
           @endfor
           <th class="col-sm-1">Definitiva ({{ $definitiva }})</th>
         </tr>
         <input type="hidden" id="maximanota" value="{{ $maximanota }}">
       </thead>
       <tbody id="contenido"> 
         {{--*/ $j = 0 /*--}} 
         @foreach($alumnos as $alumno)
         {{--*/ $j++ /*--}}
         <tr>     
           <td>{{ $alumno->cedula }} </td>
           <td>{{ $alumno->nombre }} </td>
           @for ($i = 1; $i <= $cortes; $i++)
           {{--*/ $not= (array) $alumno /*--}}
           {{--*/ $nota = $not['corte'.$i] /*--}} 
           <td><input type="text" class="form-control" name="txtNota[{{ $j }}][]" id="nota{{ $j }}{{ $i }}" value="{{ $nota }}" readonly=""></td>
           @endfor
           <td><input type="text" class="form-control" id="definitiva{{$j}}" name="definitiva{{$j}}" value="{{ $alumno->definitiva }}" readonly=""></td>
         </tr>
         @endforeach
       </tbody>
     </table>
     </div>
     <div class="clearfix"></div>    
   </form>