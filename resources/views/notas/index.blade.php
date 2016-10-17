@extends('plantilla.layaout')
@section('content')
<script src="{{ asset('js/scripts/notas.js') }}"> </script>
<div class="clearfix"></div>
<div class="x_panel">
  <div class="x_title">..
    <h2>Seleccione Alumno y Materia</h2>
    <div class="clearfix"></div>
  </div>
  <div class="x_content" style="min-height: 450px;">
  <div class="row" id="seccion">  
    <div class="well ">
      <div class="col-sm-3 col-xs-3 col-sm-offset-2">
        <div class="form-group">
          <div class="col-lg-12">          
            <select name="cmbAlumno" id="cmbAlumno" class="form-control">
              <option>Seleccione Alumno</option>
              @foreach ($alumnos as $alumno)
              <option value="{{ $alumno->alumno->idalumno }}">{{ $alumno->alumno->cedula }}</option>
              @endforeach
            </select>
          </div>
        </div>    
      </div>
      <div class="col-sm-3 col-xs-3">
        <div class="form-group">
          <div class="col-lg-12"> 
            <div class="input-group">             
              <select name="cmbMaterias" id="cmbMaterias" class="form-control">
                <option>Seleccione Materia</option>                
              </select>
              <span class="input-group-btn">
                <button class="btn btn-dark" type="button" id="btnBuscarNotas"><i class="fa fa-search"></i></button>
              </span>
            </div>
          </div>
        </div>    
      </div>
       <div class="clearfix"></div>
    </div>

  </div>
  <div class="row" id="contenido-lista">
  
  </div>
</div>
</div>

@stop
