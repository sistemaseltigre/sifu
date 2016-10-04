@extends('plantilla.layaout')
@section('content')
<script src="{{ asset('js/scripts/consulta_horario.js') }}"> </script>
<div class="clearfix"></div>
<div class="x_panel">
  <div class="x_title">..
    <h2>Consultar horario Por:</h2>
    <div class="clearfix"></div>
  </div>
  <div class="x_content" style="min-height: 450px;">
    <div class="row">
      <div class="col-sm-2 col-sm-offset-1">
        <input type="radio" class="flat" name="tipo" value="profesor"> Profesor
      </div>
      <div class="col-sm-3">
        <input type="radio" class="flat" name="tipo" value="seccion"> Sección
      </div>
    </div>
    <hr>
    <div class="row" id="profesor" style="display: none">
      <div class="col-sm-4 col-xs-12">
        <div class="x_title">..
          <h2>Busqueda por Sección</h2>
          <div class="clearfix"></div>
        </div>
        <div class="form-group">
          <div class="col-lg-10"> 
            <div class="input-group">             
              <select name="cmbProfesor" id="cmbProfesor" class="form-control">
                <option>Seleccione</option>
                @foreach ($profesor as $prof)
                <option value="{{ $prof->idprofesor }}">{{ $prof->nombre_profesor }}</option>
                @endforeach
              </select>
              <span class="input-group-btn">
                <button class="btn btn-dark" type="button" id="btnBuscarProfesor"><i class="fa fa-search"></i></button>
              </span>
            </div>

          </div>
        </div>    
      </div>
    </div>
    <div class="row" id="seccion" style="display: none">
      <div class="x_title">..
        <h2>Busqueda por Sección</h2>
        <div class="clearfix"></div>
      </div>

      <div class="col-sm-3 col-xs-3">
        <div class="form-group">
          <div class="col-lg-12">          
            <select name="cmbGrado" id="cmbGrado" class="form-control">
              <option>Seleccione Grado</option>
              @foreach ($grados as $grado)
              <option value="{{ $grado->idgrado }}">{{ $grado->grado }}</option>
              @endforeach
            </select>
          </div>
        </div>    
      </div>
      <div class="col-sm-3 col-xs-3">
        <div class="form-group">
          <div class="col-lg-12"> 
            <div class="input-group">             
              <select name="cmbSeccion" id="cmbSeccion" class="form-control">
                <option>Seleccione Seccion</option>                
              </select>
              <span class="input-group-btn">
                <button class="btn btn-dark" type="button" id="btnBuscarSeccion"><i class="fa fa-search"></i></button>
              </span>
            </div>
          </div>
        </div>    
      </div>
    </div>


    <div class="row" id="horario">
      <div id='calendar'></div>
    </div>
  </div>
</div>

@stop
