@extends('plantilla.layaout')
@section('content')
<script src="{{ asset('js/scripts/notas.js') }}"> </script>
<div class="clearfix"></div>
<div class="x_panel">
  <div class="x_title">..
    <h2>Seleccione Materia</h2>
    <div class="clearfix"></div>
  </div>
  <div class="x_content" style="min-height: 450px;">
    <div class="row" id="seccion">  
      <div class="well ">
        <div class="col-sm-4 col-xs-12 col-sm-offset-4">
          <div class="form-group">
            <div class="col-lg-12"> 
              <div class="input-group">             
                <select name="cmbMaterias" id="cmbMaterias" class="form-control">
                  <option>Seleccione Materia</option>
                  @if(isset($materias))    
                  @foreach ($materias as $materia)
                  <option value="{{ $materia->idmateria }}">{{ $materia->materia }}</option>    
                  @endforeach        
                  @endif    
                </select>
                <span class="input-group-btn">
                  <button class="btn btn-dark" type="button" id="btnBuscarNotasAlumnos"><i class="fa fa-search"></i></button>
                </span>
              </div>
            </div>
          </div>    
        </div>
        <div class="clearfix"></div>
      </div>

    </div>
    <div class="row" id="contenido-notas">

    </div>
  </div>
</div>

@stop
