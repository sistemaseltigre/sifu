@extends('plantilla.layaout')
@section('content')

<script src="{{ asset('js/scripts/cargar_notas.js') }}"> </script>
<div class="x_panel">
  <div class="x_title">
    <div class="row">
      <div class="col-sm-6">
        <label class="col-sm-2 control-label">Profesor:</label>
        <label class="col-sm-9 control-label">{{ session()->get('name') }}</label>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <label class="col-sm-2 control-label">Materia:</label>
        <label class="col-sm-9 control-label">{{ $materia->materia }}</label>

      </div>
      <div class="col-sm-6">
        <label class="col-sm-2 control-label">Seccion:</label>
        <label class="col-sm-9 control-label">{{ $seccion->seccion }}</label>
      </div>
    </div>
    <div class="clearfix"></div>
  </div>
  <div class="x_content" style="min-height: 450px;">    
      <form name="formulario" id="formulario" method="post" action="{{ action('profesor\carga_notaController@create') }}">
        {{ csrf_field() }}
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
           <input type="hidden" name="nota_id{{$j}}" value="{{ $alumno->idcarga_nota}}">
           <input type="hidden" name="alumno_id{{$j}}" value="{{ $alumno->idalumno}}">   
           <input type="hidden" name="seccion_id" value="{{ $seccion->idseccion}}">  
           <input type="hidden" name="materia_id" value="{{ $materia->idmateria }}">
           <td>{{ $alumno->cedula }} </td>
           <td>{{ $alumno->nombre }} </td>
           @for ($i = 1; $i <= $cortes; $i++)
           {{--*/ $not= (array) $alumno /*--}}
           {{--*/ $nota = $not['corte'.$i] /*--}} 
           <td><input type="text" class="form-control" name="txtNota[{{ $j }}][]" id="nota{{ $j }}{{ $i }}" value="{{ $nota }}" onkeyup="calcular(this.value, {{ $j }}, {{ $cortes }}, {{ $i }})"></td>
           @endfor
           <td><input type="text" class="form-control" id="definitiva{{$j}}" name="definitiva{{$j}}" value="{{ $alumno->definitiva }}" readonly=""></td>
         </tr>
         @endforeach
       </tbody>
     </table>
     </div>
     <div class="clearfix"></div>
     <div class="col-lg-4 col-lg-offset-5" style="bottom: 10px;">
       <button type="submit" class="btn btn-primary">Guardar</button>
     </div>
     <input type="hidden" value="{{ $j }}" name="cantidad">
   </form>
</div>
</div>

@stop